import React from 'react';
import { Trigger } from "../../utils/utils";
  import Collapsible from "react-collapsible";
import { faComments } from '@fortawesome/fontawesome-free-solid';
import './issue-events.css';
import TimelineEvent from '../../timeline-event/timeline-event';
import EventItem from '../event-item/event-item';

  export default function IssueEvents({events}){

    return (
        <Collapsible open={true}
            trigger={
              <Trigger
                name="Events"
                icon={faComments}
                iconClass="events-icon"
              />
            }
          >
            <div className="Issue-events-frame">
                {events.map(event => 
            <EventItem date={event.date_created} change={event.change} summary={event.change_summary} comments={event.change_description}/>
            )}
            </div>
        
          </Collapsible>
    )
  }