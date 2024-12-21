import { NextFunction, Request, Response } from "express";
import { Middleware } from "./interfaces";

export const isAuthorized: Middleware = (req, res, next) => {
  if (req.user && req.user.role === "administrator") next();
  res.status(401).send({ msg: "You're unauthorized to access this route." });
};

export const isAuthenticated: Middleware = (req, res, next) => {
  if (req.isAuthenticated()) next();
  res.status(401).json({ msg: "Unauthorized" });
};
