import React, { Component } from "react";
import { Route } from "react-router";
import Navbar from "./../../organisms/Navbar/index";
import Home from "./../../pages/Home/index.js";

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
export default MainLayout;
