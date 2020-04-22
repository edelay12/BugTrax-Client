import React, { useContext } from 'react';
import { Trigger } from '../../../utils/utils';
import MainContext from "../../../../contexts/main-context";
import {
    faStream,
  } from "@fortawesome/fontawesome-free-solid";
  import Collapsible from "react-collapsible";
import IssueItem from '../../../main-issue-item/issue-item';
import './issues-display.css';


export default function IssuesDisplay({issues}){
    
    return (
        <Collapsible open={true} trigger={<Trigger name={`Viewing issues (${issues.length})`} icon={faStream} iconClass='results-icon'/>}>
        <div className='display-issues-frame'>
       { issues.map(issue => (
                  <IssueItem issue={issue} />
                ))}
        </div>
 </Collapsible>
    )
}