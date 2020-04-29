import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DashboardFooter from "./dashboard-footer";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <DashboardFooter />
    </BrowserRouter>,
    div
  );
});