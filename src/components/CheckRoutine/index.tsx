import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { getRecentPlan } from "../../apis/Plan.apis";
import { postDone } from "../../apis/Done.apis";
import RoutineItem from "./routineItem";
import { recExProps } from "../../typings";

const CheckRoutine = () => {
  const [plan, setPlan] = useState<recExProps | null>(null);
  const [isDone, setIsDone] = useState<number[]>([0, 0, 0]);

  function handleChange(idx: number, state: boolean) {
    console.log("handleChange", idx, state);
    const data = isDone;
    data[idx] = Number(!state);
    setIsDone(isDone);
    console.log(Boolean(data[idx]), idx);
  }

  async function handleBtnClick() {
    const response = await postDone(isDone);
    console.log(response);
  }
  const fetchData = async () => {
    const { status, data } = await getRecentPlan();
    console.log(data.createdAt, data.step_1);
    if (status === 200) {
      setPlan(data);
    } else {
      setPlan(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      marginTop="9.2rem"
      justifyContent="space-around"
      height="40rem"
    >
      <Typography variant="h4" marginLeft="1.5rem">
        오늘의 플랜
      </Typography>
      <Box
        style={{
          backgroundImage: "url(/assets/login/background.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "4.5rem 5rem",
        }}
        width="90rem"
        borderRadius="1rem"
      >
        {plan != null && (
          <Box width="100%">
            <RoutineItem
              exercise_list={plan.step_1.exercise_list}
              time={plan.step_1.time}
              handleChange={() => handleChange(0, Boolean(isDone[0]))}
              step={"준비운동"}
              isDone={Boolean(isDone[0])}
              idx={0}
            />
            <RoutineItem
              exercise_list={plan.step_2.exercise_list}
              time={plan.step_2.time}
              handleChange={() => handleChange(1, Boolean(isDone[1]))}
              step={"본운동"}
              isDone={Boolean(isDone[1])}
              idx={1}
            />
            <RoutineItem
              exercise_list={plan.step_3.exercise_list}
              time={plan.step_3.time}
              handleChange={() => handleChange(2, Boolean(isDone[2]))}
              step={"마무리운동"}
              isDone={Boolean(isDone[2])}
              idx={2}
            />
          </Box>
        )}
      </Box>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={handleBtnClick}
        sx={{ marginLeft: "1.5rem" }}
      >
        완료
      </Button>
    </Box>
  );
};

export default CheckRoutine;
