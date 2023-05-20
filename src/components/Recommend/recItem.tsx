import { recExProps } from "../../typings";
import { Box, Checkbox, Stack, Typography } from "@mui/material";
interface RecItemProps {
  idx: number;
  exercise: recExProps;
}

const RecItem = ({ idx, exercise }: RecItemProps) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Box marginRight="5rem" width="10rem">
        <Typography variant="h4">추천 플랜 {idx + 1}</Typography>
      </Box>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="40rem"
          padding="0.5rem 0rem"
          borderBottom="1px solid #C4C4C4"
        >
          <div>
            <Typography>준비운동</Typography>{" "}
          </div>
          <div>
            <Typography variant="h5">
              {exercise.step_1.exercise_list[idx]}
            </Typography>
          </div>
          <div>
            <Typography variant="h5">{exercise.step_1.time}</Typography>
          </div>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="40rem"
          padding="0.5rem 0rem"
          borderBottom="1px solid #C4C4C4"
        >
          <div>
            <Typography>본운동</Typography>{" "}
          </div>
          <div>
            <Typography variant="h5">
              {exercise.step_2.exercise_list[idx]}
            </Typography>
          </div>
          <div>
            <Typography variant="h5">{exercise.step_2.time}</Typography>
          </div>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="40rem"
          padding="0.5rem 0rem"
          borderBottom="1px solid #C4C4C4"
        >
          <div>
            <Typography>마무리운동</Typography>{" "}
          </div>
          <div>
            <Typography variant="h5">
              {exercise.step_3.exercise_list[idx]}
            </Typography>
          </div>
          <div>
            <Typography variant="h5">{exercise.step_3.time}</Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
export default RecItem;
