import {
  CheckRoutine,
  RecordEmotion,
  ShowRoutine,
  GraphRoutine,
} from "../components";
import { Container, Box } from "@mui/material";

const Mypage = () => {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ backgroundImage: "url(/assets/background.png)" }}
      >
        <CheckRoutine />

        <RecordEmotion />

        <ShowRoutine />

        <Container maxWidth="md">
          <GraphRoutine />
        </Container>
      </Box>
    </Container>
  );
};

export default Mypage;
