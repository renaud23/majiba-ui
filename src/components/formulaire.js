import React, { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, axiosState } from "../state";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Waiting from "./waiting";
import Button from "@material-ui/core/Button";
import { useStyles } from "./theme";
import "./formulaire.scss";

function getMajibaUri(name) {
  return `application/${name}/token`;
}

function isEnabled(name) {
  return name.length;
}

function Formulaire() {
  const [{ givenName }] = useRecoilState(userState);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [wait, setWait] = useState(false);
  const { majiba } = useRecoilValue(axiosState);

  const onChangeName = useCallback(function (e) {
    setName(e.target.value);
  }, []);

  const onSubmit = useCallback(
    function (e) {
      e.stopPropagation();
      const uri = getMajibaUri(name);
      majiba.get(uri).then(function (token) {
        console.log(token);
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
            className={classes.button}
            variant="contained"
            color="primary"
            className="form-button"
            disabled={!isEnabled(name)}
            onClick={onSubmit}
          >
            Soumettre
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default Formulaire;
