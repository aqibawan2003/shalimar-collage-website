"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const moments = [
  { emoji: "🏆", title: "Annual Prize Ceremony", year: "2025", color: "#12305A" },
  { emoji: "⚽", title: "Sports Week Championship", year: "2025", color: "#2E7D4F" },
  { emoji: "🎭", title: "Cultural Festival", year: "2025", color: "#C9A227" },
  { emoji: "🔬", title: "Science Exhibition", year: "2024", color: "#7c3aed" },
  { emoji: "📚", title: "Convocation Ceremony", year: "2024", color: "#b91c1c" },
  { emoji: "🎨", title: "Art & Craft Show", year: "2024", color: "#0369a1" },
  { emoji: "🏅", title: "Inter-College Debate", year: "2024", color: "#064e3b" },
  { emoji: "🎵", title: "Naat Competition", year: "2024", color: "#92400e" },
];

export default function ProudMoments() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#12305A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Memories & Achievements
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Proud Moments
          </h2>
          <p className="text-blue-200 text-sm max-w-xl mx-auto">
            Celebrating milestones, achievements, and the vibrant campus life of Shalimar College.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {moments.map((m, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              style={{ background: m.color, minHeight: "140px" }}
            >
              <div className="h-full flex flex-col items-center justify-center p-4 text-center text-white">
                <div className="text-5xl mb-2">{m.emoji}</div>
                <div className="text-sm font-semibold">{m.title}</div>
                <div className="text-xs opacity-70 mt-1">{m.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            style={{ backgroundColor: "#C9A227", color: "#12305A" }}
            className="inline-block font-bold text-sm px-8 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative rounded-2xl p-12 text-center"
            style={{ background: moments[lightbox].color, maxWidth: "400px", width: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="text-8xl mb-4">{moments[lightbox].emoji}</div>
            <h3 className="text-white text-xl font-bold mb-2">{moments[lightbox].title}</h3>
            <p className="text-white/70 text-sm">{moments[lightbox].year} — Govt. Shalimar Graduate College</p>
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={() => setLightbox((l) => ((l ?? 0) - 1 + moments.length) % moments.length)}
                className="text-white hover:text-yellow-400"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => setLightbox((l) => ((l ?? 0) + 1) % moments.length)}
                className="text-white hover:text-yellow-400"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
