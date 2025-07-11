"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-16 text-sm text-gray-600 dark:text-gray-400">
      <p>&copy; {year} Sandra Hrevtsova. All rights reserved.</p>
      <p>
        Made with 💙 using Next.js, Tailwind CSS & MongoDB
      </p>
    </footer>
  );
}
