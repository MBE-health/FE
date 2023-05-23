import { Typography } from "@mui/material";
import { recExProps } from "../../../typings";

interface ExerciseCardProps {
  exercise: recExProps[];
}

const ExerciseCard = (exercise: ExerciseCardProps) => {
  console.log("exercise", exercise);
  return <Typography>직선은덩</Typography>;
};

export default ExerciseCard;
