"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../utils/middlewares");
const router = (0, express_1.Router)();
router.get("/api/dashboard", middlewares_1.isAuthenticated, (req, res) => {
    res.send({ msg: "dashboard" });
});
exports.default = router;
