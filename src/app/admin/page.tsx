"use client";

import { useState } from "react";
import AboutEditor from "@/components/admin/AboutEditor";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  function handleLogin() {
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  }

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h1 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Admin Login</h1>
          <input
            type="password"
            className="border px-3 py-2 rounded w-full mb-4"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return <AboutEditor />;
}
