import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: String, // Clerk user ID
    required: true,
  },
  userImage:{
    type:String,
    required:true,
  },
  caption: {
    type: String,
    default: "",
  },
  mediaUrl: {
    type: String, // image or video URL
    required: true,
  },
  mediaType: {
    type: String, // "image" or "video"
    required: true,
  },
  bio:{
    type:String,
    required:true,
  },
  likes: {
    type: [String], // array of userId's who liked
    default: [],
  },
  comments: [
    {
      userId: String,
      userImage:String,
      text: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;


//692bee3ccfdfea1bb52dc4b0