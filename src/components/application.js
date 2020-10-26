import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState, axiosState } from "../state";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";
import Accueil from "./accueil";
import theme from "./theme";
import AppBar from "./app-bar";
import { keycloack, createAxiosWithAuth } from "../commons";

// const useStyles = makeStyles((theme) => ({}));

function getMajibaUri() {
  return process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_MAJIBA_PROD
    : process.env.REACT_APP_MAJIBA_QF;
}

function Application() {
  const [user, setUserState] = useRecoilState(userState);
  const [axios, setAxios] = useRecoilState(axiosState);
  const { majiba } = axios;

  useEffect(
    function () {
      if (!majiba) {
        const mjb = createAxiosWithAuth(getMajibaUri(), function (token) {
          setUserState({ ...user, token });
        });
        setAxios({ ...axios, majiba: mjb });
      }
    },
    [majiba, axios, user, setAxios, setUserState]
  );

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
