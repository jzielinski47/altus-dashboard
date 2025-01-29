import { Request, Response, Router } from "express";
import { isAuthenticated } from "../utils/middlewares";
import { EVCModel } from "../mongodb/schemas/evc";

const router = Router();

router.get("/api/evc", async (req: Request, res: Response): Promise<any> => {
  const chargers = await EVCModel.find();
  res.status(200).json(chargers);
});

export default router;
