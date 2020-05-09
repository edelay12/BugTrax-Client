import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import MessagesContainer from "./messages-container";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MessagesContainer />
    </BrowserRouter>,
    div
  );
});
