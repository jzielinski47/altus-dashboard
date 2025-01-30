import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../mongodb/schemas/user";
import { verifyPassword } from "../utils/encryption";
import { iUser } from "../utils/interfaces";

passport.serializeUser((user, done) => {
  const client = user as iUser;
  console.log(`serialize user by id_${client}`);
  done(null, client.id);
});

passport.deserializeUser(async (id: number, done) => {
  console.log(`deserialize user by id_${id}`);

  try {
    const user = await User.findById(id);
    if (!user) throw new Error("User not found");
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      const findUser = await User.findOne({ email });
      if (!findUser) throw new Error("User not found");

      const isAuthorized = verifyPassword(password, findUser.password);
      if (!isAuthorized) throw new Error("Wrong password");

      done(null, findUser);
    } catch (err) {
      done(err, undefined);
    }
  })
);
