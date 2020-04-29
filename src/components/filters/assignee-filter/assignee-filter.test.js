import React from "react";
import ReactDOM from "react-dom";
import AssigneeFilter from "./assignee-filter";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AssigneeFilter />,
    div
  );
});