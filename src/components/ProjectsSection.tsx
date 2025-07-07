"use client";

import { useEffect, useState } from "react";

type Project = {
  _id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  if (!projects.length) return null;

  return (
    <section className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project._id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800"
          >
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            {project.technologies.length > 0 && (
              <ul className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-700 text-xs rounded-full text-indigo-800 dark:text-white"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 underline"
              >
                View project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
