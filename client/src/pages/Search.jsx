import { useState } from "react";
import users from "../data/users";
import UserCard from "../components/UserCard";

const Search = () => {
  const [query, setQuery] = useState("");

  const filteredUsers = users
    .filter(
      (user) =>
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.name.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => a.username.localeCompare(b.username));

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "15px",
          color:"white",
        }}
      />

      {/* Search Results */}
      {query &&
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
    </div>
  );
};

export default Search;
