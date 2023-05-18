import { Box, Button } from "@mui/material";
import { StepContainer } from "../components";
import { useEffect, useState } from "react";
import {
  healthConditionProps,
  exerciseConditionProps,
  keywordProps,
} from "../typings";
import { getSearchAgent, getConditionAgent } from "../apis/Sport.apis";
import { Dictionary } from "@reduxjs/toolkit";

const handleExerciseConditionFormat = (
  exerciseCondition: exerciseConditionProps
) => {
  const list = Object.keys(exerciseCondition).map(function (key) {
    return exerciseCondition[key];
  });
  let data: string[] = [];
  list.forEach((item) => data.push(...item));
  return data.join(" or ");
};

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
  const [isHealthCompleted, setIsHealthCompleted] = useState<boolean>(false);

  const [exerciseCondition, setExerciseCondition] =
    useState<exerciseConditionProps>({
      type: [],
      body: [],
      level: [],
      equipment: [],
    });
  const [isExerciseCompleted, setIsExerciseCompleted] =
    useState<boolean>(false);

  const [keywords, setKeywords] = useState<keywordProps>({
    keywords: "",
  });
  const [isKeywordsCompleted, setIsKeywordsCompleted] =
    useState<boolean>(false);

  const handleSubmit = async () => {
    console.log(healthCondition, exerciseCondition, keywords);
    console.log(isHealthCompleted, isExerciseCompleted, isKeywordsCompleted);

    {
      /*    const search_response = await getSearchAgent(keywords.keywords);
  console.log(search_response);*/
    }

    {
      /*
  const keywordsString = handleExerciseConditionFormat(exerciseCondition);
    console.log(keywordsString);
    const csv_response = await getConditionAgent(keywordsString);
    console.log(csv_response);
  
  */
    }
  };

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
        isCompleted={isHealthCompleted}
        setIsCompleted={setIsHealthCompleted}
        type="form"
      />
      <StepContainer
        checkBoxTitle="Step 2"
        title="선호 운동 입력"
        data={exerciseCondition}
        setData={setExerciseCondition}
        isCompleted={isExerciseCompleted}
        setIsCompleted={setIsExerciseCompleted}
        type="select"
      />
      <StepContainer
        checkBoxTitle="Step 3"
        title="운동 키워드 입력"
        data={keywords}
        setData={setKeywords}
        isCompleted={isKeywordsCompleted}
        setIsCompleted={setIsKeywordsCompleted}
        type="input"
      />
      <Button
        variant="contained"
        type="button"
        onClick={handleSubmit}
        fullWidth
        disableElevation
        sx={{
          backgroundColor: "secondary.light",
          margin: "6.5rem 0 1.5rem",
          "&:hover": {
            border: "2px solid secondary.main",
            borderColor: "secondary.main",
            backgroundColor: "secondary.main",
          },
        }}
      >
        운동 플랜 생성하기
      </Button>
    </Box>
  );
};

export default Plan;
