import React from "react";
import { FormikValues, useFormik } from "formik";
import {
  Grid,
  Stack,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { stepAccordinProps } from "./container";
import { onBoardingStrength } from "../../constant/health";
import { onBoardingProps, healthConditionProps } from "../../typings";
import { StrengthSchema } from "../../schema/OnBoarding";

function handleClickCheckbox(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) {
  e.stopPropagation();
}

const StepAccordion = ({ checkBoxTitle, title }: stepAccordinProps) => {
  const onSubmit = async (values: healthConditionProps) => {
    console.log(values);
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
      신장: 0,
      체중: 0,
      체지방율: 0,
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
    <Accordion sx={{ backgroundColor: "transparent" }}>
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
        {onBoardingStrength.map(
          ({ name, label, type, unit }: onBoardingProps) => (
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
          )
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default StepAccordion;
