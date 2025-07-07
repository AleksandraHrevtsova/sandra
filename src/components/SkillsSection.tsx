"use client";

import { useEffect, useState } from "react";

type Skill = {
  _id: string;
  category: string;
  items: string[];
};

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then(setSkills);
  }, []);

  if (!skills.length) return null;

  return (
    <section className="p-6 md:p-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div key={skill._id}>
            <h3 className="text-lg font-semibold mb-2">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-white dark:bg-gray-700 text-sm rounded-full border border-gray-300 dark:border-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
