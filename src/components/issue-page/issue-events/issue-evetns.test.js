import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import IssueEvents from "./issue-events";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <IssueEvents />
    </BrowserRouter>,
    div
  );
});