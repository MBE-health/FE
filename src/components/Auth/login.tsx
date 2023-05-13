import { Container, Box, Typography } from "@mui/material";
import { tokens as colors } from "../../styles/colors";

const Login = () => {
  return (
    <center>
      <Container maxWidth="xl">
        <Box
          style={{
            backgroundImage: "url(/assets/login/background.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "4.5rem 9rem",
          }}
        >
          <img src="/assets/login/pic.png" alt="logo" />
          <Typography variant="h2" color={colors.greenAccent[100]}>
            Login
          </Typography>
        </Box>
      </Container>
    </center>
  );
};

export default Login;
