import "express";
import { iUser } from "../src/utils/interfaces";

declare global {
  namespace Express {
    class User extends iUser {}
    interface Request {
      user?: iUser;
    }
  }
}
