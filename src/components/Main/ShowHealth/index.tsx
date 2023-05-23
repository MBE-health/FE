import { Box, Container, Divider, Typography } from "@mui/material";
interface ShowHealthProps {
  isLogin: boolean;
}

const ShowHealth = ({ isLogin }: ShowHealthProps) => {
  return (
    <Container maxWidth="xl">
      <Divider sx={{ margin: "0rem 5rem" }}>
        <Typography variant="h3">Report on physical health</Typography>
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
          <img
            src="/assets/noUser/blockContainer.png"
            alt="blockedPlan1"
            style={{ opacity: 0.5 }}
          />
        )}
      </Box>
    </Container>
  );
};

export default ShowHealth;
