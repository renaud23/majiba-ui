import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Accueil from "./accueil";
import theme from "./theme";
import AppBar from "./app-bar";

// const [text, setText] = useRecoilState(textState);

// const redirectUri =
// 			this.props.redirectUri || `${window.location.origin}`;
// 		keycloak.login({
// 			redirectUri,
// 		});

const useStyles = makeStyles((theme) => ({}));

function Application() {
  const classes = useStyles();

  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}

export default Application;
