import React from "react";
import Typography from "@material-ui/core/Typography";
import Formulaire from "./refresh-token";
import Welcome from "./welcome";
import GitLabMajiba from "./gitlab-majiba";
import "./accueil.scss";

function Accueil() {
  return (
    <Typography component="div" className="accueil">
      <Welcome />
      <Formulaire />
      <GitLabMajiba />
    </Typography>
  );
}

export default Accueil;
