import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SubmitIssueForm from "./submit-issue-form";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <SubmitIssueForm />
    </BrowserRouter>,
    div
  );
});