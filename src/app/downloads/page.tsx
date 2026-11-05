"use client";
import { useState } from "react";
import Link from "next/link";
import { Download, Search, FileText } from "lucide-react";

const files = [
  { title: "Time Table BS 2nd Semester 2026", category: "Time Table", date: "Mar 2, 2026", size: "245 KB" },
  { title: "Revision Class Schedule — 1st & 2nd Year", category: "Notice", date: "Feb 23, 2026", size: "180 KB" },
  { title: "Admission Form 2026 — Intermediate", category: "Form", date: "Jul 1, 2026", size: "320 KB" },
  { title: "Admission Form 2026 — BS Programs", category: "Form", date: "Jul 1, 2026", size: "360 KB" },
  { title: "Annual Date Sheet 2026 — Intermediate", category: "Date Sheet", date: "Jan 15, 2026", size: "210 KB" },
  { title: "BS Mathematics Syllabus (Semester 1–8)", category: "Syllabus", date: "Sep 10, 2025", size: "580 KB" },
  { title: "BS Physics Syllabus (Semester 1–8)", category: "Syllabus", date: "Sep 10, 2025", size: "540 KB" },
  { title: "BS Chemistry Syllabus (Semester 1–8)", category: "Syllabus", date: "Sep 10, 2025", size: "560 KB" },
  { title: "Fee Concession Application Form", category: "Form", date: "Sep 1, 2025", size: "140 KB" },
  { title: "Character Certificate Application", category: "Form", date: "Sep 1, 2025", size: "120 KB" },
  { title: "College Prospectus 2025–2026", category: "Prospectus", date: "Aug 10, 2025", size: "2.4 MB" },
  { title: "Annual Report 2024–2025", category: "Report", date: "Aug 1, 2025", size: "1.8 MB" },
];

const categories = ["All", "Time Table", "Date Sheet", "Form", "Syllabus", "Notice", "Prospectus", "Report"];

const categoryColors: Record<string, string> = {
  "Time Table": "#12305A",
  "Date Sheet": "#2E7D4F",
  "Form": "#C9A227",
  "Syllabus": "#7c3aed",
  "Notice": "#b91c1c",
  "Prospectus": "#0369a1",
  "Report": "#064e3b",
};

export default function DownloadsPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = files.filter(f =>
    (cat === "All" || f.category === cat) &&
    f.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="relative py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Downloads
          </h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> Downloads
          </p>
        </div>
      </div>

      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-5xl mx-auto">
          {/* Search & filter */}
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search documents..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <select
              value={cat}
              onChange={e => setCat(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400 bg-white"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* File list */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">No documents found.</div>
            ) : (
              <table className="w-full text-sm">
                <thead style={{ backgroundColor: "#12305A" }}>
                  <tr>
                    {["Document", "Category", "Date", "Size", ""].map(h => (
                      <th key={h} className="px-6 py-4 text-left text-white text-xs font-semibold uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((file, i) => (
                    <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FileText size={16} style={{ color: categoryColors[file.category] || "#666" }} className="shrink-0" />
                          <span className="font-medium text-sm" style={{ color: "#12305A" }}>{file.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${categoryColors[file.category] || "#666"}18`, color: categoryColors[file.category] || "#666" }}
                        >
                          {file.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500">{file.date}</td>
                      <td className="px-6 py-4 text-xs text-gray-400">{file.size}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => alert("Please contact the college office to request this document: gcbshalimar@gmail.com")}
                          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                          style={{ backgroundColor: "rgba(201,162,39,0.12)", color: "#C9A227" }}
                        >
                          <Download size={12} />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <p className="text-xs text-gray-400 text-center mt-5">
            For documents not listed here, please email{" "}
            <a href="mailto:gcbshalimar@gmail.com" className="underline" style={{ color: "#C9A227" }}>
              gcbshalimar@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
