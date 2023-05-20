import { useState } from "react";
import { Box, Checkbox, Stack } from "@mui/material";
import { recExProps, selectedPlanProps } from "../../typings";
import RecItem from "./recItem";

interface setRecFormProps {
  routines: recExProps;
  data: selectedPlanProps;
  setData: React.Dispatch<React.SetStateAction<selectedPlanProps | null>>;
}

const RecForm = ({ routines, data, setData }: setRecFormProps) => {
  const { step_1, step_2, step_3 } = routines;
  const ex_cnt = Array.from(
    { length: step_1.exercise_list.length },
    (v, i) => i
  );
  const [selected, setSelected] = useState<number | null>(null);

  const handleChange = (
    idx: number
    /*event: React.ChangeEvent<HTMLInputElement>*/
  ) => {
    //console.log(/*event.target.checked, */ idx);
    setSelected(idx);
    const data: selectedPlanProps = {
      step_1: {
        exercise_list: step_1.exercise_list[idx],
        time: step_1.time,
      },
      step_2: {
        exercise_list: step_2.exercise_list[idx],
        time: step_2.time,
      },
      step_3: {
        exercise_list: step_3.exercise_list[idx],
        time: step_3.time,
      },
      createdAt: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
    };
    setData(data);
  };
  return (
    <Box
      style={{
        backgroundImage: "url(/assets/login/background.png)",
        backgroundRepeat: "round",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8.8rem 15rem",
      }}
      borderRadius="1rem"
    >
      <center>
        {ex_cnt.map((idx) => (
          <Box
            display="flex"
            flexDirection="row"
            margin="3rem 0rem"
            width="fit-content"
          >
            <Checkbox
              checked={selected === idx ? true : false}
              onChange={() => handleChange(idx)}
            />
            <RecItem idx={idx} exercise={{ step_1, step_2, step_3 }} />
          </Box>
        ))}
      </center>
    </Box>
  );
};

export default RecForm;
