import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TeamJoinSuccessful from "./team-join-successful";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <BrowserRouter>
        <TeamJoinSuccessful />
        </BrowserRouter>,
    div
  );
});