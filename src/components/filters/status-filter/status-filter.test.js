import React from "react";
import ReactDOM from "react-dom";
import StatusFilter from "./status-filter";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StatusFilter />,
    div
  );
});