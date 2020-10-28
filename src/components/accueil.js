import React from "react";
import Typography from "@material-ui/core/Typography";
import Formulaire from "./refresh-token";
import Welcome from "./welcome";
import "./accueil.scss";

function Accueil() {
  return (
    <Typography component="div" className="accueil">
      <Welcome />
      <Formulaire />
    </Typography>
  );
}

export default Accueil;
