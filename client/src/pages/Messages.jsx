
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Messages = () => {
  const { user } = useUser();
  
  const [followingUsers, setFollowingUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        // 1️⃣ Get current user by Clerk ID
        const res = await axios.get(
          `http://localhost:5000/api/users/${user.id}`
        );
       
        // 2️⃣ Fetch following users using MongoDB ID
        const followingRes = await axios.get(
          `http://localhost:5000/api/users/${res.data._id}/following`
        );

        setFollowingUsers(followingRes.data);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    fetchUserData();
  }, [user]);




  return (
    <div className="text-white p-4">
      {/* -------- Header -------- */}
      <h2 className="text-xl font-semibold mb-4">Messages</h2>

      {/* -------- Search Bar -------- */}
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-900 border border-gray-800 p-2 rounded-lg mb-4"
      />

      {/* -------- Chat List -------- */}
      <div className="space-y-3">
        {followingUsers.length === 0 ? (
          <p className="text-gray-400 text-center">No users in following list</p>
        ) : (
          followingUsers.map((u) => (
             <Link key={u._id} to={`/messages/${u._id}`}>   


              <div className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition">
                <img
                  src={
                    u.userImage ||
                    "https://i.pinimg.com/736x/cb/e5/33/cbe53370e69a0"
                  }
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-medium">{u.username}</p>
                  <p className="text-sm text-gray-400">Tap to chat...</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
