import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Issues from "./dashboard-issues";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <Issues issues={{length: 1}}/>
    </BrowserRouter>,
    div
  );
});