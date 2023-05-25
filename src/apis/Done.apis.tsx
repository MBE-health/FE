import { fbStepFCAxios } from "./index";

export const getDone = async () => {
  const PREFIX_URL = "/done";
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
    console.log("getDone", data, status);
    return { data: data, status: status };
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};

export const postDone = async (isDone: number[]) => {
  const PREFIX_URL = "/done";
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

export const postComment = async (data: string) => {
  const PREFIX_URL = "/comment";
  const userId = localStorage.getItem("userId"); //수정 필요
  try {
    const { status } = await fbStepFCAxios.post(
      `user${PREFIX_URL}`,
      {
        userId: userId,
        comment: data,
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
