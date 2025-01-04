import moongose from "mongoose";

const UserSchema = new moongose.Schema({
  username: {
    type: moongose.Schema.Types.String,
    required: true,
    unique: true,
  },
  email: { type: moongose.Schema.Types.String, required: true, unique: true },
  password: { type: moongose.Schema.Types.String, required: true },
  role: { type: moongose.Schema.Types.String, required: true, default: "user" },
  avatarUrl: { type: String, default: "" },
  creationDate: { type: Number, default: Date.now },
  lastLogin: { type: Number, default: null },
  gender: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});

export const User = moongose.model("User", UserSchema);
