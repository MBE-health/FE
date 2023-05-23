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
