import React, { useEffect, useContext, useState } from 'react';
import './issue-page.css';
import MainContext from "../../contexts/main-context";
import IssueApiService from '../../services/issues-api-service';
import DashboardRouteHeader from '../../components/dashboard/dashboard-route-header/dashboard-route-header';
import IssueDetails from '../../components/issue-page/issue-details/issue-details';
import IssueEvents from '../../components/issue-page/issue-events/issue-events';
import EventsApiService from '../../services/issue-events-api-service';
import NewEventForm from '../../components/issue-page/add-new-event-form/new-event-form';

export default function IssuePage({match}){
    const ContextMain = useContext(MainContext);
    const [update, showUpdate] = useState(false);
    const [issue , setIssue] = useState([]);
    const [events, setEvents] = useState([])

    useEffect(() => {
        const { issueId } = match.params;
        IssueApiService.getIssueById(issueId)
        .then(res => {
             setIssue(res);   
        })
        .catch(err => console.log(err));

        //get events that match issue id
        EventsApiService.getEventsByIssueId(issueId)
        .then(res => {
             setEvents(res);   
        })
        .catch(err => console.log(err));

    }, [])
    const { issueId } = match.params;
    return (
        <section className='IssuePage'> 
        <DashboardRouteHeader title={`Issue #${issueId}`} />
            <IssueDetails issue={issue} />
    {issue.resolution !== 'resolved' && <button className='Add-update-button' onClick={() => {showUpdate(!update)}}>Add Update</button> }
            {update && <NewEventForm issueId={issueId} showUpdate={showUpdate}/> }
            <IssueEvents events={events}/>
        </section>
    )
}
