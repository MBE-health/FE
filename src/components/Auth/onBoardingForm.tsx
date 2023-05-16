import * as yup from "yup";
import { Typography, Grid, Box } from "@mui/material";

import InputField from "../Common/inputField";
import { MultiStepForm, FormStep } from "../multistep/multiStepForm";
import { onBoardingBody, onBoardingStrength } from "../../constant/health";
import { onBoardingProps } from "../../typings";

const validationSchemaStep1 = yup.object({
  키: yup.number().positive().required("키를 입력해주세요."),
  몸무게: yup.number().positive().required("몸무게를 입력해주세요."),
  체지방률: yup.number().positive().required("체지방률을 입력해주세요."),
  BMI: yup.number().positive().required("BMI를 입력해주세요."),
});

const validationSchemaStep2 = yup.object({
  앉아윗몸앞으로굽히기: yup
    .number()
    .positive()
    .required("몸무게를 입력해주세요."),
  교차윗몸일으키기: yup.number().positive().required("몸무게를 입력해주세요."),
  왕복오래달리기: yup.number().positive().required("몸무게를 입력해주세요."),
  왕복달리기_10M_4회: yup
    .number()
    .positive()
    .required("몸무게를 입력해주세요."),
  제자리_멀리뛰기: yup.number().positive().required("몸무게를 입력해주세요."),
  상대악력: yup.number().positive().required("몸무게를 입력해주세요."),
});

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
        validationSchema={validationSchemaStep1}
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
        validationSchema={validationSchemaStep2}
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
