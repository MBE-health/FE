import { Box } from "@mui/material";
import { StepContainer } from "../components";
import { useState } from "react";
import { healthConditionProps, exerciseConditionProps } from "../typings";

const Plan = () => {
  const [healthCondition, setHealthCondition] = useState<healthConditionProps>({
    키: 0,
    몸무게: 0,
    체지방률: 0,
    BMI: 0,
    앉아윗몸앞으로굽히기: 0,
    교차윗몸일으키기: 0,
    왕복오래달리기: 0,
    왕복달리기_10M_4회: 0,
    제자리_멀리뛰기: 0,
    상대악력: 234,
  });

  const [exerciseCondition, setExerciseCondition] =
    useState<exerciseConditionProps>({
      type: [],
      body: [],
      level: [],
      equipment: [],
    });

  return (
    <Box
      style={{
        backgroundImage: "url(/assets/background.png)",
      }}
    >
      <StepContainer
        checkBoxTitle="Step 1"
        title="체력 진단 평가 항목"
        data={healthCondition}
        setData={setHealthCondition}
        type="form"
      />
      <StepContainer
        checkBoxTitle="Step 2"
        title="추가 정보 입력"
        data={exerciseCondition}
        setData={setExerciseCondition}
        type="select"
      />
    </Box>
  );
};

export default Plan;
