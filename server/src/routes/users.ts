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

//@ts-ignore
router.post("/api/users/delete/:username", authorizeAdmin, async (req, res) => {
  const { username } = req.params;

  try {
    const deletedUser = await User.findOneAndDelete({
      username,
    });

    if (!deletedUser) {
      return res
        .status(404)
        .send({ msg: `User ${req.params.username} not found` });
    }

    res
      .status(200)
      .send({ msg: `User ${req.params.username} has been deleted` });
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "An error occurred while deleting the user" });
  }
});

// grant role "user"/"administrator"
//@ts-ignore
router.patch("/api/users/grant/:username", authorizeAdmin, async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      { role: "administrator" },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .send({ msg: `User ${req.params.username} not found` });
    }

    res.status(200).send({
      msg: `User ${req.params.username} has been granted administrator rights`,
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ msg: "An error occurred while updating the user role" });
  }
});

//@ts-ignore
router.get("/api/admin", authorizeAdmin, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

export default router;
