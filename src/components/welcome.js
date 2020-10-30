import React from "react";
import Typography from "@material-ui/core/Typography";
import { useRecoilState } from "recoil";
import { userState } from "../state";

function Welcome() {
  const [{ givenName }] = useRecoilState(userState);
  if (givenName) {
    return <Typography variant="h3">{`Bienvenue ${givenName}`}</Typography>;
  }
  return <Typography variant="h3">{`Vous n'êtes pas authentifié.`}</Typography>;
}

export default Welcome;
