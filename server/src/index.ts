import express, { Request, Response, NextFunction } from "express";
import router from "./routes/router";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import "./strategies/local-strategy";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/avantgarde_project")
  .then(() => console.log("Connected to MongoDb Database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.disable("x-powered-by");
app.use(
  session({
    secret: "test_key",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.get("/", (req, res) => {
  req.session.visited = true;
  res.send({ msg: "welcome to /" });
});

const port: number = parseInt(process.env.PORT || "8000", 10);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
