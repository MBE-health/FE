import { fbAuthAxios, fbPrivateAxios } from "./index";
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
export const SignUp = async (signUpUser: SignUpUser) => {
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

    console.log("SignUp", data);

    //firebase UserInfo
    localStorage.setItem("idToken", data.idToken);
    const userId = data.localId;
    if (userId && localStorage.getItem("idToken")) {
      const response = await fbPrivateAxios.post(
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
      console.log(response);
    }
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      console.log(err.message);
    }

    console.log("Unexpected error", err);
  }
};
