import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    /*title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },*/
  },
};

const temp = [1, 2, 3, 2, 2, 3, 3, 1];

const data = {
  labels: temp,
  datasets: [
    {
      label: "00월 ~ 00월",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: temp.map((item) => item),
      borderColor: "white",
      borderWidth: 1,
    },
  ],
};

const GraphItem = () => {
  return <Bar options={options} data={data} />;
};

export default GraphItem;
