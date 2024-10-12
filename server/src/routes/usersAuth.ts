import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { signupValidationSchema } from "../utils/validationSchemas";
import { usersCollection } from "../utils/constans";
import { iUser } from "../utils/interfaces";
import passport from "passport";

const router = Router();

router.post(
  "/api/signup",
  checkSchema(signupValidationSchema),
  //@ts-ignore
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      res.status(400).send({ errors: result.array() }); // Don't return res.send
      return; // End the execution
    }

    const { username, email, password } = matchedData(req);

    const usernameExists = usersCollection.find(
      (user) => user.username === username
    );

    if (usernameExists) {
      res.status(409).send({ msg: "Username is taken" }); // Don't return res.send
      return; // End the execution
    }

    // At this point the password must be hashed

    const newRecord: iUser = {
      id:
        usersCollection.length > 0
          ? usersCollection[usersCollection.length - 1].id + 1
          : 1, // Handle empty users collection
      username,
      password,
      email,
      role: "user",
    };

    usersCollection.push(newRecord);

    res.status(201).send({ msg: "Signup complete" }); // No need to return
  }
);

// router.post("/api/auth", async (req, res) => {
//   const { username, password } = req.body;
//   const findUser = usersCollection.find((user) => user.username === username);
//   if (!findUser) {
//     res.status(401).send({ msg: "wrong username" });
//   } else if (findUser.password !== password) {
//     res.status(401).send({ msg: "wrong password" });
//   } else {
//     //
//     req.session.user = findUser;
//     res.status(200).send(findUser);
//   }
// });

router.post("/api/auth", passport.authenticate("local"), (req, res) => {
  res.send("Authenticated successfully");
});

router.get("/api/auth/status", (req, res) => {
  //
  req.session.user
    ? //
      res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "user not authenticated" });
});

export default router;
