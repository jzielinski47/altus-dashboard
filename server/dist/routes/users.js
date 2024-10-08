"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const constans_1 = require("../utils/constans");
const router = (0, express_1.Router)();
router.get("/api/users", (req, res) => {
    res.send(constans_1.usersCollection);
});
exports.default = router;
