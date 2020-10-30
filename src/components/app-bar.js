import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import VpnKey from "@material-ui/icons/VpnKey";
import Home from "@material-ui/icons/Home";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { userState } from "../state";
import { keycloak } from "../commons";
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
  const [menu, setMenu] = useState(false);

  const onLoginCallback = useCallback(
    function () {
      if (!authenticated) {
        keycloak.login({
          redirectUri: `${window.location.protocol}//${window.location.host}${process.env.PUBLIC_URL}/accueil`,
        });
      } else {
        keycloak.logout({
          redirectUri: `${window.location.origin}/`,
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
          onClick={() => setMenu(true)}
        >
          <MajibaIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Majiba api - renouvellement de jeton d'accès.
        </Typography>
        <Button onClick={onLoginCallback} color="inherit">
          {authenticated ? "logout" : "login"}
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={menu} onClose={() => setMenu(false)}>
        <ListItem
          button
          component={Link}
          to="/majiba-ui/accueil"
          onClick={() => setMenu(false)}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/majiba-ui/display-apps"
          onClick={() => setMenu(false)}
        >
          <ListItemIcon>
            <FormatListNumbered />
          </ListItemIcon>
          <ListItemText primary="Consulter la liste des applications" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/majiba-ui/renew-token"
          onClick={() => setMenu(false)}
        >
          <ListItemIcon>
            <VpnKey />
          </ListItemIcon>
          <ListItemText primary="Renouveler un jeton" />
        </ListItem>
      </Drawer>
    </AppBar>
  );
}
