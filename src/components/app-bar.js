import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { userState } from "../state";
import { keycloack } from "../commons";
import MajibaIcon from "./majiba.icon";

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

export default function ButtonAppBar() {
  const classes = useStyles();
  const [user] = useRecoilState(userState);
  const { authenticated } = user;

  const onLoginCallback = useCallback(
    function () {
      if (!authenticated) {
        keycloack.login({
          redirectUri: `${window.location.origin}/accueil`,
        });
      } else {
        keycloack.logout({
          redirectUri: `${window.location.origin}/accueil`,
        });
      }
    },
    [authenticated]
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
          <MajibaIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Majiba api
        </Typography>
        <Button onClick={onLoginCallback} color="inherit">
          {authenticated ? "logout" : "login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
