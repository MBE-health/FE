import { Location, useLocation } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import { RecForm } from "../components";
import { recDataProps } from "../typings";
const Routine = () => {
  // state 취득
  const location = useLocation();
  // location.state로 접근해서 필요한 데이터 사용
  const recData: recDataProps = location.state;
  return (
    <Container maxWidth="xl">
      <Typography variant="h2">추천 플랜 선택하기</Typography>
      <RecForm routines={recData} />
      {/*<Box style={{ backgroundImage: "url(/assets/background.png)" }}>
      analyze
  </Box>*/}
    </Container>
  );
};

export default Routine;
