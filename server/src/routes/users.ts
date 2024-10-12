import { RequestHandler, Router } from "express";
import { usersCollection } from "../utils/constans";
import { authorizeAdmin } from "../utils/middlewares";

const router = Router();

router.get("/api/users", (req, res) => {
  res.send(usersCollection);
});

// delete user account
//@ts-ignore
router.post("/api/users/delete/:id", authorizeAdmin, (req, res) => {});

// grant role "user"/"administrator"
//@ts-ignore
router.post("/api/users/grant/:id", authorizeAdmin, (req, res) => {});

//@ts-ignore
router.get("/api/admin", authorizeAdmin, (req, res) => {
  res.send(usersCollection);
});

export default router;
