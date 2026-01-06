import React from "react";

import message from '../assets/message.png';
import { useUser } from "@clerk/clerk-react";

import { SignOutButton } from "@clerk/clerk-react";

const Suggestions = () => {

   const { user, isLoaded } = useUser();
  const suggestions = [
    {
      id: 1,
      username: "vaishu.m",
      name: "Vaishu",
      followedBy: "suma_45 and others",
      img: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765293635/girldp_yjy4vf.png"
    },
    {
      id: 2,
      username: "rajiv_143",
      name: "Rajiv",
      followedBy: "raki_m6 and others",
      img:"https://res.cloudinary.com/dwc7zolv7/image/upload/v1765292595/dp3_xia9tc.jpg",
    },
    {
      id: 3,
      username: "kavya_606",
      name: "Kavya",
      followedBy: "jyo_121 and others",
      img: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765293869/girldp2_dps1dj.png"
    },
    {
      id: 4,
      username: "sudheer@345",
      name: "Sudheer",
      followedBy: "sasi_g1 and others",
      img: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765294488/dp4_goybem.jpg"
    },
    {
      id: 5,
      username: "shekar@junnu",
      name: "Shekar",
      followedBy: "sasireka_12 and others",
      img: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765295721/dp5_rzlpmk.jpg"
    },
    {
      id: 6,
      username: "kamala@121",
      name: "Kamala",
      followedBy: "kumar_s1 and others",
      img: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765295708/dp6_yp9cat.jpg"
    },
  ];

if (!isLoaded || !user) return null;


  return (
    <div className="hidden lg:block w-[320px] text-white px-4 mt-6">

      {/*profile at suggestions top side with emailid of real user using clerk */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={user.imageUrl}
            className="w-12 h-12 rounded-full object-cover"
            alt="profile"
          />

          <div>
            <p className="text-sm font-semibold">
              {user.username || user.firstName || "User"}
            </p>

            <p className="text-gray-400 text-xs">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
      </div>
      <div className="flex flex-col items-end gap-1">
  <p className="text-blue-400 text-xs cursor-pointer">Switch</p>

  <SignOutButton>
    <button className="text-red-400 text-xs hover:underline">Logout</button>
  </SignOutButton>
</div>

      </div>



      {/* --------- SUGGESTED FOR YOU --------- */}
      <div className="flex justify-between items-center mt-6 mb-3">
        <p className="text-gray-400 text-sm">Suggested for you</p>
        <p className="text-white text-xs cursor-pointer">See All</p>
      </div>

      {/* --------- SUGGESTIONS LIST --------- */}
      <div className="flex flex-col gap-4 cursor-pointer">
        {suggestions.map((user) => (
          <div key={user.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={user.img}
                className="w-10 h-10 rounded-full"
                alt="profile"
              />

              <div>
                <p className="text-sm font-semibold">{user.username}</p>
                <p className="text-gray-500 text-xs">Followed by {user.followedBy}</p>
              </div>
            </div>

            <p className="text-blue-400 text-xs cursor-pointer">Follow</p>
          </div>
        ))}
      </div>

      {/* --------- FOOTER LINKS --------- */}
      <div className="text-[10px] text-gray-500 mt-6 leading-4">
        About · Help · Press · API · Jobs · Privacy · Terms ·
        Locations · Meta Verified
      </div>

<div className="mt-15 ml-12 bg-gray-800 px-5 py-2 rounded-full flex items-center justify-between w-[180px] cursor-pointer">
  
  {/* Left Icon */}
  <img 
    src={message} 
    alt="message" 
    className="h-5 w-5 object-contain"
  />

  {/* Center Text */}
  <p className="text-sm text-white font-medium">
    Messages
  </p>

  {/* Right Group Icon (BIGGER) */}
  

</div>


      
    </div>
  );
};

export default Suggestions;
