// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { account } from "../appwrite";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    account.get().then(setUser).catch(console.error);
  }, []);

  const handleLogout = () => {
    account.deleteSession("current").then(() => {
      window.location.href = "/login"; // redirect to login after logout
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Profile Page</h2>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
