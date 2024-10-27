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
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const user_1 = require("../mongodb/schemas/user");
const encryption_1 = require("../utils/encryption");
passport_1.default.serializeUser((user, done) => {
    //@ts-ignore
    console.log(`serialize user by id_${user.id}`);
    //@ts-ignore
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`deserialize user by id_${id}`);
    try {
        const user = yield user_1.User.findById(id);
        if (!user)
            throw new Error("User not found");
        done(null, user);
    }
    catch (err) {
        done(err);
    }
}));
exports.default = passport_1.default.use(new passport_local_1.Strategy({ usernameField: "username" }, (username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield user_1.User.findOne({ username });
        if (!findUser)
            throw new Error("User not found");
        const isAuthorized = (0, encryption_1.verifyPassword)(password, findUser.password);
        if (!isAuthorized)
            throw new Error("Wrong password");
        done(null, findUser);
    }
    catch (err) {
        done(err, undefined);
    }
})));
