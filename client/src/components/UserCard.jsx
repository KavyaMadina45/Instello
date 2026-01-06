// const UserCard = ({ user }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: "12px",
//         padding: "10px",
//         cursor: "pointer",
//       }}
//     >
//       {/* Profile Image */}
//       <img
//         src={user.image}
//         alt={user.username}
//         style={{
//           width: "50px",
//           height: "50px",
//           borderRadius: "50%",
//           objectFit: "cover",
//           border:"1px solid cyan"
//         }}
//       />

//       {/* User Info */}
//       <div>
//         <div style={{ fontWeight: "600" }}>{user.username}</div>
//         <div style={{ fontSize: "14px", color: "white", fontWeight:"semibold",marginBottom:"10px" }}>{user.name}</div>
//         <div style={{ fontSize: "12px", color: "#999" }}>
//           {user.instelloId}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/user/${user.username}`)}
      className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-900 rounded-lg"
    >
      <img
        src={user.image}
        className="w-11 h-11 border-cyan-300 rounded-full"
      />

      <div>
        <div className="font-semibold">{user.username}</div>
        <div className="text-sm text-gray-400">{user.name}</div>
        <div className="text-xs text-gray-500">{user.instelloId}</div>
      </div>
    </div>
  );
};

export default UserCard;
