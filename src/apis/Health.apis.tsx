import { fbStepFCAxios } from "./index";
import { healthConditionProps } from "../typings";
import { FormikValues } from "formik";
const PREFIX_URL = "/user";

export const HealthCondition = async (
  healthCondition: healthConditionProps | FormikValues
) => {
  const tempUserId = "a9wVB5D0EfVSPJ32hZqHOTq9GBI3";
  const data = { userId: tempUserId, healthCondition };
  console.log(data);
  try {
    const response = await fbStepFCAxios.put(`${PREFIX_URL}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    });
    console.log(response);
    return 200;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return 400;
    }
    return 400;
  }
};
