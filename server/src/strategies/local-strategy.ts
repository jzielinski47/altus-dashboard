import passport from "passport";
import { Strategy } from "passport-local";
import { usersCollection } from "../utils/constans";

export default passport.use(
  //@ts-ignore
  new Strategy({ usernameField: "username" }, (username, password, done) => {
    try {
      const findUser = usersCollection.find(
        (user) => user.username === username
      );
      if (!findUser) throw new Error("User not found");
      if (findUser.password !== password) throw new Error("Wrong Password");

      done(null, findUser);
    } catch (err) {
      done(err, undefined);
    }
  })
);
