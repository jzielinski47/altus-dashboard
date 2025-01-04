import { iError } from "../interfaces";
import { serverIP, serverPort } from "./setup";

const patch: RequestInit = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};

const get: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};

export const updateUsername = async (username: string, patchedUsername: string) => {
  try {
    patch.body = JSON.stringify({ username: patchedUsername });
    const res = await fetch(`${serverIP}/api/users/patch/${username}`, patch);
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

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${serverIP}/api/users/`, get);
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
