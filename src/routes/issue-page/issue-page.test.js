import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import IssuePage from "./issue-page";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <IssuePage />
    </BrowserRouter>,
    div
  );
});