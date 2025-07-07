"use client";

import { useEffect, useState } from "react";

type About = {
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

export default function AboutSection() {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then(setAbout);
  }, []);

  if (!about) return <div>Loading...</div>;

  return (
    <section className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-2">{about.name}</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">{about.title}</h2>
      <p className="mb-2">📍 {about.location}</p>
      <p className="mb-2">📞 {about.phone}</p>
      <p className="mb-2">📧 {about.email}</p>
      <p className="mb-2">🔗 LinkedIn: {about.linkedin}</p>
      <p className="mb-2">🛂 Nationality: {about.nationality}</p>
      <p className="mb-2">🚗 Driving License: {about.drivingLicense}</p>
      <p className="mt-4">{about.summary}</p>
    </section>
  );
}
