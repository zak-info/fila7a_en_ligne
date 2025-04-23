import JustText from '@components/just-text/JustText';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

import Lottie from "lottie-react";
// import nodata from "@public/lottie/nodata.json";

// components/PieChart.js
import { Pie } from 'react-chartjs-2';

const salesData = [
  { category: "Category A", value: 300 },
  { category: "Category B", value: 50 },
  { category: "Category C", value: 100 },
  { category: "Category D", value: 80 },
  { category: "Category E", value: 120 },
];

const PieData = []

function PieChart() {
  const data = {
    labels: salesData.map((data) => data?.category),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((data) => data?.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">
        <JustText text={"kinds_of_products"} />
      </h1>
      <div className="w-full h-full p-8 cursor-pointer">
        {/* { */}
        {/* PieData.length == 0 ?
            <div className='w-full h-full flex justify-center items-center'>
              <Lottie className='w-72 h-72' animationData={nodata} loop={true} />
            </div>

            : */}

        <Pie data={data} options={options} />
        {/* } */}
      </div>
    </div>
  );
}

export default PieChart;
