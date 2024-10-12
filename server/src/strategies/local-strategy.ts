import passport, { use } from "passport";
import { Strategy } from "passport-local";
import { usersCollection } from "../utils/constans";

passport.serializeUser((user, done) => {
  //@ts-ignore
  console.log(`serialize user by id_${user.id}`);
  //@ts-ignore
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  console.log(`deserialize user by id_${id}`);

  try {
    const user = usersCollection.find((sUser) => sUser.id === id);
    if (!user) throw new Error("User not found");
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport.use(
  //
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
