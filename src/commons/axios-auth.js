import axios from "axios";
import keycloak from "./keycloak-config";

function refreshToken(minValidity = 60) {
  return new Promise((resolve, reject) => {
    keycloak
      .updateToken(minValidity)
      .success(function (token) {
        return new Promise.resolve(token);
      })
      .error((error) => {
        reject(error);
      });
  });
}

function authorizedHeader(token) {
  return {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "application/json;charset=utf-8",
    Accept: "application/json;charset=utf-8",
  };
}

function create(baseURL, onRefresh) {
  const instance = axios.create({ baseURL });
  instance.interceptors.request.use(function (config) {
    return { ...config, ...authorizedHeader(keycloak.token) };
    // return refreshToken()
    //   .then(function (token) {
    //     if (typeof onRefresh === "function") {
    //       onRefresh(token);
    //     }
    //     return { ...config, ...authorizedHeader(token) };
    //   })
    //   .catch(() => keycloak.login());
  });

  return instance;
}

export default create;
