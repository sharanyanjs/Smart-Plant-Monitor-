import React from "react";
import { Line } from "react-chartjs-2";

const MoistureChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.time),
    datasets: [
      {
        label: "Soil Moisture",
        data: data.map(d => d.value),
        fill: false,
        borderColor: "green"
      }
    ]
  };

  return <Line data={chartData} />;
};

export default MoistureChart;
