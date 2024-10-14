import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { signupValidationSchema } from "../utils/validationSchemas";
import { usersCollection } from "../utils/constans";
import { iUser } from "../utils/interfaces";
import passport from "passport";
import { User } from "../mongodb/schemas/user";

const router = Router();

// router.post(
//   "/api/signup",
//   checkSchema(signupValidationSchema),
//   //@ts-ignore
//   async (req: Request, res: Response) => {
//     const result = validationResult(req);

//     if (!result.isEmpty()) {
//       res.status(400).send({ errors: result.array() });
//       return; // End the execution
//     }

//     const { username, email, password } = matchedData(req);

//     const usernameExists = usersCollection.find(
//       (user) => user.username === username
//     );

//     if (usernameExists) {
//       res.status(409).send({ msg: "Username is taken" });
//       return;
//     }

//     // At this point the password must be hashed

//     const newRecord: iUser = {
//       id:
//         usersCollection.length > 0
//           ? usersCollection[usersCollection.length - 1].id + 1
//           : 1,
//       username,
//       password,
//       email,
//       role: "user",
//     };

//     usersCollection.push(newRecord);

//     res.status(201).send({ msg: "Signup complete" }); // No need to return
//   }
// );

router.post(
  "/api/auth/signup",
  checkSchema(signupValidationSchema),
  //@ts-ignore
  async (req: Request, res: Response) => {
    const result = validationResult(req); 
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    const { username, email, password } = matchedData(req);
    const newUserInstance = new User({
      username,
      email,
      password,
      role: "user",
    });
    try {
      const savedUser = await newUserInstance.save();
      return res.status(201).send(savedUser);
    } catch (err) {
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
  //
  req.session.user
    ? //
      res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "user not authenticated" });
});

export default router;
