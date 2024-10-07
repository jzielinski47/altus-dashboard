import { Router } from "express";

const router = Router();

router.post("/api/login", (req, res) => {
  res.send("login");
});

export default router;
