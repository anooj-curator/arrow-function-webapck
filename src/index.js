import React from "react";
import ReactDOM from "react-dom";
import "../polyfill";
import "./index.css";

const TestComponent = (title, subTitle) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};

ReactDOM.render(
  <TestComponent title="Test Component Title" subTitle="Test component SubTitle"/>,
  document.getElementById("root")
);
