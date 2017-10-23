import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index.js";
import registerServiceWorker from "./config/ServiceWorker/register/index.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
