import React from "react";

export default function MemberList({ members }) {
  return (
    <ul className="mt-2">
      {members.map((m, i) => (
        <li key={i} className="p-2 border-b dark:border-gray-700">
          {m}
        </li>
      ))}
    </ul>
  );
}
