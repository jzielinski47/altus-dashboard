import express, { Request, Response, NextFunction } from "express";
import router from "./routes/router";
import session from "express-session";
import passport from "passport";
import "./strategies/local-strategy";

const app = express();
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
  //@ts-ignore
  req.session.visited = true;
  res.send({ msg: "welcome to /" });
});

const port: number = parseInt(process.env.PORT || "3000", 10);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
