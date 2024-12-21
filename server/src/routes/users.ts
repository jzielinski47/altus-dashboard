import { Router } from "express";
import { isAuthorized } from "../utils/middlewares";
import { User } from "../mongodb/schemas/user";
import mongoose from "mongoose";

const router = Router();

router.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/api/users/count"),
  //@ts-ignore
  async (req, res) => {
    try {
      const client = mongoose.connection.getClient();
      const activeUsersCount = await client
        .db()
        .collection("sessions")
        .countDocuments();
      res.json({ activeUsersCount });
    } catch (error) {
      console.error("Error fetching active users count:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

//@ts-ignore
router.post("/api/users/delete/:username", isAuthorized, async (req, res) => {
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
router.patch("/api/users/grant/:username", isAuthorized, async (req, res) => {
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
router.get("/api/admin", isAuthorized, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

export default router;
