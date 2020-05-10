import React from "react";
import ReactDOM from "react-dom";
import { MainProvider } from '../../../contexts/main-context';
import AssigneeFilter from "./assignee-filter";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MainProvider>
  <AssigneeFilter />
  </MainProvider>
, div);
});
