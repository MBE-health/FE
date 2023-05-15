import * as yup from "yup";

export const Step1Schema = yup.object().shape({
  height: yup.number().positive().integer().required("Age Required"),
  weight: yup.number().positive().integer().required("Age Required"),
});
