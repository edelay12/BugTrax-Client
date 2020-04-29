import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SequenceHeader from "./sequence-header";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
        <SequenceHeader />
    </BrowserRouter>,
    div
  );
});