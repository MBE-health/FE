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
import { onBoardingStep1 } from "../../typings";
import { Step1Schema } from "../../schema/OnBoarding";

interface step1FormProps {
  handleUpperChange: React.Dispatch<React.SetStateAction<{}>>;
}

const Step1Form = ({ handleUpperChange }: step1FormProps) => {
  const onSubmit = async () => {
    console.log(values);
    handleUpperChange(values);
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
      height: 0,
      weight: 0,
    },
    validationSchema: Step1Schema,
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
          {/* 키 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              키
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.height}
              onChange={handleChange}
              id="height"
              type="number"
              placeholder="Enter height"
              onBlur={handleBlur}
              className={errors.height && touched.height ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.height && touched.height && (
              <Typography variant="h6" className="error">
                {errors.height}
              </Typography>
            )}
          </Grid>
          {/* 몸무게 */}
          <Grid item xs={4}>
            <Typography variant="h4" color="main">
              몸무게
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.weight}
              onChange={handleChange}
              id="weight"
              type="number"
              placeholder="Enter Age"
              onBlur={handleBlur}
              className={errors.weight && touched.weight ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.weight && touched.weight && (
              <Typography variant="h6" className="error">
                {errors.weight}
              </Typography>
            )}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Step1Form;
