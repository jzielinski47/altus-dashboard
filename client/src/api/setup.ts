console.log("import.meta.env:", import.meta.env);

export const isPortRequired: boolean =
  import.meta.env.VITE_LOCAL_ENABLED === "true" ? true : false;
console.log(isPortRequired);
export const serverIP: string = isPortRequired
  ? `${import.meta.env.VITE_CORS_SERVER}:${parseInt(
      import.meta.env.VITE_CORS_PORT
    )}`
  : (import.meta.env.VITE_CORS_SERVER as string);
export const serverPort: number = parseInt(import.meta.env.VITE_CORS_PORT);

export const patch: RequestInit = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};

export const get: RequestInit = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};

export const post: RequestInit = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
};
