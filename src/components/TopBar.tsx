"use client";
import { useState, useEffect } from "react";
import { Share2, X, Link2, Send } from "lucide-react";

export default function TopBar() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(now.toLocaleDateString("en-PK", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    }));
  }, []);

  return (
    <div style={{ backgroundColor: "#12305A" }} className="text-white py-2 px-4 text-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="hidden sm:block font-medium">
          Welcome to Govt. Shalimar Graduate College, Lahore
          {date && <span className="text-gray-300 ml-2">| {date}</span>}
        </span>
        <div className="flex items-center gap-3 ml-auto">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Facebook">
            <Share2 size={13} />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="X (Twitter)">
            <X size={13} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Instagram">
            <Link2 size={13} />
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Telegram">
            <Send size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
