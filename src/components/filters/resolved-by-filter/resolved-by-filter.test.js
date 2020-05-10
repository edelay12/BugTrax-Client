import React from "react";
import ReactDOM from "react-dom";
import { MainProvider } from '../../../contexts/main-context';
import ResolvedByFilter from "./resolved-by-filter";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MainProvider>
    <ResolvedByFilter />
    </MainProvider>
,
    div
  );
});