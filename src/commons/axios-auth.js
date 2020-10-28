import axios from "axios";

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
