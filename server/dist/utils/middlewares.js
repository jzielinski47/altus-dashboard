"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeAdmin = void 0;
const authorizeAdmin = (req, res, next) => {
    //@ts-ignore
    if (req.user && req.user.role === "administrator") {
        next();
    }
    else {
        res.status(401).send({ msg: "You're unauthorized to access this route." });
    }
};
exports.authorizeAdmin = authorizeAdmin;
