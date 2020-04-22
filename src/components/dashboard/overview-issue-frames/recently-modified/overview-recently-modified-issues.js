import React, { useContext } from 'react';
import { Trigger } from "../../../../components/utils/utils";
import MainContext from "../../../../contexts/main-context";
import {
    faHistory,
  } from "@fortawesome/fontawesome-free-solid";
  import Collapsible from "react-collapsible";

export default function OverviewRecentlyModIssues(){
const ContextMain = useContext(MainContext);
    return (
        <Collapsible
        open={true}
        trigger={
          <Trigger
            name="Recently modified"
            icon={faHistory}
            iconClass="modified-icon"
          />
        }
      >
        <div className="Overview-issues-frame">
          <div className="O-issue">
            <p>
              This is the collapsible content. It can be any element or
              React component you like.
            </p>
          </div>

          <div className="O-issue">
            <p>
              It can even be another Collapsible component. Check out the
              next section!
            </p>
          </div>
        </div>
      </Collapsible>
    )
}