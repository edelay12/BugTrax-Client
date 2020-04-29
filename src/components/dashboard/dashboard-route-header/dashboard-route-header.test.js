import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import DashboardRouteHeader from "./dashboard-route-header";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <DashboardRouteHeader />
    </BrowserRouter>,
    div
  );
});