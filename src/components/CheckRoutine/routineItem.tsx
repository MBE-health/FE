import { Box, Checkbox, Typography } from "@mui/material";
import { stepProps } from "../../typings";
import { useEffect } from "react";

interface RoutineItemProps {
  handleChange: (idx: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  step: "준비운동" | "본운동" | "마무리운동";
  isDone: number;
  idx: 0 | 1 | 2;
}

const RoutineItem = ({
  exercise_list,
  time,
  handleChange,
  step,
  isDone,
  idx,
}: stepProps & RoutineItemProps) => {
  useEffect(() => {
    console.log("0");
  }, [isDone]);
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="40rem"
      padding="0.5rem 0rem"
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Checkbox
          checked={Boolean(isDone)}
          onChange={(e) => handleChange(idx, e)}
        />
        <Typography>{step}</Typography>{" "}
      </Box>
      <div>
        <Typography variant="h5">{exercise_list}</Typography>
      </div>
      <div>
        <Typography variant="h5">{time}분</Typography>
      </div>
    </Box>
  );
};

export default RoutineItem;
