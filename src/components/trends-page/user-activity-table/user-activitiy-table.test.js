import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserActivityTable from "./user-activity-table";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <UserActivityTable />
    </BrowserRouter>,
    div
  );
});