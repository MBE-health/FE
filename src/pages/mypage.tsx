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
        width="100%"
      >
        <CheckRoutine />

        <RecordEmotion />

        <ShowRoutine />
        <GraphRoutine width="75rem" height="auto" />
      </Box>
    </Container>
  );
};

export default Mypage;
