import { Request, Response, Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { signupValidationSchema } from "../utils/validationSchemas";

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
      const data = matchedData(req);
      // at this point make sure the password is cyphered
      const newRecord = { id: 0, ...data };
      // append the newRecord either to the furture db infrastructure or to a local array
      res.send("signup complete");
    }
  }
);

router.post("/api/login", (req, res) => {
  res.send("login");
});

export default router;
