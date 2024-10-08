import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { signupValidationSchema } from "../utils/validationSchemas";
import { usersCollection } from "../utils/constans";

const router = Router();

router.post(
  "/api/signup",
  checkSchema(signupValidationSchema),
  (req: Request, res: Response) => {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
      res.status(400).send({ errors: result.array() });
    } else {
      const { username, email, password } = matchedData(req);
      // at this point make sure the password is cyphered
      const usernameExists = usersCollection.find(
        (user) => user.username === username
      );
      if (usernameExists) {
        res.status(401).send("username is taken");
      } else {
        const newRecord = {
          id: usersCollection[usersCollection.length - 1].id + 1,
          username,
          email,
          password,
        };
        usersCollection.push(newRecord);
        res.send("signup complete");
      }
    }
  }
);

router.post("/api/auth", (req, res) => {
  res.send("login");
});

export default router;
