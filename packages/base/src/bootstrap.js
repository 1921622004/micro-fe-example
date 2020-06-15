import App from "./App";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "antd/dist/antd.css";

// import "./index.css";

ReactDom.render(
  (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root'));

