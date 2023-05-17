import React from "react";
import { FormikValues, useFormik } from "formik";
import {
  Grid,
  Stack,
  Button,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { stepContainerProps } from "./container";
import { onBoarding } from "../../constant/health";
import { onBoardingProps, healthConditionProps } from "../../typings";
import { StrengthSchema } from "../../schema/OnBoarding";
import { object } from "yup";

function handleClickCheckbox(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) {
  e.stopPropagation();
}

interface setDataProps {
  setData: React.Dispatch<React.SetStateAction<healthConditionProps>>;
}

const StepAccordion = ({
  checkBoxTitle,
  title,
  data,
  setData,
}: stepContainerProps & setDataProps) => {
  const onSubmit = async (values: healthConditionProps) => {
    console.log(values);

    setData(values);
    //const status = await SignUp(values);
    //handleRoute(navigate, status);
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
      키: 0,
      몸무게: 0,
      체지방률: 0,
      BMI: 0,
      앉아윗몸앞으로굽히기: 0,
      교차윗몸일으키기: 0,
      왕복오래달리기: 0,
      왕복달리기_10M_4회: 0,
      제자리_멀리뛰기: 0,
      상대악력: 234,
    },
    validationSchema: StrengthSchema,
    onSubmit,
  });

  return (
    <Accordion sx={{ backgroundColor: "transparent", boxShadow: "unset" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
          width="40rem"
        >
          <Grid item xs={1}>
            <Checkbox
              checked={false}
              value="checkedB"
              color="primary"
              onClick={(e) => handleClickCheckbox(e)}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>{checkBoxTitle}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography>{title}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "white",
          margin: "5.5rem",
          borderRadius: "10px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          {onBoarding.map(({ name, label, type, unit }: onBoardingProps) => (
            <Grid
              container
              spacing={5}
              justifyContent="flex-start"
              alignItems="center"
              padding="0"
            >
              <Grid item xs={4}>
                <Typography variant="h4" color="main" textAlign="center">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <TextField
                    name={name}
                    label={label}
                    type={type}
                    onChange={handleChange}
                    // @ts-ignore
                    value={values[name]}
                    /*placeholder={question.placeholder}*/
                    variant="filled"
                    hiddenLabel
                    margin="dense"
                  />
                  <Typography variant="h5">{unit}</Typography>
                </Stack>
              </Grid>
            </Grid>
          ))}
          <Button
            variant="contained"
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
            저장
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default StepAccordion;
