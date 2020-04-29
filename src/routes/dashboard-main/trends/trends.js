import React from 'react';
import DashboardRouteHeader from '../../../components/dashboard/dashboard-route-header/dashboard-route-header';
import './trends.css';
import NewIssuesLineChart from '../../../components/charts/new-issues-line-chart';
import IssuesPieChart from '../../../components/charts/issues-pie-chart';
import UserActivityTable from '../../../components/trends-page/user-activity-table/user-activity-table';

export default function TeamTrends(){
    return (
    <section className='Team-trends'>
        <DashboardRouteHeader title='Analytics' />
        <div className='charts-display-frame'>
            <div className='New-issues-line-container'>
            <NewIssuesLineChart />
            </div>
            <div className='Issues-pie-container'>
            <IssuesPieChart />
            </div>
        </div>

        <div className='activities-by-user-frame'>
            <UserActivityTable />
        </div>
    </section>
    );
}