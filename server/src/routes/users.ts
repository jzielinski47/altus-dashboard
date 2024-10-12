import { Router } from "express";
import { usersCollection } from "../utils/constans";
import { authorizeAdmin } from "../utils/middlewares";

const router = Router();

router.get("/api/users", (req, res) => {
  res.send(usersCollection);
});

router.post("/api/users/delete/:id", authorizeAdmin, (req, res) => {});

router.get("/api/admin", authorizeAdmin, (req, res) => {
  res.send(usersCollection);
});

export default router;
