import axios from "axios";

// export const refreshToken = (minValidity = 60) =>
//   new Promise((resolve, reject) => {
//     keycloak
//       .updateToken(minValidity)
//       .success(() => {
//         resolve(keycloak.token);
//       })
//       .error((error) => {
//         reject(error);
//       });
//   });

const authorizeConfig = (token) => (config) => {
  return {
    ...config,
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "application/json;charset=utf-8",
    Accept: "application/json;charset=utf-8",
  };
};

function create(token) {
  const instance = axios.create();
  instance.interceptors.request.use(function (config) {
    return authorizeConfig(token)(config);
  });

  return instance;
}

export default create;

/*
refreshToken()
      .then(() => {
        Promise.resolve(authorizeConfig(keycloak)(config));
      })
      .catch((e) => {
        console.log(e);
        // keycloak.login();
      })
*/
