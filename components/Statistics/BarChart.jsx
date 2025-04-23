import JustText from '@components/just-text/JustText';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// components/BarChart.js
import { Bar } from 'react-chartjs-2';

const salesData = [
  { month: "January", sales: 100 },
  { month: "February", sales: 150 },
  { month: "Januay", sales: 100 },
  { month: "Februay", sales: 150 },
  { month: "Januy", sales: 100 },
  { month: "Febrry", sales: 150 },
  { month: "Januay", sales: 100 },
  { month: "Februay", sales: 150 },
  { month: "Januy", sales: 100 },
  { month: "Febrry", sales: 150 },
  
  { month: "June", sales: 250 },
];

const BarData = []

function BarChart() {
  const data = {
    labels: salesData.map((data) => data?.month),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((data) => data?.sales),
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgb(255, 159, 64)");
          gradient.addColorStop(1, "rgba(255, 159, 64, 0.2)");
          return gradient;
        },
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      // y: {
      //   beginAtZero: true,
      //   ticks: {
      //     font: {
      //       size: 17,
      //       weight: "bold",
      //     },
      //   },
      //   title: {
      //     display: true,
      //     text: "Sales",
      //     padding: {
      //       bottom: 10,
      //     },
      //     font: {
      //       size: 30,
      //       style: "normal",
      //       family: "Inter",
      //     },
      //   },
      // },
      
    },
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">
      <JustText text={"kinds_of_products"} />
      </h1>
      <div className="w-full h-full cursor-pointer">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
