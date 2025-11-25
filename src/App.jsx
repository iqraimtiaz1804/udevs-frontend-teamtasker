import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Teams from './pages/Teams';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/teams" element={<ProtectedRoute><Teams/></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks/></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      </Routes>
    </div>
  );
}
