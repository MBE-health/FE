import { Box } from "@mui/material";
import { StepContainer } from "../components";
import { useState } from "react";
import {
  healthConditionProps,
  exerciseConditionProps,
  keywordProps,
} from "../typings";

const Plan = () => {
  const [healthCondition, setHealthCondition] = useState<healthConditionProps>({
    키: 1,
    몸무게: 2,
    체지방률: 3,
    BMI: 4,
    앉아윗몸앞으로굽히기: 5,
    교차윗몸일으키기: 6,
    왕복오래달리기: 7,
    왕복달리기_10M_4회: 8,
    제자리_멀리뛰기: 9,
    상대악력: 10,
  });

  const [exerciseCondition, setExerciseCondition] =
    useState<exerciseConditionProps>({
      type: [],
      body: [],
      level: [],
      equipment: [],
    });

  const [keywords, setKeywords] = useState<keywordProps>({
    keywords: "",
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
        title="선호 운동 입력"
        data={exerciseCondition}
        setData={setExerciseCondition}
        type="select"
      />
      <StepContainer
        checkBoxTitle="Step 3"
        title="운동 키워드 입력"
        data={keywords}
        setData={setKeywords}
        type="input"
      />
    </Box>
  );
};

export default Plan;
