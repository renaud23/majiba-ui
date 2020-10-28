import React, { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Waiting from "../waiting";
import "./formulaire.scss";
import { userState } from "../../state";
import { axiosWithAuth, getMajibaUri } from "../../commons";
import Notification from "./notification";
import Token from "./token";

function createUri(name) {
  return `${getMajibaUri()}/application/${name.replace(/\s+/g, "")}/token`;
}

function isEnabled(name) {
  return name.length;
}

function PleaseLogin() {
  return (
    <Typography component="div" variant="body1">
      Vous n'êtes pas encore authentifié.
    </Typography>
  );
}

function Formulaire() {
  const [{ token, authenticated }] = useRecoilState(userState);
  const [name, setName] = useState("");
  const [wait, setWait] = useState(false);
  const [status, setStatus] = useState(undefined);
  const [majibaToken, setMajibaToken] = useState(undefined);

  const onChangeName = useCallback(function (e) {
    setName(e.target.value);
  }, []);

  const onSubmit = useCallback(
    function (e) {
      e.stopPropagation();
      const uri = createUri(name);
      setWait(true);
      setStatus(undefined);
      setMajibaToken(undefined);
      axiosWithAuth(token)
        .get(uri)
        .then(function (response) {
          const { token } = response.data;
          setMajibaToken(token);
          setWait(false);
          setStatus(200);
        })
        .catch(function (e) {
          const { response } = e;
          setWait(false);
          if (response) {
            const { status } = response;
            setStatus(status);
          }
        });
    },
    [name, token]
  );

  if (!authenticated) {
    return <PleaseLogin />;
  }
  return (
    <Paper elevation={2}>
      <Waiting status={wait} />
      <Typography component="div" variant="h4">
        Demande de renouvellement de jeton.
      </Typography>

      <form className="majiba-demande-token" noValidate autoComplete="off">
        <TextField
          id="application-name"
          label="Nom de l'application"
          variant="outlined"
          onChange={onChangeName}
          className="form-field"
        />
        <Button
          variant="contained"
          color="primary"
          className="form-button"
          disabled={!isEnabled(name)}
          onClick={onSubmit}
        >
          Soumettre
        </Button>
        <Notification status={status} />
        <Token value={majibaToken} />
      </form>
    </Paper>
  );
}

export default Formulaire;
