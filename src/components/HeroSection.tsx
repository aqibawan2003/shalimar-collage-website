"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    bg: "linear-gradient(135deg, #0a1f42 0%, #12305A 50%, #1a4a8a 100%)",
    headline: "Welcome to Govt. Shalimar Graduate College",
    sub: "Excellence in Education Since 1963",
  },
  {
    bg: "linear-gradient(135deg, #0d2b1e 0%, #1a4a30 50%, #2E7D4F 100%)",
    headline: "Nurturing Minds, Building Futures",
    sub: "Modern Facilities · Experienced Faculty · 5000+ Students",
  },
  {
    bg: "linear-gradient(135deg, #2a1500 0%, #5a2e00 50%, #8a4a00 100%)",
    headline: "Shah Hussain Sports & Cultural Festival",
    sub: "Celebrating the first time in the history of Shalimar College",
  },
];

const updates = [
  { date: "Nov 2026", text: "Intermediate classes started — ensure regular attendance" },
  { date: "Oct 2026", text: "Register now for MDCAT & ECAT 2026 with expert guidance" },
  { date: "Sep 2026", text: "Admissions Open — 1st Year at Shalimar College, Baghbanpura" },
  { date: "Aug 2026", text: "Shah Hussain Sports & Cultural Festival — first in college history" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "580px" }}>
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{ background: slide.bg }}
      />
      {/* Overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-10 min-h-[580px]">
        {/* Left text */}
        <div className="flex-1 text-white text-center lg:text-left">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1 rounded-full"
            style={{ backgroundColor: "rgba(201,162,39,0.25)", color: "#C9A227", border: "1px solid #C9A227" }}
          >
            Est. 1963 · Baghbanpura, Lahore
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {slide.headline}
          </h1>
          <p className="text-blue-200 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            {slide.sub}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/admissions"
              style={{ backgroundColor: "#C9A227", color: "#12305A" }}
              className="font-bold text-sm px-8 py-3 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Apply for Admission
            </Link>
            <Link
              href="/academics"
              className="font-bold text-sm px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-navy transition-all"
              style={{"--tw-text-opacity": "1"} as React.CSSProperties}
            >
              Explore Programs
            </Link>
          </div>
          {/* Slide dots */}
          <div className="flex gap-2 mt-10 justify-center lg:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ backgroundColor: i === current ? "#C9A227" : "rgba(255,255,255,0.4)", width: i === current ? "24px" : "8px" }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Latest Updates card */}
        <div
          className="w-full lg:w-80 rounded-2xl p-6 shrink-0"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <span style={{ backgroundColor: "#C9A227" }} className="w-1 h-5 rounded-full inline-block" />
            Latest Updates
          </h3>
          <ul className="space-y-4">
            {updates.map((u, i) => (
              <li key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                <span className="text-xs font-semibold" style={{ color: "#C9A227" }}>{u.date}</span>
                <p className="text-sm text-blue-100 mt-1 leading-snug">{u.text}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/news"
            className="block text-center text-xs font-semibold mt-4"
            style={{ color: "#C9A227" }}
          >
            View All Announcements →
          </Link>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}
