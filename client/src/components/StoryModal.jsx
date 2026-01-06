

import React from "react";


const StoryModal = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Top bar with profile and username */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <img
          src={story.userImage}
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <p className="text-white font-semibold">{story.username}</p>
      </div>

      {/* Story content */}
      <div className="flex justify-center items-center max-h-[80vh]">
        {story.contentType === "image" ? (
          <img
            src={story.storyContent}
            alt="story"
            className="object-contain max-h-[80vh]"
          />
        ) : (
          <video
            src={story.storyContent}
            controls
            autoPlay
            className="object-contain max-h-[80vh]"
          />
        )}
      </div>
    </div>
  );
};

export default StoryModal;

