import moongose from "mongoose";

const UserSchema = new moongose.Schema({
  username: {
    type: moongose.Schema.Types.String,
    required: true,
    unique: true,
  },
  email: { type: moongose.Schema.Types.String, required: true, unique: true },
  password: { type: moongose.Schema.Types.String, required: true },
  role: { type: moongose.Schema.Types.String, required: true },
});

export const User = moongose.model("User", UserSchema);
