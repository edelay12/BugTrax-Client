import React from "react";
import ReactDOM from "react-dom";
import { SvgCode } from "./svg";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
        <SvgCode />,
    div
  );
});