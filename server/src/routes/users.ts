import { Router } from "express";
import { usersCollection } from "../utils/constans";

const router = Router();

router.get("/api/users", (req, res) => {
  res.send(usersCollection);
});

export default router;
