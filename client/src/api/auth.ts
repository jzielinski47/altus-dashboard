import { iLoginData, iSignupData } from "../interfaces";
import { serverIP, serverPort } from "./setup";
import { iError } from "../interfaces";

const options: RequestInit = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};

export const signup = async (credentials: iSignupData) => {
  try {
    options.body = JSON.stringify(credentials);
    const res = await fetch(`${serverIP}:${serverPort}/api/auth/signup`, options);
    if (res.ok) {
      return res.json();
    } else {
      const err = await res.json();
      console.error(err.error);
      if (err.details) {
        err.details.forEach((error: any) => console.error(error.msg));
        throw new Error(err.details[0].msg);
      } else {
        throw new Error(err.error);
      }
    }
  } catch (err: iError | any) {
    throw new Error(err.message);
  }
};

export const login = async (credentials: iLoginData) => {
  try {
    options.body = JSON.stringify(credentials);
    const res = await fetch(`${serverIP}:${serverPort}/api/auth`, options);
    if (res.ok) {
      return res.json();
    } else {
      const err = await res.json();
      throw new Error(err.error);
    }
  } catch (err: iError | any) {
    throw new Error(err.message);
  }
};
