import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { getRecentPlan } from "../../apis/Plan.apis";
import { postDone } from "../../apis/Done.apis";
import RoutineItem from "./routineItem";
import { recExProps } from "../../typings";

const CheckRoutine = () => {
  const [plan, setPlan] = useState<recExProps | null>(null);
  const [isDone, setIsDone] = useState<number[]>([0, 0, 0]);

  function handleChange(idx: number) {
    const data = isDone;
    data[idx] = Number(!Boolean(data[idx]));
    setIsDone(isDone);
    console.log(isDone);
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

    //setPosts(posts.data);
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
      <Typography variant="h4">오늘의 플랜</Typography>
      <Box
        style={{
          backgroundImage: "url(/assets/login/background.png)",
          backgroundRepeat: "round",
          backgroundSize: "cover",
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
              handleChange={() => handleChange(0)}
              step={"준비운동"}
              isDone={isDone[0]}
              idx={0}
            />
            <RoutineItem
              exercise_list={plan.step_2.exercise_list}
              time={plan.step_2.time}
              handleChange={() => handleChange(1)}
              step={"본운동"}
              isDone={isDone[1]}
              idx={1}
            />
            <RoutineItem
              exercise_list={plan.step_3.exercise_list}
              time={plan.step_3.time}
              handleChange={() => handleChange(2)}
              step={"마무리운동"}
              isDone={isDone[2]}
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
      >
        완료
      </Button>
    </Box>
  );
};

export default CheckRoutine;
