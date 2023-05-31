import { fbStepFCAxios } from "./index";
import { selectedPlanProps } from "../typings";

const PREFIX_URL = "/plan";

export const postPlan = async (plan: selectedPlanProps) => {
  const userId = localStorage.getItem("userId"); //수정 필요
  try {
    const { status } = await fbStepFCAxios.post(
      `user${PREFIX_URL}`,
      { userId: userId, ...plan },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    );
    return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return 400;
    }
    return 400;
  }
};

export const getRecentPlan = async () => {
  //console.log(data);
  const PREFIX_URL = "/plan";
  const userId = localStorage.getItem("userId"); //수정 필요
  const date = new Date().toISOString().substring(0, 10).replace(/-/g, "");
  try {
    const { data, status } = await fbStepFCAxios.get(
      `user${PREFIX_URL}/${userId}/${date}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    );
    console.log(data[0], status);
    return { data: data[0], status };
    //return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};

export const getCertainPlan = async (date: string) => {
  //console.log(data);
  const PREFIX_URL = "/plan";
  const userId = localStorage.getItem("userId"); //수정 필요
  console.log(date, `user${PREFIX_URL}/${userId}/${date}`);
  try {
    const { data, status } = await fbStepFCAxios.get(
      `user${PREFIX_URL}/${userId}/${date}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    );
    //console.log(response);
    return { data: data[0], status };
    //return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};

export const getAllPlan = async () => {
  // user/plan/ayvS5XJcgifNJ4p2LmRk6K2jSHs2
  //console.log(data);
  const PREFIX_URL = "/plan";
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
    //console.log(data[0], status);
    console.log(data);
    return { data: data, status };
    //return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};
