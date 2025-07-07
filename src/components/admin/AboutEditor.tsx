"use client";

import { useEffect, useState } from "react";

type About = {
  _id: string;
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  nationality: string;
  drivingLicense: string;
  summary: string;
};

export default function AboutEditor() {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then(setAbout);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!about) return;
    setAbout({ ...about, [e.target.name]: e.target.value });
  }

  async function handleSave() {
    const res = await fetch("/api/about", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(about),
    });
    if (res.ok) {
      alert("Saved successfully!");
    } else {
      alert("Error saving data.");
    }
  }

  if (!about) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">Edit About Info</h1>
      {Object.entries(about).map(([key, value]) =>
        key === "_id" ? null : (
          <div key={key} className="space-y-1">
            <label className="block font-medium capitalize">{key}</label>
            {key === "summary" ? (
              <textarea
                className="w-full border rounded p-2"
                name={key}
                value={value}
                onChange={handleChange}
              />
            ) : (
              <input
                className="w-full border rounded p-2"
                name={key}
                value={value}
                onChange={handleChange}
              />
            )}
          </div>
        )
      )}
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        Save
      </button>
    </div>
  );
}
