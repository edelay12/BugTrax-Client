import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import IssueItem from "./issue-item";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <IssueItem />
    </BrowserRouter>,
    div
  );
});