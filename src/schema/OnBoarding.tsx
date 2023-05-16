import * as yup from "yup";

export const BodySchema = yup.object({
  키: yup.number().positive().required("키를 입력해주세요."),
  몸무게: yup.number().positive().required("몸무게를 입력해주세요."),
  체지방률: yup.number().positive().required("체지방률을 입력해주세요."),
  BMI: yup.number().positive().required("BMI를 입력해주세요."),
});

export const StrengthSchema = yup.object({
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
