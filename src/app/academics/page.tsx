import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Users, BookOpen } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBookOpen } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Academic Programs — Govt. Shalimar Graduate College, Lahore",
  description: "Explore Intermediate and BS programs at Govt. Shalimar Graduate College including F.Sc, ICS, I.Com, BS Mathematics, BS Chemistry, BBA and more.",
};

const intermediatePrograms = [
  { name: "F.Sc Pre-Medical",           duration: "2 Years", seats: "400", subjects: "Biology, Chemistry, Physics, English, Urdu, Islamiat" },
  { name: "F.Sc Pre-Engineering",        duration: "2 Years", seats: "400", subjects: "Mathematics, Physics, Chemistry, English, Urdu, Islamiat" },
  { name: "ICS (Computer Science)",      duration: "2 Years", seats: "200", subjects: "Computer Science, Mathematics, Physics/Statistics, English, Urdu" },
  { name: "I.Com (Commerce)",            duration: "2 Years", seats: "200", subjects: "Accounting, Economics, Business Maths, English, Urdu" },
  { name: "FA (Arts)",                   duration: "2 Years", seats: "200", subjects: "Urdu, English, Islamic Studies, Civics, Education/Economics" },
  { name: "FA (Information Technology)", duration: "2 Years", seats: "100", subjects: "Computer Science, Mathematics, Urdu, English, Islamiat" },
];

const bsPrograms = [
  { name: "BS Mathematics",             duration: "4 Years", dept: "Science" },
  { name: "BS Physics",                 duration: "4 Years", dept: "Science" },
  { name: "BS Chemistry",               duration: "4 Years", dept: "Science" },
  { name: "BS Statistics",              duration: "4 Years", dept: "Science" },
  { name: "BS Computer Science / IT",   duration: "4 Years", dept: "Technology" },
  { name: "BS Economics",               duration: "4 Years", dept: "Social Science" },
  { name: "BS English",                 duration: "4 Years", dept: "Arts" },
  { name: "BS Urdu",                    duration: "4 Years", dept: "Arts" },
  { name: "BS Islamiat",                duration: "4 Years", dept: "Islamic Studies" },
  { name: "BS Political Science",       duration: "4 Years", dept: "Social Science" },
  { name: "BS Physical Education",      duration: "4 Years", dept: "Sports" },
  { name: "BBA (Business Administration)", duration: "4 Years", dept: "Commerce" },
  { name: "Account & Finance",          duration: "4 Years", dept: "Commerce" },
  { name: "Health & Physical Education",duration: "4 Years", dept: "Health" },
  { name: "ADC (Associate Degree)",     duration: "2 Years", dept: "Various" },
];

const cardColors = ["#12305A","#2E7D4F","#C9A227","#7c3aed","#b91c1c","#0369a1"];

export default function AcademicsPage() {
  return (
    <>
      <div className="relative py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Academic Programs</h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> Academics
          </p>
        </div>
      </div>

      {/* Intermediate Programs */}
      <section id="intermediate" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>11th &amp; 12th Grade</span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>Intermediate Programs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {intermediatePrograms.map((prog, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="h-2" style={{ backgroundColor: cardColors[i] }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${cardColors[i]}18` }}>
                      <FontAwesomeIcon icon={faGraduationCap} style={{ width: 18, height: 18, color: cardColors[i] }} />
                    </div>
                    <h3 className="font-bold text-sm" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>{prog.name}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock size={12} style={{ color: "#C9A227" }} /> Duration: {prog.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users size={12} style={{ color: "#C9A227" }} /> Seats: {prog.seats}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-500">
                      <BookOpen size={12} style={{ color: "#C9A227" }} className="mt-0.5 shrink-0" />
                      <span>{prog.subjects}</span>
                    </div>
                  </div>
                  <Link href="/admissions" className="text-xs font-semibold hover:underline" style={{ color: "#C9A227" }}>
                    Apply Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BS Programs */}
      <section id="bs" className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>Undergraduate Level</span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>BS &amp; Degree Programs</h2>
          </div>

          {/* Hero cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { icon: faGraduationCap, label: "Intermediate Programs", sub: "6 programs available", bg: "linear-gradient(135deg,#12305A,#1e4d8c)" },
              { icon: faBookOpen,      label: "BS Degree Programs",     sub: "14+ programs available", bg: "linear-gradient(135deg,#2E7D4F,#1a5c38)" },
            ].map(({ icon, label, sub, bg }, i) => (
              <div key={i} className="rounded-2xl p-8 text-white flex items-center gap-5" style={{ background: bg }}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={icon} style={{ width: 32, height: 32, color: "#C9A227" }} />
                </div>
                <div>
                  <div className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{label}</div>
                  <div className="text-sm text-blue-200 mt-1">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bsPrograms.map((prog, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <CheckCircle size={18} style={{ color: "#2E7D4F" }} className="shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-sm" style={{ color: "#12305A" }}>{prog.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{prog.duration} · {prog.dept}</div>
                </div>
                <Link href="/admissions" className="text-xs font-semibold shrink-0" style={{ color: "#C9A227" }}>Apply →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#12305A" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Join Shalimar College?</h2>
          <p className="text-blue-200 text-sm mb-8">Admissions are now open. Apply online or visit the admissions office during working hours.</p>
          <Link href="/admissions" style={{ backgroundColor: "#C9A227", color: "#12305A" }}
            className="inline-block font-bold text-sm px-8 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all">
            Apply for Admission
          </Link>
        </div>
      </section>
    </>
  );
}
