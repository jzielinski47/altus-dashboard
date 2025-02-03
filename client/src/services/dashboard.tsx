import { serverIP } from "./setup";

export const getEVCs = async () => {
  const res = await fetch(`${serverIP}/api/evc`);
  if (res.ok) {
    return res.json();
  } else {
    const err = await res.json();
    throw new Error(err.error);
  }
};
