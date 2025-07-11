"use client";

import { useEffect, useState } from "react";

type Education = {
  _id: string;
  degree: string;
  institution: string;
  location: string;
  from: string;
  to: string;
};

export default function EducationSection() {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    fetch("/api/education")
      .then((res) => res.json())
      .then(setEducation);
  }, []);

  if (!education.length) return null;

  return (
    <section id='education' className="p-6 md:p-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu._id}>
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm">{edu.institution}, {edu.location}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{edu.from} – {edu.to}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
