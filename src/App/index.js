import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import MainLayout from "./../App/components/layouts/MainLayout/index.js";
import MainTheme from "./../App/components/themes/MainTheme.js";
import createBrowserHistory from "history/createBrowserHistory";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <Router history={browserHistory}>
          <Switch>
            <MainLayout />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
