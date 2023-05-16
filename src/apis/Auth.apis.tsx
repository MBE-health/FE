import { fbAuthAxios, fbStepFCAxios } from "./index";
import { LoginUser, SignUpUser } from "../typings";

const PREFIX_URL = "v1/accounts:";
const key = "?key=AIzaSyDGypUSTeUtzlq7FKQGqGC83JJsSSl6dHU";

export const SignIn = async (loginUser: LoginUser) => {
  try {
    const { data, status } = await fbAuthAxios.post(
      `${PREFIX_URL}signInWithPassword${key}`,
      {
        email: loginUser.email,
        password: loginUser.password,
        returnSecureToken: true,
      }
    );
    //console.log("SignIn Api", data, status);
    localStorage.setItem("idToken", data.idToken);
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      console.log(err.message);
    }

    console.log("Unexpected error", err);
  }
};
export const SignUp = async (signUpUser: SignUpUser): Promise<number> => {
  try {
    // firebase SignUp
    const { data, status } = await fbAuthAxios.post(
      `${PREFIX_URL}signUp${key}`,
      {
        email: signUpUser.email,
        password: signUpUser.password,
        returnSecureToken: true,
      }
    );
    //console.log("SignUp", data);

    //firebase UserInfo -- only when signUp is successful
    localStorage.setItem("idToken", data.idToken);

    // 상태 관리 도입 전까지
    localStorage.setItem("userId", data.localId);

    const userId = data.localId;
    if (userId && localStorage.getItem("idToken")) {
      const { status } = await fbStepFCAxios.post(
        "user",
        {
          userId: userId,
          name: signUpUser.name,
          nickname: signUpUser.nickname,
          age: signUpUser.age,
          sex: signUpUser.sex,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("idToken")}`,
          },
        }
      );
      //console.log(response);
      return status;
    }
    return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return 400;
    }

    return 400;
  }
};
