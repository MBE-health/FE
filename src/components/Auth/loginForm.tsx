import { Formik } from "formik";
import * as yup from "yup";
import { Container, Box, Typography } from "@mui/material";
import { tokens as colors } from "../../styles/colors";

import { useFormik } from "formik";
import { LoginSchema } from "../../schema/Login";
import { LoginUser } from "../../typings";

const onSubmit = async (values: LoginUser /*actions:*/) => {
  console.log(values);
  //console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // actions.resetForm();
};

const LoginForm = () => {
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
    <Box>
      <Typography variant="h2" color={colors.greenAccent[100]}>
        Login
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default LoginForm;
