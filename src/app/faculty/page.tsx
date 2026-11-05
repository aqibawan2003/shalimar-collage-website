"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie, faFlask, faChalkboardUser, faLaptopCode,
  faMicroscope, faBriefcase, faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const departments = ["All","Administration","Science","Mathematics","English","Urdu","Islamic Studies","Commerce","Computer Science","Physical Education","Social Science"];

const facultyList: { name: string; title: string; dept: string; icon: IconDefinition; qual: string }[] = [
  { name: "Prof. Dr. Muhammad Ibrahim", title: "Principal",           dept: "Administration",    icon: faUserTie,        qual: "PhD (Education)" },
  { name: "Dr. Nasreen Akhtar",         title: "Head of Department",  dept: "Science",           icon: faFlask,          qual: "PhD (Chemistry)" },
  { name: "Prof. Khalid Mahmood",       title: "Senior Lecturer",     dept: "Mathematics",       icon: faChalkboardUser, qual: "M.Phil (Mathematics)" },
  { name: "Dr. Fatima Zahra",           title: "Assistant Professor", dept: "English",           icon: faChalkboardUser, qual: "PhD (English Literature)" },
  { name: "Mr. Imran Hussain",          title: "Lecturer",            dept: "Computer Science",  icon: faLaptopCode,     qual: "MS (Computer Science)" },
  { name: "Dr. Ayesha Siddiqa",         title: "Associate Professor", dept: "Science",           icon: faMicroscope,     qual: "PhD (Physics)" },
  { name: "Mr. Tariq Mehmood",          title: "Lecturer",            dept: "Commerce",          icon: faBriefcase,      qual: "MBA" },
  { name: "Ms. Rukhsana Bibi",          title: "Lecturer",            dept: "Urdu",              icon: faChalkboardUser, qual: "M.A (Urdu)" },
  { name: "Mr. Asad Ali",               title: "Lecturer",            dept: "Islamic Studies",   icon: faChalkboardUser, qual: "M.A (Islamiat)" },
  { name: "Dr. Shahid Iqbal",           title: "Assistant Professor", dept: "Mathematics",       icon: faMicroscope,     qual: "PhD (Mathematics)" },
  { name: "Ms. Nadia Rasheed",          title: "Lecturer",            dept: "English",           icon: faChalkboardUser, qual: "M.A (English)" },
  { name: "Mr. Zafar Abbas",            title: "Lecturer",            dept: "Physical Education",icon: faPersonRunning,  qual: "BS (Physical Education)" },
  { name: "Dr. Rabia Noor",             title: "Assistant Professor", dept: "Social Science",    icon: faChalkboardUser, qual: "PhD (Economics)" },
  { name: "Mr. Hamza Qureshi",          title: "Lecturer",            dept: "Computer Science",  icon: faLaptopCode,     qual: "MS (IT)" },
  { name: "Ms. Sadia Perveen",          title: "Lecturer",            dept: "Science",           icon: faFlask,          qual: "M.Sc (Biology)" },
  { name: "Mr. Naveed Anwar",           title: "Lecturer",            dept: "Commerce",          icon: faBriefcase,      qual: "M.Com" },
];

const palette = ["#12305A","#2E7D4F","#C9A227","#7c3aed"];
const paletteDark = ["#1e4d8c","#1a5c38","#a07d10","#6d28d9"];

export default function FacultyPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = facultyList.filter(f =>
    (dept === "All" || f.dept === dept) &&
    (f.name.toLowerCase().includes(search.toLowerCase()) || f.dept.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <div className="relative py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>Our Team</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Faculty &amp; Staff</h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> Faculty
          </p>
        </div>
      </div>

      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search by name or department..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400" />
            </div>
            <select value={dept} onChange={e => setDept(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400 bg-white">
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform">
                <div className="h-40 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${palette[i % 4]} 0%, ${paletteDark[i % 4]} 100%)` }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                    <FontAwesomeIcon icon={member.icon} style={{ width: 30, height: 30, color: "#C9A227" }} />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>{member.name}</h3>
                  <div className="text-xs font-semibold mb-1" style={{ color: "#C9A227" }}>{member.title}</div>
                  <div className="text-xs text-gray-500 mb-1">{member.dept}</div>
                  <div className="text-xs text-gray-400">{member.qual}</div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">No faculty members found.</div>
          )}
          <p className="text-center text-xs text-gray-400 mt-10">
            Showing {filtered.length} of {facultyList.length} staff members.
          </p>
        </div>
      </section>
    </>
  );
}
