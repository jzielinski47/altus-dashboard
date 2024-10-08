"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("./users"));
const usersAuth_1 = __importDefault(require("./usersAuth"));
const router = (0, express_1.Router)();
router.use(usersAuth_1.default);
router.use(users_1.default);
exports.default = router;
