import React, { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Waiting from "../waiting";
import { userState } from "../../state";
import { axiosWithAuth, getMajibaUri } from "../../commons";
import Notification from "./notification";
import Confirm from "./confirm";
import Token from "./token";
import "./formulaire.scss";

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
  const [confirm, setConfirm] = useState(false);
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
      setConfirm(false);
      setStatus(undefined);
      setMajibaToken(undefined);
      axiosWithAuth(token)
        .get(uri)
        .then(function ({ data }) {
          const { token } = data;
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
          } else {
            setStatus(666);
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

      {majibaToken ? (
        <form className="majiba-demande-token" noValidate autoComplete="off">
          <Typography component="p" variant="body1" className="warning">
            N'oubliez de copier votre jeton dans le presse papier, à l'aide du
            bouton dans le champ texte avant de quitter cette page.
          </Typography>
          <Token value={majibaToken} />
        </form>
      ) : (
        <form className="majiba-demande-token" noValidate autoComplete="off">
          <Typography component="p" variant="body1" className="warning">
            En renouvelant le jeton de votre application auprès de l'API MAJIBA,
            vous révoquez automatiquement le précédant, s'il existe. Votre
            procédure de déploiement automatique ne fonctionnera alors
            correctement que lorsque vous lui aurez adjoint le nouveau jeton.
          </Typography>
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
            onClick={() => setConfirm(true)}
          >
            Soumettre
          </Button>
          <Confirm
            open={confirm}
            onConfirm={onSubmit}
            onCancel={() => setConfirm(false)}
          />
          <Notification status={status} />
        </form>
      )}
    </Paper>
  );
}

export default Formulaire;
