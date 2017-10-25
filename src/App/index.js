import React, { Component } from "react";
import "./style.css";
import { Router, Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import MainTheme from "./../App/utilities/themes/MainTheme.js";
import createBrowserHistory from "history/createBrowserHistory";
import asyncComponent from "./../config/asyncComponent/index.js";
import Navbar from "./components/organisms/Navbar/index.js";

const AsyncHome = asyncComponent(() =>
  import("./components/pages/Home/index.js")
);
const AsyncCityWeather = asyncComponent(() =>
  import("./components/pages/CityWeather/index.js")
);
const AsyncDetailsWeather = asyncComponent(() =>
  import("./components/pages/DetailsWeather/index.js")
);

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <Router history={browserHistory}>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={AsyncHome} />
              <Route path="/forecast" component={AsyncCityWeather} />
              <Route path="/details/:city" component={AsyncDetailsWeather} />
              <Route
                render={function() {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
