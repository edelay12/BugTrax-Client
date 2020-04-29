import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TimelineEvent from "./timeline-event";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <TimelineEvent />
    </BrowserRouter>,
    div
  );
});