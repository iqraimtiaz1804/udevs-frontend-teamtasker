import React, { useEffect } from 'react';

export default function TaskModal({ task, onClose, onUpdate }) {
  if (!task) return null;

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="task-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
    >
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded p-6" onClick={(e)=>e.stopPropagation()}>
        <div className="flex justify-between items-start">
          <h2 id="task-title" className="text-lg font-bold">{task.title}</h2>
          <button aria-label="Close" onClick={onClose} className="text-gray-600">✕</button>
        </div>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{task.description}</p>
        <div className="mt-4">
          <label className="block text-sm">Status</label>
          <select defaultValue={task.status} onChange={(e)=>onUpdate(task.id, {status: e.target.value})} className="mt-1 p-2 border rounded">
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">Close</button>
        </div>
      </div>
    </div>
  );
}
