import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { signupDataValidationSchema } from "../utils/validationSchemas";
import passport from "passport";
import { User } from "../mongodb/schemas/user";
import { hashPassword } from "../utils/encryption";
import { iUser } from "../utils/interfaces";

const router = Router();

router.post("/api/auth/signup", checkSchema(signupDataValidationSchema), async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ error: "Validation failed", details: errors.array() });
    return;
  }

  const { username, email, password } = matchedData(req);
  const hashedPassword = hashPassword(password);

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      res.status(400).json({ error: "Email or username already exists" });
      return;
    }

    const newUserInstance = new User({
      username,
      email,
      password: hashedPassword,
      role: "user",
      avatarUrl: "",
      creationDate: Date.now(),
      disabled: false,
    });

    const savedUser = await newUserInstance.save();
    res.status(201).json({ msg: "User created successfully", user: savedUser });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/api/auth", (req, res, next) => {
  passport.authenticate("local", (err: { message: any }, user: iUser) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    req.logIn(user, async (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }

      try {
        const currentLoginTime = Date.now();

        await User.updateOne({ _id: user.id }, { $set: { lastLogin: currentLoginTime } });

        return res.status(200).send({
          msg: "Authenticated successfully",
          user: req.user,
        });
      } catch (updateErr) {
        console.error("Error updating lastLogin:", updateErr);
        return res.status(500).json({ error: "Failed to update lastLogin" });
      }

      // return res.status(200).send({ msg: "Authenticated successfully", user: req.user });
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
  const client = req.user as iUser;
  client
    ? res.status(200).json({ msg: "User authenticated", user: client })
    : res.status(401).json({ msg: "User not authenticated" });
});

export default router;
