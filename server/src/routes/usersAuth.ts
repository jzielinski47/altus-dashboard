import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { signupDataValidationSchema } from "../utils/validationSchemas";
import passport from "passport";
import { User } from "../mongodb/schemas/user";
import { hashPassword } from "../utils/encryption";

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

router.post("/api/auth", passport.authenticate("local"), (req, res) => {
  res.send("Authenticated successfully");
});

router.post("/api/auth/logout", (req, res) => {
  if (!req.user) res.sendStatus(401);
  req.logout((err) => {
    res.sendStatus(err ? 400 : 200);
  });
});

router.get("/api/auth/status", (req, res) => {
  //@ts-ignore
  req.session.user
    ? //@ts-ignore
      res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "user not authenticated" });
});

export default router;
