import { Request, Response, Router } from "express";
import { isAuthenticated } from "../utils/middlewares";
import { EVCModel } from "../mongodb/schemas/evc";
import fetchAndStoreEVC from "../mongodb/schedule/fetchAndStoreEVC";

const router = Router();

router.get("/api/evc", async (req: Request, res: Response): Promise<any> => {
  const chargers = await EVCModel.find();
  res.status(200).json(chargers);
});

router.get("/api/evc/force", async (req: Request, res: Response): Promise<any> => {
  try {
    await fetchAndStoreEVC();
    res.status(200).send({ msg: "Fetch successful" });
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

export default router;
