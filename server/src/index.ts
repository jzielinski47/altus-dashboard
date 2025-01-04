import express, { Request, Response, NextFunction } from "express";
import router from "./routes/router";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import "./strategies/local-strategy";
import { setup } from "./setup";

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URI || `${setup.client.url}:${setup.client.port}`,
    credentials: true,
  })
);

console.log("Mongo URI (env):", process.env.MONGO_URI || "Not set");
console.log("Frontend URI (env):", process.env.FRONTEND_URI || "Not set");
console.log("Frontend URI:", process.env);

mongoose
  .connect(process.env.MONGO_URI || setup.db.url)
  .then(() => console.log("Connected to MongoDb Database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.disable("x-powered-by");
app.use(
  session({
    secret: process.env.SECRET_KEY as string,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 4, // 4 hours
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

  res.send({ msg: "welcome to /" });
});

const port: number = parseInt(process.env.PORT || setup.server.port.toString(), 10);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
