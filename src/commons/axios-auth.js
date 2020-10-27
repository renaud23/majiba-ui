import axios from "axios";
import keycloak from "./keycloak-config";

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
    return {
      ...config,
      ...authorizedHeader(keycloak.token),
    };
  });

  return instance;
}

export default create;
