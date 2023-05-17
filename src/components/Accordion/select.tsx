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
import { onBoardingProps, exerciseConditionProps } from "../../typings";
import { StrengthSchema } from "../../schema/OnBoarding";
import { object } from "yup";

function handleClickCheckbox(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) {
  e.stopPropagation();
}

interface setDataProps {
  setData: React.Dispatch<React.SetStateAction<exerciseConditionProps>>;
}

const SelectAccordion = ({
  checkBoxTitle,
  title,
  data,
  setData,
}: stepContainerProps & setDataProps) => {
  const handleSubmit = async (data: exerciseConditionProps) => {
    console.log("data", data);

    //setData(values);
    //const status = await SignUp(values);
    //handleRoute(navigate, status);
  };

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
                {type}
              </Stack>
            </Grid>
          </Grid>
        ))}
        <Button
          variant="contained"
          type="button"
          onClick={() => console.log(data)}
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
      </AccordionDetails>
    </Accordion>
  );
};

export default SelectAccordion;
