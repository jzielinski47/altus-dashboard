"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const constans_1 = require("../utils/constans");
const router = (0, express_1.Router)();
router.get("/api/users", (req, res) => {
  res.send(constans_1.usersCollection);
});
router.get("/api/admin", (req, res) => {
  //
  if (req.session.user && req.session.user.username === "admin") {
    res.send(constans_1.usersCollection);
  } else {
    res.status(401).send({ msg: "You're unauthorized to access this route." });
  }
});
exports.default = router;
