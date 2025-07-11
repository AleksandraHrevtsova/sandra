"use client";

import { useCallback } from "react";

export default function PrintResume() {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="text-center my-8">
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        📄 Print / Save as PDF
      </button>
    </div>
  );
}
