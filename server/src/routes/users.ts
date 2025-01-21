import { Request, Response, Router } from "express";
import { isAuthenticated, isAuthorized } from "../utils/middlewares";
import { User } from "../mongodb/schemas/user";
import mongoose from "mongoose";
import { iUser } from "../utils/interfaces";

const router = Router();

router.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/api/users/count"),
  async (req: Request, res: Response) => {
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

router.post(
  "/api/users/delete/:username",
  isAuthorized,
  async (req: Request, res: Response) => {
    const { username } = req.params;

    try {
      const deletedUser = await User.findOneAndDelete({ username });

      if (!deletedUser) {
        res.status(404).send({ msg: `User ${req.params.username} not found` });
      }

      res
        .status(200)
        .send({ msg: `User ${req.params.username} has been deleted` });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ msg: "An error occurred while deleting the user" });
    }
  }
);

router.post(
  "/api/users/delete",
  isAuthenticated,
  async (req: Request, res: Response) => {
    if (!req.user || !req.user.username) {
      throw new Error("User doesn't exist or username is undefined.");
    }
    const { username } = req.user;

    try {
      const deletedUser = await User.findOneAndDelete({ username });

      if (!deletedUser) {
        res.status(404).send({ msg: `User ${username} not found` });
        return;
      }

      res.status(200).send({ msg: `User ${username} has been deleted` });
      return;
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ msg: "An error occurred while deleting the user" });
    }
  }
);

router.patch("/api/users/patch/username/:username", async (req, res) => {
  console.log(req.params.username, "aaa", req.body.username);

  try {
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser)
      res
        .status(404)
        .send({ msg: `User ${req.body.username} already exists.` });

    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      { username: req.body.username },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).send({ msg: `User ${req.params.username} not found` });
    }

    res.status(200).send({
      msg: `User ${req.params.username} has changed username to ${req.body.username}`,
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ msg: "An error occurred while updating the username" });
  }
});

router.patch("/api/users/patch/avatar/:username", async (req, res) => {
  console.log("recieved avatar patch request for", req.body.avatarUrl);
  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      { avatarUrl: req.body.avatarUrl },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).send({ msg: `User ${req.params.username} not found` });
    }

    res.status(200).send({
      msg: `User ${req.params.username} has changed their avatar to ${req.body.avatarUrl}`,
      user: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ msg: "An error occurred while updating the user avatar." });
  }
});

// grant role "user"/"administrator"
router.patch("/api/users/grant/:username", isAuthorized, async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      { role: "administrator" },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).send({ msg: `User ${req.params.username} not found` });
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

router.get("/api/admin", isAuthorized, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/api/users/me", isAuthenticated, async (req, res) => {
  const client = req.session.user as iUser;
  client
    ? res.status(200).send(client)
    : res.status(401).send({ msg: "User not authenticated" });
});

export default router;
