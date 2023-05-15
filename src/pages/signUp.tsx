import { Container, Box, Typography } from "@mui/material";
import { tokens as colors } from "../styles/colors";
import { LoginForm } from "../components";

const SignUp = () => {
  return (
    <center>
      <Container maxWidth="xl">
        <Box
          style={{
            backgroundImage: "url(/assets/login/background.png)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "4.5rem 0rem",
          }}
          borderRadius="1rem"
        >
          <img src="/assets/login/pic.png" alt="logo" />
        </Box>
      </Container>
    </center>
  );
};

export default SignUp;
