import React from "react";
import ReactDOM from "react-dom";
import CategoryFilter from "./category-filter";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CategoryFilter />,
    div
  );
});