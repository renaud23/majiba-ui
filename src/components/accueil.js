import React from "react";
import { useRecoilState } from "recoil";
import Typography from "@material-ui/core/Typography";
import { userState } from "../state";
import Formulaire from "./formulaire";

function Accueil() {
  const [{ authenticated }] = useRecoilState(userState);
  return (
    <Typography
      component="div"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      {authenticated ? <Formulaire /> : "Vous n'êtes pas authentifié."}
    </Typography>
  );
}

export default Accueil;
