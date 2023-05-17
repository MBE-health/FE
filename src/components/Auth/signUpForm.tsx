import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { useFormik } from "formik";
import { SignUpSchema } from "../../schema/SignUp";
import { SignUpUser } from "../../typings";

import { SignUp } from "../../apis/Auth.apis";

function handleRoute(navigate: NavigateFunction, status: number) {
  if (localStorage.getItem("idToken")) {
    if (status === 201) {
      // 이메일 계정 가입 성공 O, 그외 기본 추가 정보 입력 O
      navigate("/onboarding");
    } else {
      // 이메일 계정 가입 성공 O, 그외 기본 추가 정보 입력 X
      navigate("/signup");
    }
  } else {
    // 이메일 계정 가입 실패
    navigate("/signup");
  }
}

const SignUpForm = () => {
  let navigate = useNavigate();
  const onSubmit = async (values: SignUpUser) => {
    console.log(values);
    const status = await SignUp(values);
    handleRoute(navigate, status);
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      age: 20,
      sex: 0,
    },
    validationSchema: SignUpSchema,
    onSubmit,
  });

  //console.log(errors);
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
        Join
      </Typography>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {/* 이름 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              이름
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Enter name"
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.name && touched.name && (
              <Typography variant="h6" className="error">
                {errors.name}
              </Typography>
            )}
          </Grid>
          {/* Email */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              Email
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="email"
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.email && touched.email && (
              <Typography variant="h6" className="error">
                {errors.email}
              </Typography>
            )}
          </Grid>
          {/* 비밀번호 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              비밀번호
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.password}
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Enter Password"
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.password && touched.password && (
              <Typography variant="h6" className="error">
                {errors.password}
              </Typography>
            )}
          </Grid>
          {/* 비밀번호 확인 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              비밀번호 확인
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Typography variant="h6" className="error">
                {errors.confirmPassword}
              </Typography>
            )}
          </Grid>
          {/* 닉네임 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              닉네임
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.nickname}
              onChange={handleChange}
              id="nickname"
              type="text"
              placeholder="Enter Nickname"
              onBlur={handleBlur}
              className={
                errors.nickname && touched.nickname ? "input-error" : ""
              }
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.nickname && touched.nickname && (
              <Typography variant="h6" className="error">
                {errors.nickname}
              </Typography>
            )}
          </Grid>
          {/* 나이 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              나이
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.age}
              onChange={handleChange}
              id="age"
              type="number"
              placeholder="Enter Age"
              onBlur={handleBlur}
              className={errors.age && touched.age ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.age && touched.age && (
              <Typography variant="h6" className="error">
                {errors.age}
              </Typography>
            )}
          </Grid>

          {/* 성별 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              성별
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={values.sex}
              onChange={handleChange}
            >
              <FormControlLabel
                name="sex"
                value={0}
                control={<Radio />}
                label="여성"
              />
              <FormControlLabel
                name="sex"
                value={1}
                control={<Radio />}
                label="남성"
              />
            </RadioGroup>
          </Grid>

          <Button
            variant="contained"
            disabled={isSubmitting}
            type="submit"
            fullWidth
            disableElevation
            sx={{
              backgroundColor: "secondary.light",
              margin: "6.5rem 0 1.5rem",
              "&:hover": {
                border: "2px solid secondary.main",
                borderColor: "secondary.main",
                backgroundColor: "secondary.main",
              },
            }}
          >
            회원가입
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default SignUpForm;
