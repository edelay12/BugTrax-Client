import React, { useContext, useState } from 'react';
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

        const [results, changeResults] = useState([])
        const filteredResults = [];

        /*
        const handleFilter = (filter, data) => {
          switch (filter) {
            case 'category':
              console.log('category')
              console.log(data)
              console.log(results)
            break;
            case 'priority':

            break;
            case 'status':

            break;
            case 'assignee':

            break;
            case 'category':

            break;
            default:
              return changeResults(ContextMain.teamIssues)
          }
          changeResults([...data]);
          console.log(data)
          // clear results referesh page
          // pass array of filtered items down to add to
        } */
    return (
<section className='Issues'>
        <DashboardRouteHeader title='Issues' />
        <section className='Issues-filters'>
        <IssuesFilters allIssues={ContextMain.teamIssues} filteredResults={changeResults} results={results} teamList={ContextMain.teamList}/>
        </section>

        <section className='Issues-display'>
      <IssuesDisplay issues={results.length == 0 ? ContextMain.teamIssues : results}/>
        </section>
        </section>
    )
}