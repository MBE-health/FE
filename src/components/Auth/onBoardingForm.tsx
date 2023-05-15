import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Stack,
} from "@mui/material";
import Step1Form from "./step1";
import { onBoardingStep1 } from "../../typings";

const steps = ["0", "1"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (formData: onBoardingStep1) => {
    console.log("handleTotalChange", formData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (values: onBoardingStep1) => {
    console.log("handleTotalChange", values);
    /*setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });*/
  };

  const handleSubmit = () => {
    console.log("submit!");
  };

  return (
    <Stack direction="column">
      <Box width="14.8rem" sx={{ float: "right" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Grid container direction="column" alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          {activeStep === 0 && (
            <>
              <Step1Form handleUpperChange={setFormData} />
              {/*<TextField
                label="Name"
                name="name"
                onChange={handleChange}
                fullWidth
                margin="normal"
          />*/}
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="h6">Step 2</Typography>
              {/*<TextField
                label="Email"
                name="email"
                onChange={handleChange}
                fullWidth
                margin="normal"
          />*/}
            </>
          )}
        </Grid>
        <Grid item xs={12}>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              /*disabled={activeStep === steps.length - 1}*/
            >
              submit
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              /*disabled={activeStep === steps.length - 1}*/
            >
              Next
            </Button>
          )}

          {activeStep > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleBack}
              sx={{ marginLeft: 8 }}
            >
              Back
            </Button>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default MultiStepForm;
