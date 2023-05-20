import { useState } from "react";
import { Location, useLocation } from "react-router-dom";
import { Button, Typography, Container } from "@mui/material";
import { RecForm } from "../components";
import { recExProps, selectedPlanProps } from "../typings";
import { postPlan } from "../apis/Plan.apis";
const Routine = () => {
  // state 취득
  const location = useLocation();
  // location.state로 접근해서 필요한 데이터 사용
  const recData: recExProps = location.state;
  console.log(recData);
  const [selectedPlan, setSelectedPlan] = useState<selectedPlanProps | null>(
    null
  );

  const handleSubmit = () => {
    console.log("submit");
    console.log(selectedPlan);
    postPlan(selectedPlan);
  };
  return (
    <Container maxWidth="xl">
      <Typography variant="h2">추천 플랜 선택하기</Typography>
      <RecForm
        routines={recData}
        setData={setSelectedPlan}
        data={selectedPlan}
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
        운동 플랜 등록하기
      </Button>
    </Container>
  );
};

export default Routine;
