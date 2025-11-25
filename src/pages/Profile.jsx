import React from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>
      </main>
    </div>
  );
}
