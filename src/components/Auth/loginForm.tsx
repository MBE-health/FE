import { NavigateFunction, useNavigate } from "react-router-dom";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

import { useFormik } from "formik";
import { LoginSchema } from "../../schema/Login";
import { LoginUser } from "../../typings";

import { SignIn } from "../../apis/Auth.apis";

const LoginForm = () => {
  let navigate = useNavigate();
  function route() {
    if (localStorage.getItem("idToken")) {
      console.log("dlehd");
      navigate("/my page");
    } else {
      navigate("/plan");
    }
  }
  const onSubmit = async (values: LoginUser) => {
    //console.log(values);
    //console.log(actions);
    await SignIn(values);
    route();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <Box
      sx={{
        width: "40rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h2" color="secondary.light" marginBottom="5rem">
        Login
      </Typography>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <TextField
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter Email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        {errors.email && touched.email && (
          <Typography variant="h6" className="error">
            {errors.email}
          </Typography>
        )}
        <TextField
          id="password"
          type="password"
          placeholder="Enter Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        {errors.password && touched.password && (
          <Typography variant="h6" className="error">
            {errors.password}
          </Typography>
        )}
        <Button
          variant="contained"
          disabled={isSubmitting}
          type="submit"
          fullWidth
          disableElevation
          sx={{
            backgroundColor: "secondary.light",
            margin: "6.5rem 0 1.5rem",
          }}
        >
          로그인
        </Button>
        <Button
          variant="outlined"
          disabled={isSubmitting}
          type="submit"
          fullWidth
          disableElevation
          sx={{
            color: "secondary.light",
            border: "2px solid secondary.light",
            borderColor: "secondary.light",
          }}
        >
          회원가입
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
