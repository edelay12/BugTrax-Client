import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import MainContext from '../../contexts/main-context';

export default function IssuesPieChart(){
    const ContextMain = useContext(MainContext);

   const data = { labels: ['Active', 'Resolved', 'New', 'In-progress'],
    datasets: [{
        label: 'Issues-pie',
        backgroundColor: ['#5ac8fa', '#8e8e93', '#007aff', '#34c759'],
        data: [ContextMain.activeIssues.length, ContextMain.resolvedIssues.length, ContextMain.newIssues.length, 2]
    }]
}
    return (
        <>
        <Pie data={data} width={300} height={280} options={{ maintainAspectRatio: false }} id='pie-chart' />
        </>
    )
}