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
  startWorkingDate: string;
  summary: string;
};

export default function AboutSection() {
  const [about, setAbout] = useState<About | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [experienceYears, setExperienceYears] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then(setAbout);
  }, []);
  
  useEffect(() => {
    if (!about?.startWorkingDate || !about?.birthdate) return;
    const calculatedAge = calculateAge(about.birthdate);
    setAge(calculatedAge);
    setExperienceYears(calculateExperience(about?.startWorkingDate));
  }, [about]);

  if (!about) return <div>Loading...</div>;

  return (
    <section id='about' className="p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {about.photo && (
          <Image
            width={240}
            height={240}
            priority={true}
            src={about.photo}
            alt={about.name}
            className="w-60 h-60 rounded-full object-cover border-2 border-indigo-400"
          />
        )}
        <div>
          <h1 className="text-3xl font-bold mb-1">{about.name}</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">{about.title}</h2>
          <p className="mb-1">📍 {about.location}</p>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a href={`tel:${about.phone}`} className="text-blue-600 hover:underline">
              {about.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href={`mailto:${about.email}`} className="text-blue-600 hover:underline">
              {about.email}
            </a>
          </div>
          <p className="mb-1">🎂 {about.birthdate} {age ? `(${age} y.o.)` : ""}</p>          
          <div className="flex items-center gap-2">
            <span>🔗</span>
            <a href={about.linkedin} className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </div>
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
