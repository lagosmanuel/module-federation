import React from "react";
import ReactDOM from "react-dom";
import MiCompViajes from "./MiCompViajes";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompViajes />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  
