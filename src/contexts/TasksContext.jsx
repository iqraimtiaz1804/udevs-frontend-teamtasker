import React, { createContext, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { sampleTasks } from '../utils/sampleData';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tt_tasks', sampleTasks);

  const createTask = (task) => setTasks(prev => [task, ...prev]);
  const updateTask = (id, updates) => setTasks(prev => prev.map(t => t.id === id ? {...t, ...updates} : t));
  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  const stats = useMemo(() => {
    return tasks.reduce((acc, t) => {
      acc[t.status] = (acc[t.status] || 0) + 1;
      return acc;
    }, {});
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask, stats }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
