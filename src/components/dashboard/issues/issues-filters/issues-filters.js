import React, { useContext } from "react";
import { Trigger } from "../../../utils/utils";
import MainContext from "../../../../contexts/main-context";
import { faFilter } from "@fortawesome/fontawesome-free-solid";
import Collapsible from "react-collapsible";
import ReporterFilter from "../../../../components/filters/reporter-filter/reporter-filter";
import CategoryFilter from "../../../filters/category-filter/category-filter";
import ResolvedByFilter from "../../../filters/resolved-by-filter/resolved-by-filter";
import SeverityFilter from "../../../filters/severity-filter/severity-filter";
import StatusFilter from "../../../filters/status-filter/status-filter";
import PriorityFilter from "../../../filters/priority-filter/priority-filter";
import "./issues-filters.css";
import AssigneeFilter from "../../../filters/assignee-filter/assignee-filter";

export default function IssuesFilters({
  results,
  filteredResults,
  filter,
  isFilter,
  removeFilters,
  clear,
  setClear
}) {
  return (
    <Collapsible
      open={false}
      trigger={
        <Trigger name="Filters" icon={faFilter} iconClass="filter-icon" />
      }
    >
      <div className="Issues-frame">
        <div className="Issue-grid-container">
          <label className="issueLabel">Assignee</label>
        </div>
        <div className="Issue-grid-container">
          <AssigneeFilter
            results={results}
            filteredResults={filteredResults}
            filter={filter}
            clear={clear}
            setClear={setClear}
          />
        </div>
        <div className="Issue-grid-container">
          <label className="issueLabel">Reporter</label>
        </div>

        <div className="Issue-grid-container">
          <ReporterFilter
            results={results}
            filteredResults={filteredResults}
            filter={filter}
            clear={clear}
            setClear={setClear}
          />
        </div>

        <div className="Issue-grid-container">
          <label className="issueLabel">Category</label>
        </div>

        <div className="Issue-grid-container">
          <CategoryFilter
            filteredResults={filteredResults}
            results={results}
            filter={filter}
            clear={clear}
            setClear={setClear}
          />
        </div>
        <div className="Issue-grid-container">
          <label className="issueLabel">Resolved by</label>
        </div>

        <div className="Issue-grid-container">
          <ResolvedByFilter
            filteredResults={filteredResults}
            results={results}
            filter={filter}
            clear={clear}
            setClear={setClear}
          />
        </div>

        <div className="Issue-grid-container">
          <label className="issueLabel">Severity</label>
        </div>

        <div className="Issue-grid-container">
          <SeverityFilter
            filteredResults={filteredResults}
            results={results}
            filter={filter}
            clear={clear}
            setClear={setClear}
          />
        </div>

        <div className="Issue-grid-container">
          <label className="issueLabel">Status</label>
        </div>

        <div className="Issue-grid-container">
          <StatusFilter
            filteredResults={filteredResults}
            results={results}
            filter={filter}
            clear={clear}
            setClear={setClear}
          />
        </div>

        <div className="Issue-grid-container-b">
          <label className="issueLabel">Priority</label>
        </div>

        <div className="Issue-grid-container-b">
          <PriorityFilter
            filteredResults={filteredResults}
            results={results}
            filter={filter}
            clear={clear}
            setClear={setClear}
          />
        </div>
        <div className="Issue-grid-container-b"></div>

        <div className="Issue-grid-container-b"></div>
      </div>

      {isFilter ? (
        <button className="clear-filters-toggle" onClick={removeFilters}>
          Clear filters
        </button>
      ) : null}
    </Collapsible>
  );
}
