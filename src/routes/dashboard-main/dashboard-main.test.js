import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from '../../contexts/main-context';
import Dashboard from "./dashboard-main";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
          <MainProvider>
        <Dashboard match={{ params : { teamId : 1}}}/>
        </MainProvider>
    </BrowserRouter>,
    div
  );
});