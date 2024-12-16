export interface iUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: string;
}

declare module "express-session" {
  interface SessionData {
    user: iUser;
    visited: boolean;
  }
}

declare module "express" {
  interface User extends iUser {}
  interface Request {
    user?: iUser;
  }
}

export interface AuthInfo {
  message?: string;
}
