import express from "express";
import User from "../models/User.js";

const router = express.Router();

// CREATE a user (usually on first login with Clerk)
router.post("/create", async (req, res) => {
  try {
    const { clerkId, username, fullName, userImage,bio} = req.body;

    const existingUser = await User.findOne({ clerkId });

    if (existingUser) {
      return res.status(200).json(existingUser);
    }

    const newUser = await User.create({
      clerkId,
      username,
      fullName,
      userImage,
      bio,
    });

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET current user by clerkId
router.get("/:clerkId", async (req, res) => {
  try {
    const user = await User.findOne({ clerkId: req.params.clerkId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// FOLLOW someone
router.post("/follow", async (req, res) => {
  try {
    const { myId, targetId } = req.body;

    await User.findByIdAndUpdate(myId, {
      $addToSet: { following: targetId },
    });

    await User.findByIdAndUpdate(targetId, {
      $addToSet: { followers: myId },
    });

    res.json({ message: "Followed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UNFOLLOW
router.post("/unfollow", async (req, res) => {
  try {
    const { myId, targetId } = req.body;

    await User.findByIdAndUpdate(myId, {
      $pull: { following: targetId },
    });

    await User.findByIdAndUpdate(targetId, {
      $pull: { followers: myId },
    });

    res.json({ message: "Unfollowed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET all following users for a user
router.get("/:id/following", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("following");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.following);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all followers of a user
router.get("/:id/followers", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("followers");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.followers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET user by MongoDB ID (for profile page)
router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("followers", "username userImage")
      .populate("following", "username userImage");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// GET user by MongoDB ID
router.get("/mongo/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;

//692a901105de9d5c83cb1aa5