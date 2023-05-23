import { Box, Container, Divider, Typography, Stack } from "@mui/material";

interface ShowHealthProps {
  isLogin: boolean;
}

const ShowExercise = ({ isLogin }: ShowHealthProps) => {
  return (
    <Container maxWidth="xl">
      <Divider sx={{ margin: "0rem 5rem" }}>
        <Typography variant="h3">Exercise Information</Typography>
      </Divider>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5rem",
        }}
        borderRadius="1rem"
      >
        {isLogin ? (
          <div>로그인함</div>
        ) : (
          <Stack direction="row" spacing="2rem">
            <img
              src="/assets/noUser/blockRoutine.png"
              alt="blockedPlan1"
              style={{ opacity: 0.5 }}
            />
            <img
              src="/assets/noUser/blockRoutine.png"
              alt="blockedPlan1"
              style={{ opacity: 0.5 }}
            />
            <img
              src="/assets/noUser/blockRoutine.png"
              alt="blockedPlan1"
              style={{ opacity: 0.5 }}
            />
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default ShowExercise;
