import React from 'react';
import { Link } from 'react-router-dom';
import { Trigger } from "../../utils/utils";
  import Collapsible from "react-collapsible";
import { faStream } from '@fortawesome/fontawesome-free-solid';
import './issue-details.css';

  export default function IssueDetails({issue}){
    return (
<Collapsible open={true}
    trigger={
      <Trigger
        name="View Issue Details"
        icon={faStream}
        iconClass="timeline-icon"
      />
    }
  >
    <div className="Issue-details-frame">
<div className='Issue-details-top'>
<label id='Issue-details-label'>Category</label>
<labe id='Issue-details-label'>Reporter</labe>
<label id='Issue-details-label'>Date Submitted</label>
<label id='Issue-details-label'>Last Updated</label>
<span id='Issue-details-span'>{issue.category}</span>
<span id='Issue-details-span'><Link>{issue.creator_user_name}</Link></span>

<span id='Issue-details-span'>{issue.date_created}</span>
<span id='Issue-details-span'>{issue.date_updated}</span>
</div>

<div className='Issue-details-row'>
<div className='Issue-details-left'>
<label id='Issue-details-label'>Priority</label><span id='Issue-details-span'>{issue.priority}</span>
<label id='Issue-details-label'>Severity</label><span id='Issue-details-span'>{issue.severity}</span>
</div>

<div className='Issue-details-right'>
<label id='Issue-details-label'>Assigned to</label><span id='Issue-details-span'>{issue.assignee}</span>
<label id='Issue-details-label'>Status</label><span id='Issue-details-span'>{issue.resolution}</span>
</div>
</div>

<div className='Issue-details-bottom'>
<label id='Issue-details-label'>Summary</label><span id='Issue-details-span'>{issue.summary}</span>
<label id='Issue-details-label'>Description</label><span id='Issue-details-span'>{issue.description}</span>
</div>
    </div>

  </Collapsible>
    )
  }