import React, { useContext, useEffect } from "react";
import { Trigger } from "../../../utils/utils";
import MainContext from "../../../../contexts/main-context";
import { faStream } from "@fortawesome/fontawesome-free-solid";
import Collapsible from "react-collapsible";
import IssueItem from "../../../main-issue-item/issue-item";
import "./issues-display.css";
import NoIssuesFound from "../../overview-issue-frames/issues-not-found/issues-not-found";

export default function IssuesDisplay({ issues }) {
  return (
    <Collapsible
      open={true}
      trigger={
        <Trigger
          name={`Viewing issues (${issues.length})`}
          icon={faStream}
          iconClass="results-icon"
        />
      }
    >
      <div className="display-issues-frame">
        {issues.length === 0 ? (
          <NoIssuesFound />
        ) : (
          issues.map(issue => <IssueItem issue={issue} />)
        )}
      </div>
    </Collapsible>
  );
}
