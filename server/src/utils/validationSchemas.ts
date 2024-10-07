import { Request, Response, NextFunction } from "express";
import { body } from "express-validator";

export const signupValidSchema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
    },
    notEmpty: true,
    isString: true,
  },
  email: {
    isEmail: true,
  },
  password: {},
};
