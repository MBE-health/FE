import { fbStepFCAxios } from "./index";

const PREFIX_URL = "/done";
export const postDone = async (isDone: number[]) => {
  const userId = localStorage.getItem("userId"); //수정 필요
  try {
    const { status } = await fbStepFCAxios.post(
      `user${PREFIX_URL}`,
      {
        userId: userId,
        ...isDone,
        createdAt: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
      },
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
