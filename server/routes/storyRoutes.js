import express from "express";
import Story from "../models/Story.js";

const router = express.Router();

// CREATE STORY
router.post("/create", async (req, res) => {
  try {
    const story = await Story.create({
      userId: req.body.userId,
      username: req.body.username,
      userImage: req.body.userImage,
      storyContent: req.body.storyContent,
      contentType: req.body.contentType, // "image" or "video"
    });

    res.status(200).json(story);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ALL STORIES
router.get("/all", async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;


