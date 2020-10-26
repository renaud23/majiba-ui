import React from "react";
import { useRecoilState } from "recoil";
import Typography from "@material-ui/core/Typography";
import { userState } from "../state";

function Accueil() {
  const [token] = useRecoilState(userState);
  return (
    <Typography
      component="div"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      {token ? "Bienvenue!" : "Vous n'êtes pas authentifié."}
    </Typography>
  );
}

export default Accueil;
