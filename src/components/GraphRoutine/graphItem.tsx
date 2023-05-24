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
import { Box, Container } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface GraphItemProps {
  width: string;
  height: string;
}

const GraphItem = ({ width, height }: GraphItemProps) => {
  const [doneData, setDoneData] = useState<routineDone[]>([]);
  const [labelData, setLabelData] = useState<string[]>([]);
  const [doneCnt, setDoneCnt] = useState<number[]>([]);

  const fetchData = async () => {
    const { data, status } = await getDone();
    if (status === 200 || data !== "NO SERVERS AVAILABLE") {
      setDoneData(data);
      console.log("gkdkt", data);

      setDoneCnt(getDoneCount(data) as number[]);
      setLabelData(getDoneDate(data) as string[]);
    }

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
    responsive: false,
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
    <Box>
      {getDoneDate.length > 0 && (
        <Bar
          options={options}
          data={data}
          style={{ width: width, height: height }}
        />
      )}
    </Box>
  );
};

export default GraphItem;
