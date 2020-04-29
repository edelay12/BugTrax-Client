import React from "react";
import ReactDOM from "react-dom";
import SeverityFilter from "./severity-filter";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <SeverityFilter />,
    div
  );
});