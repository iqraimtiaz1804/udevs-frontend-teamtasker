import React from "react";
import Sidebar from "../components/Sidebar";
import { sampleTeams } from "../utils/sampleData";
import TeamCard from "../components/TeamCard";

export default function Teams() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-4">Teams</h2>

        <div className="grid grid-cols-2 gap-4">
          {sampleTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </main>
    </div>
  );
}
