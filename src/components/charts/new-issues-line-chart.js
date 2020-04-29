import React from 'react';
import { Line } from 'react-chartjs-2';

export default function NewIssuesLineChart(){
    const data = { labels: ['Active', 'Resolved', 'New', 'In-progress'],
    datasets: [{
        label: 'Issues-line',
        backgroundColor: ['#5ac8fa', '#8e8e93', '#007aff', '#34c759'],
        data: [4, 8, 10, 2]
    }]
}
    return (
        <Line data={data} width={300} height={280} options={{ maintainAspectRatio: false, fill: false,    title: {
            display: true,
            text: 'New Issues by Month'
        } }} />
    )
}