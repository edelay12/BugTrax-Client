import React, { useContext, useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import { Trigger } from '../../../components/utils/utils';
import './dashboard-issues.css'
import DashboardRouteHeader from '../../../components/dashboard/dashboard-route-header/dashboard-route-header';
import { faFilter, faStream } from '@fortawesome/fontawesome-free-solid';
import DashboardFooter from '../../../components/dashboard/dashboard-footer/dashboard-footer';
import MainContext from '../../../contexts/main-context';
import IssuesDisplay from '../../../components/dashboard/issues/issues-display/issues-display';
import IssuesFilters from '../../../components/dashboard/issues/issues-filters/issues-filters';

export default function Issues(props){
        const ContextMain = useContext(MainContext);
        const [filter, setFilter] = useState(false)
        const [results, changeResults] = useState([])
        const filteredResults = []


    return (
<section className='Issues'>
        <DashboardRouteHeader title='Issues' />
        <section className='Issues-filters'>
        <IssuesFilters allIssues={ContextMain.teamIssues} filteredResults={changeResults} results={results} teamList={ContextMain.teamList} filter={setFilter} isFilter={filter}/>
        </section>

        <section className='Issues-display'>
      <IssuesDisplay issues={filter ? results : ContextMain.teamIssues} allIssues={ContextMain.teamIssues} changeResults={changeResults}/>
        </section>
        </section>
    )
}