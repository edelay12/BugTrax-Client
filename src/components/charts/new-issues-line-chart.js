import React, { useEffect, useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import ChartApiService from "../../services/chart-api-service";
import MainContext from "../../contexts/main-context";

export default function NewIssuesLineChart() {
  const ContextMain = useContext(MainContext);
  const [monthData, setData] = useState([0, 0, 0, 0, 0]);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    ChartApiService.getIssuesMonthly()
      .then(res => {
        setData(res.chartData);
        setLabels(res.labels);
      })
      .catch(e => console.log(e));
  }, [ContextMain.teamIssues]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Issues",
        data: monthData
      }
    ]
  };
  return (
    <Line
      data={data}
      width={300}
      height={280}
      options={{
        maintainAspectRatio: false,
        fill: true,
        title: {
          display: true,
          text: "New Issues by Month"
        }
      }}
    />
  );
}
