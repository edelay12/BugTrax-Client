import React from "react";
import ReactDOM from "react-dom";
import LandingFooter from "./footer";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
        <LandingFooter />,
    div
  );
});