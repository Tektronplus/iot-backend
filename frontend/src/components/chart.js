import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartJs = ({ titleJson, labelsJson, dataJson, colorRgb }) => {
  const data = {
    labels: labelsJson,
    datasets: [
      {
        label: titleJson,
        data: dataJson,
        borderColor: "rgb(" + colorRgb + ")",
        backgroundColor: "rgba(" + colorRgb + ", 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      
    },
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartJs;
