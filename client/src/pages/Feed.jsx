

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import StoryModal from "../components/StoryModal";
import CommentsModal from '../components/CommentsModal';

//import  icons from assets folder
import home from "../assets/home.png";
import blue_heart from "../assets/blue_heart.png";
import comment from "../assets/comment.png";

import save from "../assets/save.png";
import menu from "../assets/more.png";


import { Volume2, VolumeX } from "lucide-react";

import Suggestions from "../components/Suggestions";


import { useUser } from "@clerk/clerk-react";


const Feed = () => {

 const { user } = useUser();



  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

const [activeStory, setActiveStory] = useState(null);

const [openComments, setOpenComments] = useState(null);


// Video management
  const [activeVideoId, setActiveVideoId] = useState(null); // video currently in view
  const videoRefs = useRef({});

  //fetch from backend api's for both posts and stories

useEffect(() => {
  const fetchAll = async () => {
    try {
      const postsRes = await axios.get("http://localhost:5000/api/posts/feed");
      setPosts(postsRes.data);

      const storiesRes = await axios.get("http://localhost:5000/api/stories/all");
      setStories(storiesRes.data);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  fetchAll();
}, []);


// Intersection Observer for auto-play videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoId = entry.target.dataset.id;
          if (entry.isIntersecting) {
            setActiveVideoId(videoId);
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.6 } // 60% visible
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [posts]);



const handleLike = async (postId) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/posts/${postId}/like`,
      { userId: user.id }
    );

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? res.data : post
      )
    );
  } catch (err) {
    console.log(err);
  }
};











  return (
    

  <div className="text-white">
    {/* ---------------- STORIES SECTION ---------------- */}
<div className="flex gap-5 px-4 py-4 overflow-x-auto hide-scrollbar border-b-0 border-gray-800">
  {stories.length > 0 ? (
    stories.map((story) => (
      <div key={story._id} className="flex flex-col items-center">
        
        {/*story circle */}
        <div className="w-18.5 h-18.5 rounded-full p-[3px] flex items-center justify-center cursor-pointer"
     style={{ 
       background: 'linear-gradient(135deg, #5de0e6, #004aad)'
     }} onClick={() => setActiveStory(story)}>
  <img
    src={story.userImage}
    className="w-full h-full rounded-full object-cover"
    alt="userImage"
  />
</div>


        {/* Username */}
        <p className="text-white text-xs mt-1 w-16 text-center truncate">
          {story.username}
        </p>
      </div>
    ))
  ) : (
    <p className="text-gray-400 text-sm">Loading stories...</p>
  )}
</div>


    
      {/* ------------------ POSTS SECTION (You will add later) ------------------ */}
<div className="mt-7 w-[560px] max-w-full px-2 cursor-pointer">
        {posts.length > 0 ? (
          posts.map((post) => (
           
            <div key={post._id} className="mb-10 border-b-0 border-gray-800 pb-6">

              {/* ---- POST HEADER ---- */}
              {/* ---- POST HEADER ---- */}
<div className="flex items-center justify-between px-4">
  <div className="flex items-center gap-3">
    <img
      src={post.userImage}
      className="w-10 h-10 rounded-full object-cover"
      alt="profile"
    />

    {/* USERNAME + BIO */}
    <div className="flex flex-col leading-tight">
      <p className="font-semibold text-white">{post.userId}</p>

      {/* Bio below username */}
      <p className="text-xs text-gray-400 max-w-[200px]">
        {post.bio}
      </p>
    </div>
  </div>

  <img src={menu} className="w-5 cursor-pointer" alt="menu" />
</div>



 {/* ---- POST IMAGE & VIDEO ---- */}
               <div className="mt-3">
                {post.mediaType === "image" ? (
                  <img
                    src={post.mediaUrl}
                    className=" ml-6 w-[740px] max-h-[640px] object-cover mx-auto rounded-md"
                    alt="post"
                  />
                ) : (
                  <div className="relative w-full  mx-auto">
                    <video
                      ref={(el) => (videoRefs.current[post._id] = el)}
                      data-id={post._id}
                      src={post.mediaUrl}
                      className=" ml-6 w-full h-[540px] object-cover rounded-md bg-black"
                      autoPlay
                      loop
                      muted={activeVideoId !== post._id} // only active video sound
                      playsInline
                      onClick={() =>
                        setActiveVideoId(
                          activeVideoId === post._id ? null : post._id
                        )
                      }
                    />

                    
                    <div
                      onClick={() =>
                        setActiveVideoId(
                          activeVideoId === post._id ? null : post._id
                        )
                      }
                      className="absolute bottom-3 right-3 bg-black/60 p-2 rounded-full cursor-pointer"
                    >
                      {activeVideoId === post._id ? (
                        <Volume2 className="text-white" size={20} />
                      ) : (
                        <VolumeX className="text-white" size={20} />
                      )}
                    </div>
                  </div>
                )}
              </div>   













              {/* ---- ACTION ICONS ---- */}
               <div className=" flex justify-between items-center px-4 mt-3">
                <div className="flex items-center gap-4">
                 
<img
  src={blue_heart}
  alt="like"
  onClick={() => handleLike(post._id)}
  className={`w-6 cursor-pointer transition-transform duration-200
    
  `}
/>



                  <img src={comment} className="w-7 cursor-pointer" alt="comment" />
                  <img src={home} className="w-8 cursor-pointer" alt="share" />
                </div>
                <img src={save} className="w-6 cursor-pointer" alt="save" />
              </div>

              {/* ---- LIKES COUNT ---- */}
              <div className="px-4 mt-2 text-sm font-semibold">
                {post.likes.length} likes
              </div> 

   {/* ---- CAPTION (Instagram Style) ---- */}
<div className="px-4 mt-2 text-sm">
  <span className="font-semibold mr-2">{post.userId}</span>

  {post.caption}

  {/* show "... more" only if caption is long */}
  {post.caption.length > 80 && (
    <span className="text-gray-400 cursor-pointer"> ... more</span>
  )}
</div>
           


{/* VIEW ALL COMMENTS */}
{post.comments?.length > 0 && (
  <p
    className="px-4 text-sm text-gray-400 cursor-pointer"
    onClick={() => setOpenComments(post)}
  >
    View all {post.comments.length} comments
  </p>
)}




{/* ---- ADD COMMENT ---- */}
<div className="px-4 cursor-pointer mt-2 text-sm text-gray-400">
  Add a comment…
</div>


              {/* ---- TIME ---- */}
               <div className="px-4 mt-1 text-xs text-gray-400">
                {post.timeAgo}
              </div>
            </div> 
          ))
        ) : (
          <p className="text-gray-400 text-center mt-10">Loading posts...</p>
        )}
      </div>  




       {/* ------------------ STORY MODAL ------------------ */}
    <StoryModal
      story={activeStory}
      onClose={() => setActiveStory(null)}
    />
    <CommentsModal
  isOpen={openComments !== null}
  onClose={() => setOpenComments(null)}
  post={openComments}
/>




    </div>
  );
};

export default Feed;







//
//
//
//
//
