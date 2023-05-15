import { Container, Box, Typography } from "@mui/material";
import { tokens as colors } from "../styles/colors";
import { SignUpForm, AuthContainer } from "../components";

const SignUp: React.FC = () => {
  return (
    <center>
      <center>
        <AuthContainer children={SignUpForm} />
      </center>
    </center>
  );
};

export default SignUp;
