"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFoo = exports.isAuthenticated = exports.isAuthorized = void 0;
const isAuthorized = (req, res, next) => {
    if (req.user && req.user.role === "administrator")
        next();
    res.status(401).send({ msg: "You're unauthorized to access this route." });
};
exports.isAuthorized = isAuthorized;
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated())
        next();
    res.status(401).json({ msg: "Unauthorized" });
};
exports.isAuthenticated = isAuthenticated;
const setFoo = (req, res, next) => {
    req.foo = "bar"; // Assign the value
    next();
};
exports.setFoo = setFoo;
