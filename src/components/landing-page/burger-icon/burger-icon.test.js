import React from "react";
import ReactDOM from "react-dom";
import BurgerIcon from "./burger-icon";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
        <BurgerIcon />,
    div
  );
});