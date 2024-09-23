import React from "react";
import ReactDOM from "react-dom";
import MiCompA from "./MiCompA";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompA />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  