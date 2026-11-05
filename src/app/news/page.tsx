"use client";
import { useState } from "react";
import Link from "next/link";
import { Calendar, Tag, Search } from "lucide-react";

const allNews = [
  {
    category: "Academic",
    date: "Feb 23, 2026",
    title: "Revision Classes for 1st Year and 2nd Year Students",
    excerpt: "Revision classes for 1st Year and 2nd Year students will commence from 23rd February 2026 and continue until 28th March 2026. All students are advised to attend regularly and bring their study materials.",
    color: "#2E7D4F",
  },
  {
    category: "Notice",
    date: "Mar 2, 2026",
    title: "Time Table BS 2nd Semester — w.e.f. 02-03-2026",
    excerpt: "The time table for BS 2nd Semester has been released with effect from 2nd March 2026. Students are advised to check the downloads section for the complete schedule and report to their respective classes on time.",
    color: "#12305A",
  },
  {
    category: "Events",
    date: "Nov 1, 2026",
    title: "Shah Hussain Sports & Cultural Festival — A Historic First",
    excerpt: "The Shah Hussain Sports and Cultural Festival is being organized for the very first time in the history of Govt. Shalimar Graduate College. All students are encouraged to participate and showcase their talents.",
    color: "#C9A227",
  },
  {
    category: "Admissions",
    date: "Sep 1, 2026",
    title: "Admissions Open — 1st Year at Shalimar College, Baghbanpura",
    excerpt: "Applications are now open for 1st Year (Intermediate) admissions at Govt. Shalimar Graduate College, Baghbanpura, Lahore. Interested candidates should apply before the deadline.",
    color: "#7c3aed",
  },
  {
    category: "Academic",
    date: "Sep 1, 2026",
    title: "Intermediate Classes Started — Regular Attendance Mandatory",
    excerpt: "Intermediate classes have officially started from 1st September 2026. Students are strongly advised to ensure regular attendance in their respective classes to avoid any academic penalties.",
    color: "#0369a1",
  },
  {
    category: "Notice",
    date: "Aug 15, 2026",
    title: "Register for MDCAT and ECAT 2026",
    excerpt: "Students preparing for medical and engineering entrance tests are advised to register now for MDCAT and ECAT 2026 and start preparing with expert guidance available at the college.",
    color: "#b91c1c",
  },
];

const categories = ["All", "Academic", "Notice", "Events", "Admissions"];

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = allNews.filter(n =>
    (cat === "All" || n.category === cat) &&
    (n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <div className="relative py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Stay Informed
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            News &amp; Events
          </h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> News &amp; Events
          </p>
        </div>
      </div>

      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-5xl mx-auto">
          {/* Search & filter */}
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search news and announcements..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
                  style={
                    cat === c
                      ? { backgroundColor: "#12305A", color: "#fff" }
                      : { backgroundColor: "#F5F7FA", color: "#666", border: "1px solid #e5e7eb" }
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* News cards */}
          <div className="space-y-5">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0 h-full">
                  <div className="w-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: `${item.color}18`, color: item.color }}
                      >
                        <Tag size={10} className="inline mr-1" />
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar size={10} />
                        {item.date}
                      </span>
                    </div>
                    <h2
                      className="font-bold text-lg mb-3"
                      style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {expanded === i ? item.excerpt : item.excerpt.slice(0, 160) + "..."}
                    </p>
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="mt-3 text-xs font-semibold"
                      style={{ color: item.color }}
                    >
                      {expanded === i ? "Show less ↑" : "Read more →"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">No news items found.</div>
          )}
        </div>
      </section>
    </>
  );
}
