import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-gray-800 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded">Sign In</button>
      </form>
    </div>
  );
}
