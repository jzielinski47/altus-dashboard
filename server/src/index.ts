import express, { Request, Response, NextFunction } from "express";
import router from "./routes/router";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import "./strategies/local-strategy";
import { getRandomArbitrary } from "./utils/encryption";
import { startAgenda } from "./mongodb/schedule/agenda";

dotenv.config({ path: "./local.env" });

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

try {
  mongoose
    .connect(process.env.MONGO_PUBLIC_URL || process.env.MONGO_URL || "")
    .then(() => {
      console.log("Connected to MongoDb Database");
      startAgenda("4 hours");
    })
    .catch((err) => console.log(err));
} catch (err) {
  console.log("DB error: ", err);
}
app.use(express.json());
app.disable("x-powered-by");
try {
  app.use(
    session({
      secret: process.env.SECRET_KEY as string,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 4,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      },
      store: MongoStore.create({ client: mongoose.connection.getClient() }),
    })
  );
} catch (err) {
  console.error("Session creation error: ", err);
}

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.get("/", (req, res) => {
  req.session.visited = true;
  res.send({ msg: "/ - server's running correctly" });
});

const port: number = parseInt(process.env.PORT as string) || getRandomArbitrary(49152, 65535);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
