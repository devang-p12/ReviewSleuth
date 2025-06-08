import { account } from "../appwrite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    account.get()
      .then(setUser)
      .catch(() => navigate("/login"));
  }, []);

  const handleLogout = async () => {
  try {
    await account.deleteSession("current");
    setUser(null); // optional: clear user from state
    navigate("/login", { replace: true }); // ✅ redirects to login page
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-200">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-purple-600">Sentiment Analyzer</h1>
        <div className="flex items-center gap-4">
          {user && (
            <>
              <span className="text-gray-700 font-medium">{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm shadow-sm transition-all"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 text-center mt-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Analyze Product Reviews <br /> with AI-Powered Insights
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Paste or upload product reviews and find out if the sentiment is positive or negative using machine learning.
        </p>
        <button
          onClick={() => navigate("/analyze")}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl text-lg shadow-md transition-all"
        >
          Start Analyzing
        </button>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Built with 💜 using Appwrite & React
      </footer>
    </div>
  );
}
