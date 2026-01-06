
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { socket } from "../socket";

const ChatBox = () => {
  const { user } = useUser();
  const { userId: receiverId } = useParams();

  const [mongoUser, setMongoUser] = useState(null);
  const [receiverUser, setReceiverUser] = useState(null);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const senderId = mongoUser?._id;

  // 🔹 Load current user (MongoDB)
  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:5000/api/users/${user.id}`)
      .then((res) => setMongoUser(res.data));
  }, [user]);

  // 🔹 Load receiver profile
  useEffect(() => {
    if (!receiverId) return;

    axios
      .get(`http://localhost:5000/api/users/mongo/${receiverId}`)
      .then((res) => setReceiverUser(res.data))
      .catch(() => console.log("Receiver profile not found"));
  }, [receiverId]);

  // 🔹 Join socket & receive messages
  useEffect(() => {
    if (!senderId) return;

    socket.emit("addUser", senderId);

    const handleReceive = (msg) => {
      if (
        (msg.senderId === senderId && msg.receiverId === receiverId) ||
        (msg.senderId === receiverId && msg.receiverId === senderId)
      ) {
        setChat((prev) => [...prev, msg]);
      }
    };

    socket.on("receiveMessage", handleReceive);
    return () => socket.off("receiveMessage", handleReceive);
  }, [senderId, receiverId]);

  // 🔹 Load old messages
  useEffect(() => {
    if (!senderId || !receiverId) return;

    axios
      .get(`http://localhost:5000/api/messages/${senderId}/${receiverId}`)
      .then((res) => setChat(res.data));
  }, [senderId, receiverId]);

  // 🔹 Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    socket.emit("sendMessage", {
      senderId,
      receiverId,
      message: input,
    });

    setInput("");
  };

  return (
    <div className="flex flex-col h-full text-white p-4">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-800 pb-3 mb-3">
        <img
          src={receiverUser?.userImage || "https://via.placeholder.com/40"}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="font-semibold">{receiverUser?.username}</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3">
        {chat.map((msg) => {
          const isMine = msg.senderId === senderId;

          return (
            <div
              key={msg._id}
              className={`flex ${isMine ? "justify-end" : "items-start gap-2"}`}
            >
              {!isMine && (
                <img
                  src={
                    receiverUser?.userImage ||
                    "https://via.placeholder.com/35"
                  }
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}

              <div
                className={`px-3 py-2 rounded-xl max-w-xs ${
                  isMine ? "bg-blue-600" : "bg-gray-800"
                }`}
              >
                {msg.message}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-3">
        <input
          className="flex-1 bg-gray-900 p-2 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-600 px-4 rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
