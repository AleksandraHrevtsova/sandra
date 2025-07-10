"use client";
import { useEffect, useState } from "react";
import { calculateAge, calculateExperience } from "@/lib/dateUtils";
import Image from "next/image";

type About = {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  nationality: string;
  drivingLicense: string;
  birthdate?: string;
  photo?: string;
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

  const age = about.birthdate ? calculateAge(about.birthdate) : null;
  const experienceYears = calculateExperience("2019-08-15"); // дата начала обучения или первого коммерческого опыта

  return (
    <section className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {about.photo && (
          <Image
            width={240}
            height={240}
            src={about.photo}
            alt={about.name}
            className="w-60 h-60 rounded-full object-cover border-2 border-indigo-400"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold mb-1">{about.name}</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">{about.title}</h2>
          <p className="mb-1">📍 {about.location}</p>
          <p className="mb-1">📞 {about.phone}</p>
          <a href="mailto:{about.email}">📧 {about.email}</a>
          {/* <p className="mb-1">📧 {about.email}</p> */}
          <p className="mb-1">🎂 {about.birthdate} {age ? `(${age} y.o.)` : ""}</p>          <p className="mb-1">🔗 LinkedIn: {about.linkedin}</p>
          <p className="mb-1">🛂 Nationality: {about.nationality}</p>
          <p className="mb-1">🚗 Driving License: {about.drivingLicense}</p>
        </div>
      </div>
      <p className="mt-6">
        {about.summary.replace("{experience}", `${experienceYears}`)}
      </p>
    </section>
  );
}
