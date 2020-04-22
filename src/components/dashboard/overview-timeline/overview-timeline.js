import React, { useContext } from 'react';
import { Trigger } from "../../../components/utils/utils";
import TimelineEvent from "../../../components/timeline-event/timeline-event";
import MainContext from "../../../contexts/main-context";
import {
    faStream,
  } from "@fortawesome/fontawesome-free-solid";
  import Collapsible from "react-collapsible";

export default function OverviewTimeline(){
const ContextMain = useContext(MainContext);

return (
    <Collapsible
    open={true}
    trigger={
      <Trigger
        name="Timeline"
        icon={faStream}
        iconClass="timeline-icon"
      />
    }
  >
    <div className="Overview-issues-frame">
      { //make own timeline component for event/comment
         ContextMain.teamTimeline.map(event => 
      <TimelineEvent change={event.change} date={event.date_updated} />
      )}
    </div>
  </Collapsible>
)
}