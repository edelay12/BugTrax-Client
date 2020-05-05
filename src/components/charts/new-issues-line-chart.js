import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import ChartApiService from '../../services/chart-api-service';

export default function NewIssuesLineChart(){
    const [chartData, setData] = useState([0, 0, 0, 0])

    useEffect(() => {
        ChartApiService.getIssuesMonthly()
        .then(res => {
            console.log('chart res')
            console.log(res)
            setData(res)
        })
        .catch(e => console.log(e))
    },[])

    const data = { labels: ['Janurary','Februrary', 'March', 'April', 'May'],
    datasets: [{
        label: 'Issues-line',
        data: chartData
    }]
}
    return (
        <Line data={data} width={300} height={280} options={{ maintainAspectRatio: false, fill: false,    title: {
            display: true,
            text: 'New Issues by Month'
        } }} />
    )
}