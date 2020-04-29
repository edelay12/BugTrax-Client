import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SequenceFooter from "./sequence-footer";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <SequenceFooter />
    </BrowserRouter>,
    div
  );
});