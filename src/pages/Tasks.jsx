import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useTasks } from "../contexts/TasksContext";
import TaskCard from "../components/TaskCard";
import SearchInput from "../components/SearchInput";
import useDebouncedSearch from "../hooks/useDebouncedSearch";
import TaskModal from "../components/TaskModal";
import FilterBar from "../components/FilterBar";

export default function Tasks() {
  const { tasks, updateTask } = useTasks();
  const [search, setSearch] = useState("");
  const debounced = useDebouncedSearch(search);
  const [status, setStatus] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = tasks.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(debounced.toLowerCase());
    const matchesStatus = status ? t.status === status : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>

        <SearchInput value={search} onChange={setSearch} />
        <FilterBar status={status} setStatus={setStatus} />

        <div className="grid grid-cols-2 gap-4 mt-4">
          {filtered.map((task) => (
            <TaskCard key={task.id} task={task} onOpen={setSelected} />
          ))}
        </div>

        <TaskModal
          task={selected}
          onClose={() => setSelected(null)}
          onUpdate={updateTask}
        />
      </main>
    </div>
  );
}
