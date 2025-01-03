import { iError } from "../interfaces";
import { serverIP, serverPort } from "./setup";

const patchOptions: RequestInit = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};

export const updateUsername = async (username: string, patchedUsername: string) => {
  try {
    patchOptions.body = JSON.stringify({ username: patchedUsername });
    const res = await fetch(`${serverIP}:${serverPort}/api/users/patch/${username}`, patchOptions);
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
