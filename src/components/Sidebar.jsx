import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-md hover:bg-indigo-100 dark:hover:bg-gray-700 ${
      pathname === path ? "bg-indigo-200 dark:bg-gray-700 font-semibold" : ""
    }`;

  return (
    <aside className="w-52 bg-gray-100 dark:bg-gray-800 min-h-screen p-4">
      <nav className="flex flex-col gap-2">
        <Link className={linkClass("/")} to="/">Dashboard</Link>
        <Link className={linkClass("/teams")} to="/teams">Teams</Link>
        <Link className={linkClass("/tasks")} to="/tasks">Tasks</Link>
        <Link className={linkClass("/profile")} to="/profile">Profile</Link>
      </nav>
    </aside>
  );
}
