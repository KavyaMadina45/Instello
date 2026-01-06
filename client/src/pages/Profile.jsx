import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Profile = () => {
  const { user } = useUser();
  const { profileId } = useParams();

  const [profile, setProfile] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Load current mongo user
  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:5000/api/users/${user.id}`)
      .then((res) => setCurrentUser(res.data));
  }, [user]);

  // Load profile user
  useEffect(() => {
    const id = profileId || currentUser?._id;
    if (!id) return;

    axios
      .get(`http://localhost:5000/api/users/profile/${id}`)
      .then((res) => setProfile(res.data));
  }, [profileId, currentUser]);

  if (!profile) return <p className="text-white p-4">Loading...</p>;

  const isOwnProfile = currentUser?._id === profile._id;

  return (
    // <div className="text-white p-4">
    //   <img
    //     src={profile.userImage || "https://via.placeholder.com/100"}
    //     className="w-24 h-24 rounded-full mb-3"
    //   />

    //   <h2 className="text-xl font-semibold">{profile.username}</h2>
    //   <p className="text-gray-400">{profile.bio}</p>

    //   <div className="flex gap-6 mt-4">
    //     <div>
    //       <p className="font-semibold">{profile.followers.length}</p>
    //       <p className="text-sm text-gray-400">Followers</p>
    //     </div>
    //     <div>
    //       <p className="font-semibold">{profile.following.length}</p>
    //       <p className="text-sm text-gray-400">Following</p>
    //     </div>
    //   </div>

    //   {!isOwnProfile && (
    //     <Link
    //       to={`/messages/${profile._id}`}
    //       className="inline-block mt-4 bg-blue-600 px-4 py-2 rounded-lg"
    //     >
    //       Message
    //     </Link>
    //   )}

    //   {/* Followers List */}
    //   <div className="mt-6">
    //     <h3 className="font-semibold mb-2">Followers</h3>
    //     {profile.followers.map((u) => (
    //       <Link key={u._id} to={`/profile/${u._id}`}>
    //         <div className="flex items-center gap-3 py-2">
    //           <img
    //             src={u.userImage || "https://via.placeholder.com/40"}
    //             className="w-8 h-8 rounded-full"
    //           />
    //           <p>{u.username}</p>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>

    <div className="max-w-4xl mx-auto px-6 text-white">

    {/* TOP SECTION */}
    <div className="flex gap-16 mt-10">

      {/* PROFILE IMAGE */}
      <div className="flex-shrink-0">
        <img
          src={profile.userImage || "https://via.placeholder.com/150"}
          className="w-36 h-36 rounded-full object-cover"
          alt="profile"
        />
      </div>

      {/* PROFILE INFO */}
      <div className="flex-1">

        {/* USERNAME + BUTTON */}
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-semibold">{profile.username}</h2>

          {!isOwnProfile ? (
            <Link
              to={`/messages/${profile._id}`}
              className="border border-gray-500 px-4 py-1 rounded-md text-sm hover:bg-gray-800"
            >
              Message
            </Link>
          ) : (
            <button className="border border-gray-500 px-4 py-1 rounded-md text-sm">
              Edit Profile
            </button>
          )}
        </div>

        {/* COUNTS */}
        <div className="flex gap-10 mt-6">
          <p>
            <span className="font-semibold">0</span>{" "}
            <span className="text-gray-400">posts</span>
          </p>
          <p>
            <span className="font-semibold">{profile.followers.length}</span>{" "}
            <span className="text-gray-400">followers</span>
          </p>
          <p>
            <span className="font-semibold">{profile.following.length}</span>{" "}
            <span className="text-gray-400">following</span>
          </p>
        </div>

        {/* BIO */}
        <div className="mt-4">
          <p className="font-semibold">{profile.username}</p>
          <p className="text-gray-300 text-sm">{profile.bio || "No bio yet"}</p>
        </div>

      </div>
    </div>

    {/* DIVIDER */}
    <div className="border-t border-gray-800 mt-12"></div>

    {/* POSTS GRID */}
    <div className="mt-6 text-center text-gray-400">
      <p>No posts yet</p>
    </div>

  </div>
  );
};

export default Profile;
