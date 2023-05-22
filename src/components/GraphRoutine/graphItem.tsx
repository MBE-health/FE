import { useState, useEffect } from "react";
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
import { getDone } from "../../apis/Done.apis";
import { getDoneDate, getDoneCount } from "../../constant/done";
import { routineDone } from "../../typings";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphItem = () => {
  const [doneData, setDoneData] = useState<routineDone[]>([]);
  const [labelData, setLabelData] = useState<string[]>([]);
  const [doneCnt, setDoneCnt] = useState<number[]>([]);

  const fetchData = async () => {
    const response = await getDone();
    setDoneData(response);
    console.log("gkdkt", response);
    setDoneCnt(getDoneCount(response) as number[]);
    setLabelData(getDoneDate(response) as string[]);
  };

  useEffect(() => {
    fetchData();
    console.log(doneData);
  }, []);

  const data = {
    labels: labelData,
    datasets: [
      {
        label: `${labelData[0]} ~ ${labelData[labelData.length - 1]}`,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: doneCnt,
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      /*title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },*/
    },
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box width="90%" height="80%">
      {getDoneDate.length > 0 && <Bar options={options} data={data} />}
    </Box>
  );
};

export default GraphItem;
