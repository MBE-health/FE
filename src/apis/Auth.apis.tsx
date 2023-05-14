import { fbAuthAxios } from "./index";
import { LoginUser } from "../typings";

const PREFIX_URL =
  "v1/accounts:signInWithPassword?key=AIzaSyDGypUSTeUtzlq7FKQGqGC83JJsSSl6dHU";

export const SignIn = async (loginUser: LoginUser) => {
  try {
    const { data, status } = await fbAuthAxios.post(`${PREFIX_URL}`, {
      email: loginUser.email,
      password: loginUser.password,
      returnSecureToken: true,
    });
    console.log("SignIn Api", data, status);
    localStorage.setItem("idToken", data.idToken);
    return status;
  } catch (err) {
    return err;
  }
};
