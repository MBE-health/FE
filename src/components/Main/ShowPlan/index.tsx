import { Box, Container, Stack } from "@mui/material";
import TitleWrapper from "./TitleWrapper";
import PlanWrapper from "./PlanWrapper";
import ImageWrapper from "./ImageWrapper";


interface showPlanProps {
  isLogin: boolean;
}

const ShowPlan = ({ isLogin }: showPlanProps) => {
  return (
    <Container maxWidth="xl">
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5rem",
        }}
        borderRadius="1rem"
      >
        <Stack direction="column" spacing="5rem">
          <TitleWrapper />
          <PlanWrapper isLogin={isLogin} />
        </Stack>

        <ImageWrapper />
      </Box>
    </Container>
  );
};

export default ShowPlan;
