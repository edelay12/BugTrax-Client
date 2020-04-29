import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import IssuesFilters from "./issues-filters";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <IssuesFilters />
    </BrowserRouter>,
    div
  );
});