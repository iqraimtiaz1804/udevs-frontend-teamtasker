import React from "react";
import Sidebar from "../components/Sidebar";
import { useTasks } from "../contexts/TasksContext";

export default function Dashboard() {
  const { stats } = useTasks();

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        <div className="grid grid-cols-3 gap-4">
          {Object.entries(stats).map(([key, val]) => (
            <div key={key} className="p-4 bg-white dark:bg-gray-800 shadow rounded">
              <h3 className="font-semibold">{key}</h3>
              <p className="text-xl">{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
