import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from '../../../contexts/main-context';
import Overview from "./dashboard-overview";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <MainProvider>
        <Overview />
        </MainProvider>
    </BrowserRouter>,
    div
  );
});