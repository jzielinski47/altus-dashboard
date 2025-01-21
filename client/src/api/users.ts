import { iError } from "../interfaces";
import { get, patch, post, serverIP } from "./setup";

export const updateUsername = async (username: string, patchedUsername: string) => {
  try {
    patch.body = JSON.stringify({ username: patchedUsername });
    const res = await fetch(`${serverIP}/api/users/patch/username/${username}`, patch);
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

export const updateAvatar = async (username: string, avatarUrl: string) => {
  try {
    patch.body = JSON.stringify({ avatarUrl });
    const res = await fetch(`${serverIP}/api/users/patch/avatar/${username}`, patch);
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

export const deleteSelf = async () => {
  try {
    const res = await fetch(`${serverIP}/api/users/delete`, post);

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
