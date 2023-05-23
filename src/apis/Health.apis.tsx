import { fbStepFCAxios } from "./index";
import { healthConditionProps } from "../typings";
import { FormikValues } from "formik";
const PREFIX_URL = "/user";

export const setHealthCondition = async (
  healthCondition: healthConditionProps | FormikValues
) => {
  const tempUserId = localStorage.getItem("userId"); // 수정 필요
  const data = {
    userId: tempUserId,
    healthCondition,
    createdAt: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
  };
  //console.log(data);
  try {
    const { status } = await fbStepFCAxios.put(`${PREFIX_URL}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    });
    console.log(status);
    return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return 400;
    }
    return 400;
  }
};



export const getHealth = async () => {
  const PREFIX_URL = "/health";
  const userId = localStorage.getItem("userId"); //수정 필요
  try {
    const { data, status } = await fbStepFCAxios.get(
      `user${PREFIX_URL}/${userId}`,

      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    );
    //console.log("get grand", data);
    return { data, status };
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};