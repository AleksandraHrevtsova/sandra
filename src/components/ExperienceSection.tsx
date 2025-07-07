"use client";

import { useEffect, useState } from "react";

type Experience = {
  _id: string;
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  description: string[];
};

export default function ExperienceSection() {
  const [experience, setExperience] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then(setExperience);
  }, []);

  if (!experience.length) return null;

  return (
    <section className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job._id} className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-xl font-semibold">{job.title} — {job.company}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              {job.from} – {job.to}
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {job.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
