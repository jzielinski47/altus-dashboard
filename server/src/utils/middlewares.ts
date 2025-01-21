import { Middleware } from "./interfaces";

export const isAuthorized: Middleware = (req, res, next) => {
  if (req.user && req.user.role === "administrator") return next();
  res.status(401).send({ msg: "You're unauthorized to access this route." });
};

export const isAuthenticated: Middleware = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ msg: "Unauthorized" });
};
