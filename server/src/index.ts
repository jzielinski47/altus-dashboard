import express, { Request, Response, NextFunction } from "express";
import router from "./routes/router";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import "./strategies/local-strategy";

const app = express();
const cors = require("cors");
const isLocalEnabled: boolean = true;

app.use(
  cors({
    origin: isLocalEnabled ? "http://localhost:5173" : process.env.FRONTEND_URI,
    credentials: true,
  })
);

mongoose
  .connect(
    isLocalEnabled ? "mongodb://localhost:27017" : process.env.MONGO_PUBLIC_URL || (process.env.MONGO_URL as string)
  )
  .then(() => console.log("Connected to MongoDb Database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.disable("x-powered-by");
app.use(
  session({
    secret: isLocalEnabled ? "testsecretkey" : (process.env.SECRET_KEY as string),
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

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.get("/", (req, res) => {
  req.session.visited = true;

  res.send({ msg: "/ - server's running" });
});

const port: number = parseInt(isLocalEnabled ? "8080" : (process.env.PORT as string));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
