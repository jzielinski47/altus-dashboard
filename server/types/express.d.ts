import "express";
import { iUser } from "../src/utils/interfaces";

declare global {
  namespace Express {
    interface User extends iUser {}
    interface Request {
      user?: iUser;
    }
  }
}
