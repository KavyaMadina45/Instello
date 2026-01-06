export default function PostCard({ post }) {
  return (
    <div className="mb-2 break-inside-avoid overflow-hidden rounded-xl">
      
      {post.type === "image" && (
        <img
          src={post.src}
          className="w-full object-cover"
        />
      )}

      {post.type === "video" && (
        <video
          src={post.src}
          muted
          loop
          autoPlay
          className="w-full object-cover"
        />
      )}

    </div>
  );
}
