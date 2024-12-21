import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { signupDataValidationSchema } from "../utils/validationSchemas";
import passport from "passport";
import { User } from "../mongodb/schemas/user";
import { hashPassword } from "../utils/encryption";
import { iUser } from "../utils/interfaces";

const router = Router();

router.post(
  "/api/auth/signup",
  checkSchema(signupDataValidationSchema),
  //@ts-ignore
  async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    const { username, email, password } = matchedData(req);
    const hashedPassword = hashPassword(password);
    console.log("haslo", password, hashedPassword);
    const newUserInstance = new User({
      username,
      email,
      password: hashedPassword,
      role: "user",
    });
    try {
      const savedUser = await newUserInstance.save();
      return res.status(201).send(savedUser);
    } catch (err) {
      console.log(err);
      return res.sendStatus(400);
    }
  }
);

// router.post("/api/auth", passport.authenticate("local"), (req, res) => {
//   res.status(200).send({ msg: "Authenticated successfully" });
// });

router.post("/api/auth", (req, res, next) => {
  passport.authenticate("local", (err: { message: any }, user: iUser) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.status(200).send({ msg: "Authenticated successfully" });
    });
  })(req, res, next);
});

router.post("/api/auth/logout", (req, res) => {
  if (!req.user) res.sendStatus(401);
  req.logout((err) => {
    res.sendStatus(err ? 400 : 200);
  });
});

router.get("/api/auth/status", (req, res) => {
  const client = req.session.user as iUser;

  client
    ? res.status(200).send(client)
    : res.status(401).send({ msg: "user not authenticated" });
});

export default router;
