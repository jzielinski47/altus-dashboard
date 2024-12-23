import { Request, Response, Router } from "express";
import { isAuthenticated } from "../utils/middlewares";

const router = Router();

router.get("/api/dashboard", isAuthenticated, (req: Request, res: Response) => {
  res.send({ msg: "dashboard" });
});

export default router;
