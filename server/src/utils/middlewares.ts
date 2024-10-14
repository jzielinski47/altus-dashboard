import { NextFunction, Request, Response } from "express";

export const authorizeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@ts-ignore
  if (req.user && req.user.role === "administrator") {
    next();
  } else {
    res.status(401).send({ msg: "You're unauthorized to access this route." });
  }
};
