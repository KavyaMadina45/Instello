import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userImage: {
    type: String, // profile picture
    required: true,
  },
storyContent: {
  type: String, // Cloudinary link for image or video
  required: true,
},
contentType: {
  type: String, // "image" or "video"
  required: true,
},
  createdAt: {
    type: Date,
    default: Date.now,
    // expires: "48h" // story auto-deletes after 24 hrs
  }
});

export default mongoose.model("Story", StorySchema);





