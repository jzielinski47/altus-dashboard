"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validationSchemas_1 = require("../utils/validationSchemas");
const constans_1 = require("../utils/constans");
const router = (0, express_1.Router)();
router.post("/api/signup", (0, express_validator_1.checkSchema)(validationSchemas_1.signupValidationSchema), (req, res) => {
    const result = (0, express_validator_1.validationResult)(req);
    // console.log(result);
    if (!result.isEmpty()) {
        res.status(400).send({ errors: result.array() });
    }
    else {
        const { username, email, password } = (0, express_validator_1.matchedData)(req);
        // at this point make sure the password is cyphered
        const usernameExists = constans_1.usersCollection.find((user) => user.username === username);
        if (usernameExists) {
            res.status(401).send({ msg: "username is taken" });
        }
        else {
            const newRecord = {
                id: constans_1.usersCollection[constans_1.usersCollection.length - 1].id + 1,
                username,
                email,
                password,
            };
            constans_1.usersCollection.push(newRecord);
            res.send({ msg: "signup complete" });
        }
    }
});
router.post("/api/auth", (req, res) => {
    const { username, password } = req.body;
    const findUser = constans_1.usersCollection.find((user) => user.username === username);
    if (!findUser) {
        res.status(401).send({ msg: "wrong username" });
    }
    else if (findUser.password !== password) {
        res.status(401).send({ msg: "wrong password" });
    }
    else {
        // @ts-ignore
        req.session.user = findUser;
        res.status(200).send(findUser);
    }
});
router.get("/api/auth/status", (req, res) => {
    //@ts-ignore
    req.session.user
        ? //@ts-ignore
            res.status(200).send(req.session.user)
        : res.status(401).send({ msg: "user not authenticated" });
});
exports.default = router;
