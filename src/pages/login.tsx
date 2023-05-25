import { Container, Box, Typography } from "@mui/material";
import { tokens as colors } from "../styles/colors";
import { LoginForm, AuthContainer } from "../components";

const Login: React.FC = () => {
  return (
    <center>
      <AuthContainer children={LoginForm} />
    </center>
  );
};

export default Login;
