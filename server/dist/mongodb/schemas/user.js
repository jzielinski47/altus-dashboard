"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
    },
    email: { type: mongoose_1.default.Schema.Types.String, required: true, unique: true },
    password: { type: mongoose_1.default.Schema.Types.String, required: true },
    role: { type: mongoose_1.default.Schema.Types.String, required: true, default: "user" },
    avatarUrl: { type: String, default: "" },
    creationDate: { type: Number, default: Date.now },
    lastLogin: { type: Number, default: null },
    gender: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
});
exports.User = mongoose_1.default.model("User", UserSchema);
