import { Request, Response, Router } from "express";
import { checkSchema } from "express-validator";
import { signupValidSchema } from "../utils/validationSchemas";

const router = Router();

router.post(
  "/api/signup",
  checkSchema(signupValidSchema),
  (req: Request, res: Response) => {
    console.log(req.body);
    res.send("signup");
  }
);

router.post("/api/login", (req, res) => {
  res.send("login");
});

export default router;
