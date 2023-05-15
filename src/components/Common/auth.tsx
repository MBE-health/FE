import { Container, Box, Typography } from "@mui/material";
import { ReactComponentElement } from "react";

type JSXElement = () => JSX.Element;
interface AuthContainerProps {
  //children: React.ReactNode | JSX.Element;
  //children: string | JSX.Element | JSX.Element[] | JSXElement;
  children: () => JSX.Element;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
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
          <div>{children()}</div>
        </Box>
      </Container>
    </center>
  );
};

export default AuthContainer;
