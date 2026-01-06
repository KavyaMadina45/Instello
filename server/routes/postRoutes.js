import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// CREATE POST
router.post("/create", async (req, res) => {
  try {
    const { userId,userImage, caption, mediaUrl,mediaType,bio } = req.body;

    const post = await Post.create({ userId,userImage, caption, mediaUrl,mediaType,bio });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET FEED POSTS
router.get("/feed", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//692be7e559060ffb1097d7b9




// LIKE / UNLIKE
// router.post("/like/:postId", async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const post = await Post.findById(req.params.postId);

//     if (!post) return res.status(404).json({ error: "Post not found" });

//     if (post.likes.includes(userId)) {
//       post.likes = post.likes.filter(id => id !== userId);
//     } else {
//       post.likes.push(userId);
//     }

//     await post.save();

//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.put("/like/:postId", async (req, res) => {
  try {
    const { userId } = req.body;
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json("Post not found");
    }

    // check already liked
    const alreadyLiked = post.likes.includes(userId);

    if (alreadyLiked) {
      // UNLIKE
      post.likes = post.likes.filter(
        (id) => id.toString() !== userId
      );
    } else {
      // LIKE
      post.likes.push(userId);
    }

    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});


// COMMENT ON POST
router.post("/comments/:postId", async (req, res) => {
  try {
    const { userId, text } = req.body;

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    post.comments.push({ userId, text });
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
