import { Router } from "express";
import { authorizeAdmin } from "../utils/middlewares";
import { User } from "../mongodb/schemas/user";

const router = Router();

router.get("/api/users", async (req, res) => {
  const users = await User.find();

  req.sessionStore.get(req.session.id, (err, sessionData) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("session store get request");
    console.log(sessionData);
  });

  res.send(users);
});

// delete user account
//@ts-ignore
router.post("/api/users/delete/:id", authorizeAdmin, (req, res) => {});

// grant role "user"/"administrator"
//@ts-ignore
router.post("/api/users/grant/:id", authorizeAdmin, (req, res) => {});

//@ts-ignore
router.get("/api/admin", authorizeAdmin, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

export default router;
