import React from "react";
import { account } from "../appwrite";

export default function Login() {
  const handleLogin = () => {
    account.createOAuth2Session(
      "google",
      window.location.origin, // success redirect
      window.location.origin + "/login" // failure redirect
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Login to continue</p>

        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-2 bg-red- hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5h-2.1v-.1H24v7h11.3c-1.6 4.3-5.7 7.3-10.6 7.3-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1 7.3 2.8l5-5C33.3 7.1 28.9 5 24 5 12.9 5 4 13.9 4 25s8.9 20 20 20c11 0 20-9 20-20 0-1.5-.2-2.9-.4-4.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l5.7 4.2C13.4 15.3 18.3 12 24 12c2.8 0 5.4 1 7.3 2.8l5-5C33.3 7.1 28.9 5 24 5c-7.7 0-14.3 4.3-17.7 10.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 45c5.4 0 10.3-2 14-5.3l-6.4-5.3c-2 1.4-4.5 2.2-7.6 2.2-4.8 0-8.9-3-10.5-7.3l-6.5 5c3.3 6.4 9.9 10.7 17 10.7z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5h-2.1v-.1H24v7h11.3c-0.7 1.9-1.9 3.6-3.4 4.9l6.4 5c3.6-3.3 5.7-8.1 5.7-13.3 0-1.5-.2-2.9-.4-4.5z"
            />
          </svg>
          Sign in with Google
        </button>

        <p className="mt-6 text-sm text-gray-400">
          By continuing, you agree to our Terms of Service & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
