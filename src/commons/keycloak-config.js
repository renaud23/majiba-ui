import keyCloak from "keycloak-js";

const config = keyCloak(`${window.location.origin}/keycloak.json`);
export default config;
