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
router.post("/api/auth/signup", (0, express_validator_1.checkSchema)(validationSchemas_1.signupDataValidationSchema), 
//@ts-ignore
(req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    }
    const { username, email, password } = (0, express_validator_1.matchedData)(req);
    const hashedPassword = (0, encryption_1.hashPassword)(password);
    console.log("haslo", password, hashedPassword);
    const newUserInstance = new user_1.User({
        username,
        email,
        password: hashedPassword,
        role: "user",
    });
    try {
        const savedUser = yield newUserInstance.save();
        return res.status(201).send(savedUser);
    }
    catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}));
router.post("/api/auth", passport_1.default.authenticate("local"), (req, res) => {
    res.send("Authenticated successfully");
});
router.post("/api/auth/logout", (req, res) => {
    if (!req.user)
        res.sendStatus(401);
    req.logout((err) => {
        res.sendStatus(err ? 400 : 200);
    });
});
router.get("/api/auth/status", (req, res) => {
    //@ts-ignore
    req.session.user
        ? //@ts-ignore
            res.status(200).send(req.session.user)
        : res.status(401).send({ msg: "user not authenticated" });
});
exports.default = router;
