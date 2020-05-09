import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NewIssuesLineChart from "./new-issues-line-chart";
import IssuesPieChart from "./issues-pie-chart";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <NewIssuesLineChart />
      <IssuesPieChart />
    </BrowserRouter>,
    div
  );
});
