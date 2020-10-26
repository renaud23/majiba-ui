import keyCloak from "keycloak-js";

const keycloack = keyCloak(`${window.location.origin}/keycloak-qf.json`);

export default keycloack;
