import { Router } from "express";
import { usersCollection } from "../utils/constans";
import { authorizeAdmin } from "../utils/middlewares";

const router = Router();

router.get("/api/users", (req, res) => {
  res.send(usersCollection);
});

// delete user account
router.post("/api/users/delete/:id", authorizeAdmin, (req, res) => {});

// grant role "user"/"administrator"
router.post("/api/users/grant/:id", authorizeAdmin, (req, res) => {});

router.get("/api/admin", authorizeAdmin, (req, res) => {
  res.send(usersCollection);
});

export default router;
