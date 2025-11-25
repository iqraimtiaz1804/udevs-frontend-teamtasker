import React from 'react';

export default function TaskCard({ task, onOpen }) {
  return (
    <div
      tabIndex={0}
      role="button"
      onClick={() => onOpen(task)}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen(task); }}
      className="p-4 rounded-md shadow-sm bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{task.title}</h3>
        <span className="text-sm">{task.status}</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{task.description}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <span>{task.assignee}</span>
        <div>{task.tags?.slice(0,2).map(t=> <span key={t} className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t}</span>)}</div>
      </div>
    </div>
  );
}
