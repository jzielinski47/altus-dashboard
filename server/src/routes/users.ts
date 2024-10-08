import { Router } from "express";
import { usersCollection } from "../utils/constans";

const router = Router();

router.get("/api/users", (req, res) => {
  res.send(usersCollection);
});

router.get("/api/admin", (req, res) => {
  //@ts-ignore
  if (req.session.user && req.session.user.username === "admin") {
    res.send(usersCollection);
  } else {
    res.status(401).send({ msg: "You're unauthorized to access this route." });
  }
});

export default router;
