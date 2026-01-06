
import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import postRoutes from "./routes/postRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";


import Message from "./models/Message.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));

app.use("/api/posts", postRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);


// Database connection
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Instello Backend Running...");
});

app.get("/test-cloudinary", (req, res) => {
  res.json({ cloudinary: process.env.CLOUDINARY_NAME });
});

// ---- Create HTTP server and attach Socket.IO ----
const PORT = process.env.PORT || 5000;
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Simple in-memory map: userId -> socketId
const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("addUser", (userId) => {
    socket.join(userId);
    console.log("User joined room:", userId);
  });

  socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
    const savedMsg = await Message.create({
      senderId,
      receiverId,
      message,
    });

    io.to(receiverId).emit("receiveMessage", savedMsg);
    io.to(senderId).emit("receiveMessage", savedMsg);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});


 








// Start HTTP + Socket server
httpServer.listen(PORT, () => {
  console.log(`Server (HTTP + Socket.IO) running on port ${PORT}`);
});

