import React, { useState } from "react";
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
import { onBoardingProps, keywordProps } from "../../typings";
import { KeywordsSchema } from "../../schema/Keywords";

interface setDataProps {
  setData: React.Dispatch<React.SetStateAction<keywordProps>>;
}

interface setCompleteProps {
  isCompleted: boolean;
  setIsCompleted: React.Dispatch<React.SetStateAction<string>>;
}

const StepAccordion = (
  {
    checkBoxTitle,
    title,
    data,
    setData,
  }: /*isCompleted,
  setIsCompleted,*/
  stepContainerProps & setDataProps /*& setCompleteProps*/
) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const onSubmit = async (values: keywordProps) => {
    console.log(values);
    setIsCompleted(true);
    setData(values);
    //const status = await SignUp(values);
    //handleRoute(navigate, status);
  };

  const handleFormChange = () => {
    setIsCompleted(false);
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
      keywords: "",
    },
    validationSchema: KeywordsSchema,
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
              checked={isCompleted}
              value="checkedB"
              color="primary"
              /*onClick={(e) => handleClickCheckbox(e)}*/
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
          onChange={handleFormChange}
        >
          <Grid
            container
            spacing={5}
            justifyContent="flex-start"
            alignItems="center"
            padding="0"
          >
            <Grid item xs={4}>
              <Typography variant="h4" color="main" textAlign="center">
                운동 키워드
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <TextField
                  name="keywords"
                  label="keywords"
                  type="text"
                  onChange={handleChange}
                  value={values.keywords}
                  /*placeholder={question.placeholder}*/
                  variant="filled"
                  hiddenLabel
                  margin="dense"
                  fullWidth
                />
              </Stack>
            </Grid>
          </Grid>

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
