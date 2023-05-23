import { Box, Stack, Typography } from "@mui/material";
import { recExProps } from "../../../../typings";

interface NonBlockPlanProps {
  data: recExProps;
}

interface PlanProps {
  type: string;
  exercise: string;
  time: number;
}

const NonBlockedPlan = ({ data }: NonBlockPlanProps) => {
  const { step_1, step_2, step_3 } = data;
  return (
    <Stack direction="column" spacing="2rem">
      <Plan
        type="준비운동"
        exercise={step_1.exercise_list as string}
        time={step_1.time}
      />
      <Plan
        type="본운동"
        exercise={step_2.exercise_list as string}
        time={step_2.time}
      />
      <Plan
        type="마무리운동"
        exercise={step_3.exercise_list as string}
        time={step_3.time}
      />
    </Stack>
  );
};

export default NonBlockedPlan;

const Plan = ({ type, exercise, time }: PlanProps) => {
  return (
    <Stack
      sx={{
        backgroundImage: "url(/assets/main/planGround.png)",
        backgroundRepeat: "round",
        backgroundSize: "cover",
        boxShadow: "0px 3px 15px 10px rgba(220, 220, 220, 0.25)",
        padding: "2rem",
      }}
      direction="row"
      spacing="2rem"
    >
      <img src="/assets/main/check.png" alt="check icon" />
      <Stack direction="column" spacing="0.8rem">
        <Typography variant="h4">{type}</Typography>
        <Typography variant="h5">
          {exercise} | {time}분
        </Typography>
      </Stack>
    </Stack>
  );
};
