import { Box, Container, Typography } from "@mui/material";
import { OnBoardingForm } from "../components";

const OnBoarding = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" marginLeft="2.5rem">
        신규회원 정보 등록
      </Typography>
      <OnBoardingForm />
    </Container>
  );
};

export default OnBoarding;
