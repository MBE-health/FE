import { Container, Box } from "@mui/material";

interface AuthContainerProps {
  children: () => JSX.Element;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <Container maxWidth="xl">
      <Box
        style={{
          backgroundImage: "url(/assets/login/background.png)",
          backgroundRepeat: "round",
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "row",
          margin: "5rem 0rem",
          justifyContent: "space-around",
          padding: "5rem",
        }}
        borderRadius="1rem"
      >
        <img src="/assets/login/pic.png" alt="logo" />
        <div>{children()}</div>
      </Box>
    </Container>
  );
};

export default AuthContainer;
