import React from "react";

export default function FilterBar({ status, setStatus }) {
  return (
    <div className="flex gap-3 my-4">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Status</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}
