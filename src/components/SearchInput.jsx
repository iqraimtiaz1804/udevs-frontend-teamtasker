import React from 'react';

export default function SearchInput({ value, onChange, placeholder='Search tasks...' }) {
  return (
    <input
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Search tasks"
    />
  );
}
