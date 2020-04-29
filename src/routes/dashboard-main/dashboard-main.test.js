import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import OverviewCards from "./overview-cards";
import Dashboard from "./dashboard-main";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <Dashboard />
    </BrowserRouter>,
    div
  );
});