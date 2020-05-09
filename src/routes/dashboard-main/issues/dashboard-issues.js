import React, { useContext, useState, useEffect } from "react";
import "./dashboard-issues.css";
import DashboardRouteHeader from "../../../components/dashboard/dashboard-route-header/dashboard-route-header";
import MainContext from "../../../contexts/main-context";
import IssuesDisplay from "../../../components/dashboard/issues/issues-display/issues-display";
import IssuesFilters from "../../../components/dashboard/issues/issues-filters/issues-filters";

export default function Issues(props) {
  const ContextMain = useContext(MainContext);
  const [filter, setFilter] = useState(false);
  const [results, changeResults] = useState([]);
  const [clear, setClear] = useState(false);
  const filteredResults = [];

  const removeFilters = () => {
    changeResults([]);
    setFilter(false);
    setClear(true);
  }

  return (
    <section className="Issues">
      <DashboardRouteHeader title="Issues" />
      <section className="Issues-filters">
        <IssuesFilters
          filteredResults={changeResults}
          results={results}
          filter={setFilter}
          isFilter={filter}
          removeFilters={removeFilters}
          clear={clear}
          setClear={setClear}
        />
      </section>
      <section className="Issues-display">
        <IssuesDisplay
          issues={filter ? results : ContextMain.teamIssues}
          allIssues={ContextMain.teamIssues}
          changeResults={changeResults}
        />
      </section>
    </section>
  );
}
