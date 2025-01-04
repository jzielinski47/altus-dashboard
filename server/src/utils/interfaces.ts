import { NextFunction, Request, Response } from "express";

export interface iUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: string;
  avatarUrl?: string;
  creationDate?: number;
  lastLogin?: number;
  gender?: string;
  disabled?: boolean;
}

export type Middleware = (req: Request, res: Response, next: NextFunction) => void;

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
