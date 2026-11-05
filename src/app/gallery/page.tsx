"use client";
import { useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const albums = [
  {
    title: "Annual Prize Ceremony 2025",
    count: 24,
    items: [
      { emoji: "🏆", label: "Trophy Presentation", color: "#12305A" },
      { emoji: "🎓", label: "Medal Ceremony", color: "#1e4d8c" },
      { emoji: "👨‍🎓", label: "Best Student Award", color: "#12305A" },
      { emoji: "👏", label: "Applause Moment", color: "#1a3d6e" },
    ],
  },
  {
    title: "Sports Week 2025",
    count: 36,
    items: [
      { emoji: "⚽", label: "Football Match", color: "#2E7D4F" },
      { emoji: "🏏", label: "Cricket Tournament", color: "#1a5c38" },
      { emoji: "🏃", label: "Athletics", color: "#2E7D4F" },
      { emoji: "🏀", label: "Basketball", color: "#1a5c38" },
    ],
  },
  {
    title: "Shah Hussain Cultural Festival 2026",
    count: 48,
    items: [
      { emoji: "🎭", label: "Drama Performance", color: "#C9A227" },
      { emoji: "🎵", label: "Naat Competition", color: "#a07d10" },
      { emoji: "🎨", label: "Art Exhibition", color: "#C9A227" },
      { emoji: "📜", label: "Calligraphy Show", color: "#a07d10" },
    ],
  },
  {
    title: "Science Exhibition 2024",
    count: 20,
    items: [
      { emoji: "🔬", label: "Lab Experiments", color: "#7c3aed" },
      { emoji: "💡", label: "Innovation Project", color: "#6d28d9" },
      { emoji: "🤖", label: "Tech Display", color: "#7c3aed" },
      { emoji: "🧪", label: "Chemistry Demo", color: "#6d28d9" },
    ],
  },
  {
    title: "Convocation 2024",
    count: 32,
    items: [
      { emoji: "🎓", label: "Degree Award", color: "#b91c1c" },
      { emoji: "📜", label: "Certificate Distribution", color: "#991b1b" },
      { emoji: "👨‍👩‍👧‍👦", label: "Family Gathering", color: "#b91c1c" },
      { emoji: "🥂", label: "Celebration Moment", color: "#991b1b" },
    ],
  },
  {
    title: "Campus Life",
    count: 60,
    items: [
      { emoji: "📚", label: "Library Study", color: "#0369a1" },
      { emoji: "🧑‍🤝‍🧑", label: "Friends & Classmates", color: "#0284c7" },
      { emoji: "🌳", label: "Campus Gardens", color: "#0369a1" },
      { emoji: "☕", label: "College Canteen", color: "#0284c7" },
    ],
  },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ album: number; item: number } | null>(null);

  const currentAlbum = lightbox !== null ? albums[lightbox.album] : null;
  const currentItem = currentAlbum ? currentAlbum.items[lightbox!.item] : null;

  return (
    <>
      <div className="relative py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Memories & Moments
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Photo Gallery
          </h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> Gallery
          </p>
        </div>
      </div>

      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-14">
            {albums.map((album, ai) => (
              <div key={ai}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2
                      className="text-xl font-bold"
                      style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
                    >
                      {album.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">{album.count} photos</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {album.items.map((item, ii) => (
                    <div
                      key={ii}
                      onClick={() => setLightbox({ album: ai, item: ii })}
                      className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
                      style={{ background: item.color, height: "160px" }}
                    >
                      <div className="h-full flex flex-col items-center justify-center text-white text-center p-4">
                        <div className="text-5xl mb-2">{item.emoji}</div>
                        <div className="text-xs font-medium">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && currentItem && currentAlbum && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative rounded-2xl p-10 text-center max-w-sm w-11/12"
            style={{ background: currentItem.color }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/60 hover:text-white">
              <X size={22} />
            </button>
            <div className="text-8xl mb-4">{currentItem.emoji}</div>
            <h3 className="text-white font-bold text-lg mb-1">{currentItem.label}</h3>
            <p className="text-white/60 text-sm">{currentAlbum.title}</p>
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={() =>
                  setLightbox(l => ({
                    album: l!.album,
                    item: (l!.item - 1 + currentAlbum.items.length) % currentAlbum.items.length,
                  }))
                }
                className="text-white hover:text-yellow-400"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() =>
                  setLightbox(l => ({
                    album: l!.album,
                    item: (l!.item + 1) % currentAlbum.items.length,
                  }))
                }
                className="text-white hover:text-yellow-400"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
