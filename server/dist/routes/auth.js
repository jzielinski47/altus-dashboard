"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validationSchemas_1 = require("../utils/validationSchemas");
const passport_1 = __importDefault(require("passport"));
const user_1 = require("../mongodb/schemas/user");
const encryption_1 = require("../utils/encryption");
const router = (0, express_1.Router)();
router.post("/api/auth/signup", (0, express_validator_1.checkSchema)(validationSchemas_1.signupDataValidationSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ error: "Validation failed", details: errors.array() });
        return;
    }
    const { username, email, password } = (0, express_validator_1.matchedData)(req);
    const hashedPassword = (0, encryption_1.hashPassword)(password);
    try {
        const existingUser = yield user_1.User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            res.status(400).json({ error: "Email or username already exists" });
            return;
        }
        const newUserInstance = new user_1.User({
            username,
            email,
            password: hashedPassword,
            role: "user",
            avatarUrl: "",
            creationDate: Date.now(),
            disabled: false,
        });
        const savedUser = yield newUserInstance.save();
        res.status(201).json({ msg: "User created successfully", user: savedUser });
    }
    catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}));
router.post("/api/auth", (req, res, next) => {
    passport_1.default.authenticate("local", (err, user) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        req.logIn(user, (loginErr) => __awaiter(void 0, void 0, void 0, function* () {
            if (loginErr) {
                return next(loginErr);
            }
            try {
                const currentLoginTime = Date.now();
                yield user_1.User.updateOne({ _id: user.id }, { $set: { lastLogin: currentLoginTime } });
                if (req.user)
                    req.user.lastLogin = currentLoginTime;
                return res.status(200).send({
                    msg: "Authenticated successfully",
                    user: req.user,
                });
            }
            catch (updateErr) {
                console.error("Error updating lastLogin:", updateErr);
                return res.status(500).json({ error: "Failed to update lastLogin" });
            }
            // return res.status(200).send({ msg: "Authenticated successfully", user: req.user });
        }));
    })(req, res, next);
});
router.post("/api/auth/logout", (req, res) => {
    if (!req.user)
        res.sendStatus(401);
    req.logout((err) => {
        res.sendStatus(err ? 400 : 200);
    });
});
router.get("/api/auth/status", (req, res) => {
    const client = req.user;
    client
        ? res.status(200).json({ msg: "User authenticated", user: client })
        : res.status(401).json({ msg: "User not authenticated" });
});
exports.default = router;
