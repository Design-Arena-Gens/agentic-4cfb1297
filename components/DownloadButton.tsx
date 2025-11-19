 "use client";

import { useState } from "react";

export function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/cv");
      if (!response.ok) {
        throw new Error("Failed to generate CV");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Alexandra-Rivera-CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Unable to download the CV right now. Please try again shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="screen-only inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
      disabled={isLoading}
      aria-live="polite"
    >
      <span className="inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-slate-800 text-xs">
        ↓
      </span>
      {isLoading ? "Preparing PDF..." : "Download PDF"}
    </button>
  );
}
