import { CheckRoutine } from "../components";
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

        {/*<RecordEmotion />
      <ShowRoutine />
      <GraphRoutine />*/}
      </Box>
    </Container>
  );
};

export default Mypage;
