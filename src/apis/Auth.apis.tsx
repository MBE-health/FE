import { fbAuthAxios } from "./index";
import { LoginUser } from "../typings";

const PREFIX_URL =
  "v1/accounts:signUp?key=AIzaSyDGypUSTeUtzlq7FKQGqGC83JJsSSl6dHU";

export const SignIn = async (data: LoginUser) => {
  try {
    const response = await fbAuthAxios.post(`${PREFIX_URL}`, {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    });
    console.log("SignIn Api", response);
    return data;
  } catch (err) {
    return err;
  }
};
