import React, { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Assignment from "@material-ui/icons/Assignment";
import Button from "@material-ui/core/Button";
import Waiting from "./waiting";
import "./formulaire.scss";
import { writeText } from "clipboard-polyfill/text";
import { userState } from "../state";
import IconButton from "@material-ui/core/IconButton";
import { axiosWithAuth, getMajibaUri } from "../commons";

function createUri(name) {
  return `${getMajibaUri()}/application/${name.replace(/\s+/g, "")}/token`;
}

function isEnabled(name) {
  return name.length;
}

function Notifiaction({ status }) {
  switch (status) {
    case 200:
      return (
        <Alert severity="success" className="notification">
          Votre jeton est ...
        </Alert>
      );
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

function Token({ value }) {
  if (!value) {
    return null;
  }
  return (
    <FormControl variant="outlined" className="token">
      <InputLabel htmlFor="outlined-adornment-amount">Token</InputLabel>
      <OutlinedInput
        id="token"
        label="Token"
        type="text"
        disabled={true}
        variant="outlined"
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="copy"
              title="copy"
              onClick={function () {
                writeText(value);
              }}
            >
              <Assignment />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

function Formulaire() {
  const [{ givenName, token }] = useRecoilState(userState);
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
          <Token value={majibaToken} />
        </form>
      </Paper>
    </>
  );
}

export default Formulaire;
