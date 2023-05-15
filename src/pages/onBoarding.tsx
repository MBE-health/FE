import { Box, Container, Typography } from "@mui/material";
import { OnBoardingForm } from "../components";
const OnBoarding = () => {
  return (
    <center>
      <Container maxWidth="xl">
        <Typography variant="h2">신규회원 정보 등록</Typography>
        <OnBoardingForm />
      </Container>
    </center>
  );
};

export default OnBoarding;
