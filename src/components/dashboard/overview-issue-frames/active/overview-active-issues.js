import React, { useContext } from 'react';
import { Trigger } from "../../../../components/utils/utils";
import MainContext from "../../../../contexts/main-context";
import {
    faHourglassHalf,
  } from "@fortawesome/fontawesome-free-solid";
  import Collapsible from "react-collapsible";
import IssueItem from '../../../main-issue-item/issue-item';
import NoIssuesFound from '../issues-not-found/issues-not-found';

export default function OverviewActiveIssues(){
const ContextMain = useContext(MainContext);
    return (
        <Collapsible
        open={true}
        trigger={
          <Trigger
            name="Active"
            icon={faHourglassHalf}
            iconClass="active-icon"
          />
        }
      >
        <div className="Overview-issues-frame">
        { ContextMain.activeIssues.length == 0 ? <NoIssuesFound /> :
            ContextMain.activeIssues.map(issue => (
                <IssueItem issue={issue} />
              ))}
        </div>
      </Collapsible>
    )

}