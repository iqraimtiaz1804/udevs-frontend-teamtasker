import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { signOut, isAuthenticated } = useAuth();
  const { theme, toggle } = useTheme();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">TeamTasker</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {isAuthenticated && (
          <button
            onClick={signOut}
            className="px-4 py-1 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
