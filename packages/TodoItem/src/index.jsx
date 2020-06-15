import React from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import AddItem from "./AddItem";

window.__react2 = React;

ReactDom.render(
  (
    <AddItem />
  ),
  document.getElementById('root'));

