import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../state";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Accueil from "./accueil";
import theme from "./theme";
import AppBar from "./app-bar";
import RefreshToken from "./refresh-token";
import MajibaApps from "./majiba-apps";
import { keycloak } from "../commons";
import "./application.scss";

function Application() {
  const [user, setUserState] = useRecoilState(userState);

  useEffect(
    function () {
      const { authenticated } = user;
      if (!authenticated) {
        keycloak
          .init()
          .success(function (is) {
            if (is) {
              setUserState({
                ...user,
                token: keycloak.token,
                givenName: keycloak.tokenParsed.given_name,
                authenticated: true,
              });
            }
          })
          .error(function (e) {
            console.log(e);
          });
      }
    },
    [setUserState, user]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar />
        <Container role="main" component="main" fixed className="container">
          <Switch>
            <Route exact path="/majiba-ui/accueil" component={Accueil} />
            <Route
              exact
              path="/majiba-ui/renew-token"
              component={RefreshToken}
            />
            <Route
              exact
              path="/majiba-ui/display-apps"
              component={MajibaApps}
            />
            <Route
              path="/"
              component={() => <Redirect to="/majiba-ui/accueil" />}
            />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default Application;
