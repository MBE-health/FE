import { Box } from "@mui/material";
import { StepContainer } from "../components";

const Plan = () => {
  return (
    <Box
      style={{
        backgroundImage: "url(/assets/background.png)",
      }}
    >
      <StepContainer checkBoxTitle="Step 1" title="신체 진단 평가 항목" />
      <StepContainer checkBoxTitle="Step 2" title="추가 정보 입력" />
    </Box>
  );
};

export default Plan;
