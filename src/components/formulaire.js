import React, { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, axiosState } from "../state";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Waiting from "./waiting";
import Button from "@material-ui/core/Button";
import "./formulaire.scss";

function getMajibaUri(name) {
  return `application/${name.replace(/\s+/g, "")}/token`;
}

function isEnabled(name) {
  return name.length;
}

function Notifiaction({ status }) {
  switch (status) {
    case 400:
      return (
        <Alert severity="error" className="notification">
          Cette application n'éxiste pas !
        </Alert>
      );
    case 401:
      return (
        <Alert severity="error" className="notification">
          Vous n'avez pas les droits nécessaires !
        </Alert>
      );

    default:
      return null;
  }
}

function Formulaire() {
  const [{ givenName }] = useRecoilState(userState);
  const [name, setName] = useState("");
  const [wait, setWait] = useState(false);
  const [status, setStatus] = useState(undefined);
  const { majiba } = useRecoilValue(axiosState);

  const onChangeName = useCallback(function (e) {
    setName(e.target.value);
  }, []);

  const onSubmit = useCallback(
    function (e) {
      e.stopPropagation();
      const uri = getMajibaUri(name);
      setWait(true);
      majiba
        .get(uri)
        .then(function (response) {
          setWait(false);
          return response.json();
        })
        .then(function ({ token }) {
          console.log(token);
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
    [name, majiba]
  );

  return (
    <>
      <Waiting status={wait} />
      <Typography component="div" variant="h2">
        Bienvenue {givenName}
      </Typography>
      <Typography component="div" variant="body1">
        Vous pouvez réaliser une demande de renouvellement de token sur
        MAJIBA-API.
      </Typography>
      <Paper elevation={2}>
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
          <Notifiaction status={status} />
        </form>
      </Paper>
    </>
  );
}

export default Formulaire;
