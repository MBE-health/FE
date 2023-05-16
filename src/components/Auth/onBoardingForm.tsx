import * as yup from "yup";
import { Typography, Grid, Box } from "@mui/material";

import InputField from "../Common/inputField";
import { MultiStepForm, FormStep } from "../multistep/multiStepForm";
import { onBoardingBody, onBoardingStrength } from "../../constant/health";
import { onBoardingProps } from "../../typings";
import { BodySchema, StrengthSchema } from "../../schema/OnBoarding";

const onBoardingForm = () => {
  return (
    <MultiStepForm
      initialValues={{ 키: "", 몸무게: "", 체지방률: "", BMI: "" }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <FormStep
        stepName="신체 조성"
        onSumbit={() => console.log("Step1 submit")}
        validationSchema={BodySchema}
      >
        <Box
          style={{
            backgroundImage: "url(/assets/login/background.png)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: "4.5rem 7rem",
          }}
          borderRadius="1rem"
        >
          <Grid
            container
            spacing={2}
            justifyContent="flex-start"
            alignItems="flex-end"
            width="50rem"
          >
            {onBoardingBody.map((question: onBoardingProps) => (
              <>
                <Grid item xs={5}>
                  <Typography variant="h4" color="main" textAlign="center">
                    {question.typo}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <InputField
                    name={question.name}
                    label={question.label}
                    type={question.type}
                    placeholder={question.placeholder}
                    variant={"standard" as any}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </FormStep>
      <FormStep
        stepName="체력 측정"
        onSumbit={() => console.log("Step2 submit")}
        validationSchema={StrengthSchema}
      >
        <Box
          style={{
            backgroundImage: "url(/assets/login/background.png)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: "4.5rem 7rem",
          }}
          borderRadius="1rem"
        >
          <Grid
            container
            spacing={2}
            justifyContent="flex-start"
            alignItems="flex-end"
            width="50rem"
          >
            {onBoardingStrength.map((question: onBoardingProps) => (
              <>
                <Grid item xs={8}>
                  <Typography variant="h4" color="main" textAlign="center">
                    {question.typo}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <InputField
                    name={question.name}
                    label={question.label}
                    type={question.type}
                    placeholder={question.placeholder}
                    variant={"standard" as any}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </FormStep>
    </MultiStepForm>
  );
};

export default onBoardingForm;
