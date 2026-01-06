import React from "react";

const CommentsModal = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">

      <div className="bg-[#121212] w-[90%] h-[90vh] max-w-4xl rounded-xl overflow-hidden flex">

        


        {/* LEFT SIDE — POST IMAGE/VIDEO */}
        <div className="w-1/2 bg-black flex items-center justify-center">
          {post.mediaType === "image" ? (
            <img src={post.mediaUrl} className="w-full h-full object-contain" />
          ) : (
            <video
              src={post.mediaUrl}
              controls
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* RIGHT SIDE — COMMENTS */}
        <div className="w-1/2 flex flex-col bg-black">

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img
                src={post.userProfilePic}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="font-semibold">{post.postedBy?.username}</p>
            </div>

            <button onClick={onClose} className="text-xl">✖</button>
          </div>

          {/* COMMENTS LIST */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
            {post.comments?.map((c, i) => (
              <div key={i} className="text-sm">
                <span className="font-semibold mr-2">{c.username}</span>
                {c.text}
              </div>
            ))}
          </div>

          {/* ADD COMMENT */}
          <div className="border-t border-gray-800 p-3 flex items-center gap-3">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button className="text-blue-500 font-semibold">Post</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CommentsModal;
