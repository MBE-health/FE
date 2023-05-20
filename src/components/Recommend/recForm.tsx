import { Box, Checkbox, Stack } from "@mui/material";
import { recDataProps, selectedPlanProps } from "../../typings";
import { useState } from "react";

interface setRecFormProps {
  routines: recDataProps;
  data: selectedPlanProps;
  setData: React.Dispatch<React.SetStateAction<selectedPlanProps | null>>;
}

const RecForm = ({ routines, data, setData }: setRecFormProps) => {
  const { ex, group_num } = routines;
  const ex_cnt = Array.from(
    { length: ex.step_1.exercise_list.length },
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
        exercise_list: ex.step_1.exercise_list[idx],
        time: ex.step_1.time,
      },
      step_2: {
        exercise_list: ex.step_2.exercise_list[idx],
        time: ex.step_2.time,
      },
      step_3: {
        exercise_list: ex.step_3.exercise_list[idx],
        time: ex.step_3.time,
      },
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
      {ex_cnt.map((idx) => (
        <Stack direction="row">
          <Checkbox
            checked={selected === idx ? true : false}
            onChange={() => handleChange(idx)}
          />
          <Box>추천 플랜 {idx + 1}</Box>
          <Box>
            <div>
              준비운동 : {ex.step_1.exercise_list[idx]} / {ex.step_1.time}
            </div>
            <div>
              본운동 : {ex.step_2.exercise_list[idx]} / {ex.step_2.time}
            </div>
            <div>
              마무리운동 : {ex.step_3.exercise_list[idx]} / {ex.step_3.time}
            </div>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default RecForm;
