import passport, { use } from "passport";
import { Strategy } from "passport-local";
import { User } from "../mongodb/schemas/user";
import { hashPassword , verifyPassword } from "../utils/encryption";

passport.serializeUser((user, done) => {
  //@ts-ignore
  console.log(`serialize user by id_${user.id}`);
  //@ts-ignore
  done(null, user.id);
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
  //
  new Strategy(
    { usernameField: "username" },
    async (username, password, done) => {
      try {
        const findUser = await User.findOne({ username });
        if (!findUser) throw new Error("User not found");

        console.log(findUser.username, findUser.password, password)
        const authorized = verifyPassword(password, findUser.password);

        if (!authorized) throw new Error("Wrong password");
        done(null, findUser);
      } catch (err) {
        done(err, undefined);
      }
    }
  )
);
