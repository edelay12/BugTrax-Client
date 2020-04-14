import React from 'react';
import Collapsible from 'react-collapsible';
import { Trigger } from '../../../components/utils/utils';
import './dashboard-issues.css'
import ReporterFilter from '../../../components/filters/reporter-filter/reporter-filter';
import DashboardRouteHeader from '../../../components/dashboard/dashboard-route-header/dashboard-route-header';
import { faFilter, faStream } from '@fortawesome/fontawesome-free-solid';
import DashboardFooter from '../../../components/dashboard/dashboard-footer/dashboard-footer';


export default function Issues(props){

        
    return (
<section className='Issues'>
        <DashboardRouteHeader title='Issues' />
        <section className='Issues-filters'>
        <Collapsible open={true} trigger={<Trigger name='Filters' icon={faFilter} iconClass='filter-icon' />}>
        <div className='Issues-frame'>
            <div className='Issue-grid-container'>
        <label className='issueLabel'>Assignee</label>
        </div>

        <div className='Issue-grid-container'>
        <input className='reporterInput' type='text' />
        </div>

        <div className='Issue-grid-container'>
        <label className='issueLabel'>Reporter</label>
        </div>

        <div className='Issue-grid-container'>
        <ReporterFilter />
        </div>

        <div className='Issue-grid-container'>
        <label className='issueLabel'>Category</label>
     </div>

     <div className='Issue-grid-container'>
     <ReporterFilter />
</div>

<div className='Issue-grid-container'>
        <label className='issueLabel'>Resolved by</label>
      </div>

      <div className='Issue-grid-container'>
        <ReporterFilter />
</div>

<div className='Issue-grid-container'>
        <label className='issueLabel'>Severity</label>
        </div>
        
        <div className='Issue-grid-container'>
        <ReporterFilter />
</div>

<div className='Issue-grid-container'>
        <label className='issueLabel'>Status</label>
       </div>
        
       <div className='Issue-grid-container'>
        <ReporterFilter />
</div>

<div className='Issue-grid-container-b'>
        <label className='issueLabel'>Priority</label>
      </div>

        <div className='Issue-grid-container-b'>
        <ReporterFilter />
</div>

<div className='Issue-grid-container-b'>
        <label className='issueLabel'>Priority</label>
       </div>

       <div className='Issue-grid-container-b'>
        <ReporterFilter />
</div>

        </div>
 </Collapsible>
        </section>

        <section className='Issues-display'>
        <Collapsible open={true} trigger={<Trigger name='Viewing issues 1/50 total' icon={faStream} iconClass='results-icon'/>}>
        <div className='Overview-issues-frame'>
            <div className='O-issue'>
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        </div>

        <div className='O-issue'>
        <p>It can even be another Collapsible component. Check out the next section!</p>
        </div>
        </div>
 </Collapsible>
        </section>
        </section>

    )
}