import React from "react";

export default function TeamCard({ team }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-md">
      <h3 className="text-lg font-semibold">{team.name}</h3>
      <p className="text-sm text-gray-500">{team.members.length} members</p>
    </div>
  );
}
