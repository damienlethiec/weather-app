import React, { Component } from "react";
import "./style.css";
import { Router, Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import MainTheme from "./../App/utilities/themes/MainTheme.js";
import createBrowserHistory from "history/createBrowserHistory";
import Home from "./components/pages/Home/index.js";
import CityWeather from "./components/pages/CityWeather/index.js";
import Navbar from "./components/organisms/Navbar/index.js";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <Router history={browserHistory}>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/forecast" component={CityWeather} />
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
