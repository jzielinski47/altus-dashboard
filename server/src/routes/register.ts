import { Router } from "express";

const router = Router();

router.post("/api/register", (req, res) => {
  res.send("register");
});

export default router;
