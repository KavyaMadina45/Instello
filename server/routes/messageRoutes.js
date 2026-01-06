import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Save message
router.post("/", async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/chat-list/:userId", async (req, res) => {
  const userId = new mongoose.Types.ObjectId(req.params.userId);

  const chats = await Message.aggregate([
    {
      $match: {
        $or: [
          { senderId: userId },
          { receiverId: userId },
        ],
      },
    },
    { $sort: { createdAt: -1 } },
    {
      $group: {
        _id: {
          $cond: [
            { $eq: ["$senderId", userId] },
            "$receiverId",
            "$senderId",
          ],
        },
        lastMessage: { $first: "$message" },
        createdAt: { $first: "$createdAt" },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    { $sort: { createdAt: -1 } },
  ]);

  res.json(chats);
});


// Get chat between two users
router.get("/:user1/:user2", async (req, res) => {
  const { user1, user2 } = req.params;

  const messages = await Message.find({
    $or: [
      { senderId: user1, receiverId: user2 },
      { senderId: user2, receiverId: user1 },
    ],
  }).sort({ createdAt: 1 });

  res.json(messages);
});

// router.put("/seen/:senderId/:receiverId", async (req, res) => {
//   await Message.updateMany(
//     {
//       senderId,
//       receiverId,
//       seen: false,
//     },
//     { seen: true }
//   );

//   res.json({ success: true });
// });

export default router;
