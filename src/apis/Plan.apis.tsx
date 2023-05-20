import { fbStepFCAxios } from "./index";
import { selectedPlanProps } from "../typings";

const PREFIX_URL = "/plan";

export const postPlan = async (plan: selectedPlanProps) => {
  const tempUserId = "a9wVB5D0EfVSPJ32hZqHOTq9GBI3"; //수정 필요
  try {
    const { status } = await fbStepFCAxios.post(
      `user${PREFIX_URL}`,
      { userId: tempUserId, ...plan },
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
