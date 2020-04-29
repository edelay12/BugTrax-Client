import React from "react";
import ReactDOM from "react-dom";
import ReporterFilter from "./reporter-filter";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ReporterFilter />,
    div
  );
});