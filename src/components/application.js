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
import { keycloack } from "../commons";

function Application() {
  const [user, setUserState] = useRecoilState(userState);

  useEffect(
    function () {
      const { authenticated } = user;
      if (!authenticated) {
        keycloack.init().success(function (is) {
          if (is) {
            setUserState({
              ...user,
              token: keycloack.token,
              givenName: keycloack.tokenParsed.given_name,
              authenticated: true,
            });
          }
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
        <Container role="main" component="main" fixed>
          <Switch>
            <Route path="/accueil" component={Accueil} />
            <Route path="/" component={() => <Redirect to="/accueil" />} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default Application;
