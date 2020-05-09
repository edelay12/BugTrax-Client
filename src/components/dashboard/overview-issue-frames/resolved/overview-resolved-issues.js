import React, { useContext } from "react";
import { Trigger } from "../../../../components/utils/utils";
import MainContext from "../../../../contexts/main-context";
import { faHourglass } from "@fortawesome/fontawesome-free-solid";
import Collapsible from "react-collapsible";
import IssueItem from "../../../main-issue-item/issue-item";
import NoIssuesFound from "../issues-not-found/issues-not-found";

export default function OverviewResolvedIssues() {
  const ContextMain = useContext(MainContext);
  return (
    <Collapsible
      open={true}
      trigger={
        <Trigger name="Resolved" icon={faHourglass} iconClass="resolved-icon" />
      }
    >
      <div className="Overview-issues-frame">
        {ContextMain.resolvedIssues.length == 0 ? (
          <NoIssuesFound />
        ) : (
          ContextMain.resolvedIssues.map(issue => <IssueItem issue={issue} />)
        )}
      </div>
    </Collapsible>
  );
}
