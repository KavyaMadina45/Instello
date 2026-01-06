import { useParams } from "react-router-dom";
import users from "../data/users";

const UserProfile = () => {
  const { username } = useParams();

  const user = users.find((u) => u.username === username);

  if (!user) {
    return <div className="p-6 text-white">User not found</div>;
  }

  // Dummy stats
  // eslint-disable-next-line react-hooks/purity
  const followers = Math.floor(Math.random() * 10000) + 100;
  // eslint-disable-next-line react-hooks/purity
  const following = Math.floor(Math.random() * 1000) + 50;
  // eslint-disable-next-line react-hooks/purity
  const posts = Math.floor(Math.random() * 30) + 6;

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center gap-10">
        <img
          src={user.image}
          className="w-32 h-32 rounded-full object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold">{user.username}</h2>
          <p className="text-gray-400">{user.name}</p>
          <p className="text-sm text-gray-500">{user.instelloId}</p>

          <div className="flex gap-6 mt-4">
            <span><b>{posts}</b> posts</span>
            <span><b>{followers}</b> followers</span>
            <span><b>{following}</b> following</span>
          </div>

          <button className="mt-4 px-6 py-1 bg-sky-500 rounded-md cursor-pointer">
            Follow
          </button>
        </div>
      </div>

      {/* POSTS GRID */}
      <div className="grid grid-cols-3 gap-2 mt-8">
        {Array.from({ length: posts }).map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/300?random=${username}${i}`}
            

            className="w-full h-32 object-cover rounded-md cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
