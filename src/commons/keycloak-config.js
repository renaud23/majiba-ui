import keyCloak from "keycloak-js";

const keycloak = keyCloak(
  `${window.location.origin}/majiba-ui/keycloak-qf.json`
);

export default keycloak;
