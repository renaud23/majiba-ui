import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { userState } from "../state";
import { keycloakConfig } from "../commons";

const useStyles = makeStyles((theme) => {
  return {
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  };
});

function getLogin(token) {
  return token ? "" : "";
}

export default function ButtonAppBar() {
  const classes = useStyles();
  const [token] = useRecoilState(userState);

  const onLoginCallback = useCallback(
    function () {
      if (!token) {
        // keycloakConfig.login({ redirectUri: `${window.location.origin}` });
        keycloakConfig.init({ flow: "implicit" }).success(function (auth) {
          if (!auth) {
            keycloakConfig.login({
              redirectUri: `https://google.com`,
            });
          }
        });
      }
    },
    [token]
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Majiba api
        </Typography>
        <Button onClick={onLoginCallback} color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
