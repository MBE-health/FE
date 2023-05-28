import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import { StepContainer, PopupDialog } from "../components";
import {
  healthConditionProps,
  exerciseConditionProps,
  keywordProps,
  recResProps,
} from "../typings";
import { getSearchAgent, getConditionAgent } from "../apis/Sport.apis";
import { aprioriRec, getRec, getTotalRec } from "../apis/Rec.apis";

function handleRoute(navigate: NavigateFunction, response: recResProps) {
  console.log(response);
  if (response.data && response.status !== 400) {
    navigate("/routine", {
      // props로 받는 list 스테이트를 넘겨준다.
      state: { ...response.data },
    });
  }
}
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
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitBtn = () => {
    handleClickOpen();
    //handleSubmit();
  };
  const navigate = useNavigate();
  const [healthCondition, setHealthCondition] = useState<healthConditionProps>({
    신장: 1,
    체중: 2,
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

    const grade = 1;
    let search_response = [];
    let csv_response = [];
    if (isHealthCompleted) {
      if (isKeywordsCompleted) {
        search_response = (await getSearchAgent(keywords.keywords)).data
          .exercise;
        console.log(search_response);
      }
      if (isExerciseCompleted) {
        const keywordsString = handleExerciseConditionFormat(exerciseCondition);
        console.log(keywordsString);
        csv_response = (await getConditionAgent(keywordsString)).data.exercise;
        console.log(csv_response);
      }

      console.log(search_response.length, csv_response.length);
      const response =
        search_response.length > 0 || csv_response.length > 0
          ? await getTotalRec(
              healthCondition,
              search_response,
              csv_response,
              grade
            )
          : await getRec(healthCondition);

      handleClose();
      handleRoute(navigate, response as recResProps);
    }
  };

  return (
    <Box
      width="100%"
      height="100%"
      style={{
        backgroundImage: "url(/assets/background.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
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
      <center>
        <Container maxWidth="xl" sx={{ marginBottom: "3rem" }}>
          <PopupDialog open={open} handleClose={handleClose} />
          <Button
            variant="contained"
            type="button"
            onClick={handleSubmitBtn}
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
        </Container>
      </center>
    </Box>
  );
};

export default Plan;
