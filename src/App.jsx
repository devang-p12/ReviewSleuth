import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./Pages/Home";
import Analyze from "./pages/Analyze";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import { account } from "./appwrite";
import "./index.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    account
      .get()
      .then((userInfo) => {
        setUser(userInfo);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/analyze"
        element={user ? <Analyze /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
    </Routes>
  );
}
