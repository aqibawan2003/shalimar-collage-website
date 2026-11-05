"use client";
import { useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy, faGraduationCap, faMedal, faHandsClapping,
  faFutbol, faBaseballBatBall, faPersonRunning, faBasketball,
  faMasksTheater, faMusic, faPalette, faScroll,
  faMicroscope, faLightbulb, faRobot, faFlask,
  faAward, faBook, faPeopleGroup, faMugHot,
  faUserGroup, faTree,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type GalleryItem = { icon: IconDefinition; label: string; color: string };
type Album = { title: string; count: number; items: GalleryItem[] };

const albums: Album[] = [
  {
    title: "Annual Prize Ceremony 2025", count: 24,
    items: [
      { icon: faTrophy,          label: "Trophy Presentation",  color: "#12305A" },
      { icon: faMedal,           label: "Medal Ceremony",       color: "#1e4d8c" },
      { icon: faGraduationCap,   label: "Best Student Award",   color: "#12305A" },
      { icon: faHandsClapping,   label: "Applause Moment",      color: "#1a3d6e" },
    ],
  },
  {
    title: "Sports Week 2025", count: 36,
    items: [
      { icon: faFutbol,          label: "Football Match",        color: "#2E7D4F" },
      { icon: faBaseballBatBall, label: "Cricket Tournament",    color: "#1a5c38" },
      { icon: faPersonRunning,   label: "Athletics",             color: "#2E7D4F" },
      { icon: faBasketball,      label: "Basketball",            color: "#1a5c38" },
    ],
  },
  {
    title: "Shah Hussain Cultural Festival 2026", count: 48,
    items: [
      { icon: faMasksTheater,    label: "Drama Performance",     color: "#C9A227" },
      { icon: faMusic,           label: "Naat Competition",      color: "#a07d10" },
      { icon: faPalette,         label: "Art Exhibition",        color: "#C9A227" },
      { icon: faScroll,          label: "Calligraphy Show",      color: "#a07d10" },
    ],
  },
  {
    title: "Science Exhibition 2024", count: 20,
    items: [
      { icon: faMicroscope,      label: "Lab Experiments",       color: "#7c3aed" },
      { icon: faLightbulb,       label: "Innovation Project",    color: "#6d28d9" },
      { icon: faRobot,           label: "Tech Display",          color: "#7c3aed" },
      { icon: faFlask,           label: "Chemistry Demo",        color: "#6d28d9" },
    ],
  },
  {
    title: "Convocation 2024", count: 32,
    items: [
      { icon: faGraduationCap,   label: "Degree Award",          color: "#b91c1c" },
      { icon: faAward,           label: "Certificate Distribution", color: "#991b1b" },
      { icon: faPeopleGroup,     label: "Family Gathering",      color: "#b91c1c" },
      { icon: faMedal,           label: "Celebration Moment",    color: "#991b1b" },
    ],
  },
  {
    title: "Campus Life", count: 60,
    items: [
      { icon: faBook,            label: "Library Study",         color: "#0369a1" },
      { icon: faUserGroup,       label: "Friends & Classmates",  color: "#0284c7" },
      { icon: faTree,            label: "Campus Gardens",        color: "#0369a1" },
      { icon: faMugHot,          label: "College Canteen",       color: "#0284c7" },
    ],
  },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ album: number; item: number } | null>(null);

  const currentAlbum = lightbox !== null ? albums[lightbox.album] : null;
  const currentItem  = currentAlbum ? currentAlbum.items[lightbox!.item] : null;

  return (
    <>
      <div className="relative py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>Memories &amp; Moments</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Photo Gallery</h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> Gallery
          </p>
        </div>
      </div>

      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto space-y-14">
          {albums.map((album, ai) => (
            <div key={ai}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>{album.title}</h2>
                  <p className="text-xs text-gray-400 mt-1">{album.count} photos</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {album.items.map((item, ii) => (
                  <div key={ii} onClick={() => setLightbox({ album: ai, item: ii })}
                    className="rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
                    style={{ background: item.color, height: "160px" }}>
                    <div className="h-full flex flex-col items-center justify-center text-white text-center p-4">
                      <FontAwesomeIcon icon={item.icon} style={{ width: 44, height: 44, marginBottom: 10 }} />
                      <div className="text-xs font-medium">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox !== null && currentItem && currentAlbum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}>
          <div className="relative rounded-2xl p-10 text-center max-w-sm w-11/12"
            style={{ background: currentItem.color }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/60 hover:text-white">
              <X size={22} />
            </button>
            <FontAwesomeIcon icon={currentItem.icon} className="text-white mb-4" style={{ width: 72, height: 72 }} />
            <h3 className="text-white font-bold text-lg mb-1">{currentItem.label}</h3>
            <p className="text-white/60 text-sm">{currentAlbum.title}</p>
            <div className="flex justify-center gap-6 mt-6">
              <button onClick={() => setLightbox(l => ({ album: l!.album, item: (l!.item - 1 + currentAlbum.items.length) % currentAlbum.items.length }))}
                className="text-white hover:text-yellow-400"><ChevronLeft size={28} /></button>
              <button onClick={() => setLightbox(l => ({ album: l!.album, item: (l!.item + 1) % currentAlbum.items.length }))}
                className="text-white hover:text-yellow-400"><ChevronRight size={28} /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
