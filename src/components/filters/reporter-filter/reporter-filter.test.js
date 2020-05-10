import React from "react";
import ReactDOM from "react-dom";
import ReporterFilter from "./reporter-filter";
import { MainProvider } from '../../../contexts/main-context';

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MainProvider>
    <ReporterFilter />
    </MainProvider>
    ,
    div
  );
});