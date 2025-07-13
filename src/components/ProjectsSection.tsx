"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  _id: string;
  name: string;
  overview?: string;
  keyFeatures?: string[];
  clientApps?: { web?: string; mobile?: string[] };
  backend?: string[];
  dataStorage?: string[];
  security?: string[];
  adminPanel?: { legacy?: string; modern?: string };
  integrations?: string[];
  metrics?: string;
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
      <div className="space-y-12">
        {projects.map((p) => (
          <div key={p._id} className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Case
                </a>
              )}
            </div>

            {/* Image */}
            {p.image && (
              <Image
                src={p.image!}
                alt={p.name}
                width={800}        // исходная ширина изображения в пикселях
                height={450}       // исходная высота изображения в пикселях
                className="object-contain rounded-lg max-h-60 w-auto h-auto"
                priority={true} 
              />
              // <img
              //   src={p.image}
              //   alt={p.name}
              //   width={'200px'}
              //   className="w-full max-h-60 object-contain rounded-lg"
              // />
            )}

            {/* Overview */}
            {p.overview && <p className="italic">{p.overview}</p>}

            {/* Grid of optional sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Key Features */}
              {p.keyFeatures && p.keyFeatures.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {p.keyFeatures.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Client Apps */}
              {p.clientApps && (p.clientApps.web || p.clientApps.mobile?.length) && (
                <div>
                  <h4 className="font-semibold mb-2">Client Apps</h4>
                  {p.clientApps.web && (
                    <p>
                      <strong>Web:</strong>{" "}
                      <a
                        href={p.clientApps.web}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.clientApps.web}
                      </a>
                    </p>
                  )}
                  {p.clientApps.mobile && p.clientApps.mobile.length > 0 && (
                    <>
                      <p className="mt-2"><strong>Mobile:</strong></p>
                      <ul className="list-disc list-inside ml-4">
                        {p.clientApps.mobile.map((url, i) => (
                          <li key={i}>
                            <a
                              href={url}
                              className="text-blue-600 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {url}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              {/* Backend */}
              {p.backend && p.backend.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Backend & Architecture</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {p.backend.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Data Storage */}
              {p.dataStorage && p.dataStorage.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Data Storage</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {p.dataStorage.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Security */}
              {p.security && p.security.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Security & Compliance</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {p.security.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Admin Panel */}
              {p.adminPanel && (p.adminPanel.legacy || p.adminPanel.modern) && (
                <div>
                  <h4 className="font-semibold mb-2">Admin Panel</h4>
                  {p.adminPanel.legacy && (
                    <p><strong>Legacy:</strong> {p.adminPanel.legacy}</p>
                  )}
                  {p.adminPanel.modern && (
                    <p><strong>Modern:</strong> {p.adminPanel.modern}</p>
                  )}
                </div>
              )}

              {/* Integrations */}
              {p.integrations && p.integrations.length > 0 && (
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-2">Integrations & Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {p.integrations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Metrics */}
            {p.metrics && (
              <p className="mt-4 font-semibold">Metrics: {p.metrics}</p>
            )}

            <hr className="my-6 border-gray-200 dark:border-gray-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
