import { Box, Container, Typography } from "@mui/material";
import { OnBoardingForm } from "../components";

const OnBoarding = () => {
  return (
    <Container maxWidth="xl">
      <Box padding="5rem">
        <Typography variant="h2" marginLeft="2.5rem">
          신규회원 정보 등록
        </Typography>
        <OnBoardingForm />
      </Box>
    </Container>
  );
};

export default OnBoarding;
