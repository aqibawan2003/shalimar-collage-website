import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Target, Eye, Building, BookOpen, Trophy, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Govt. Shalimar Graduate College, Lahore",
  description: "Learn about the history, vision, mission, and campus of Govt. Shalimar Graduate College, Lahore — established in 1963.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page banner */}
      <div
        className="relative py-20 text-center"
        style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Get to Know Us
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About the College
          </h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">›</span>
            About
          </p>
        </div>
      </div>

      {/* History */}
      <section id="history" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
              Our Legacy
            </span>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
              History Since 1963
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Govt. Shalimar Graduate College, Lahore, was established in 1963 under the Government of Punjab. Located
              in the historic area of Baghbanpura near the UNESCO World Heritage Site of Shalimar Gardens, the college
              has grown into one of Lahore's most respected educational institutions.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Over the past six decades, the college has produced thousands of graduates who have gone on to serve in
              every field — from medicine, engineering, and law to civil service, education, and business. Our alumni
              hold positions of distinction both within Pakistan and internationally.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Starting as an Intermediate college, the institution has expanded significantly to offer Bachelor of
              Science (BS) programs across 24 departments, accommodating over 5,000 students annually under the
              guidance of more than 135 qualified faculty members.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "1963", label: "Year Founded" },
                { number: "63+", label: "Years of Service" },
                { number: "50K+", label: "Alumni Worldwide" },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ backgroundColor: "#F5F7FA" }}>
                  <div className="text-2xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
                    {s.number}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-2xl h-80 flex items-center justify-center text-center text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #12305A 0%, #1e4d8c 100%)" }}
          >
            <div>
              <div className="text-7xl mb-4">🏛️</div>
              <div className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Established 1963</div>
              <div className="text-blue-200 text-sm mt-2">Baghbanpura, Lahore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
              Our Purpose
            </span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
              Vision &amp; Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #12305A 0%, #1a4a8a 100%)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Eye size={22} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Vision
                </h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                To be the leading government college in Punjab that empowers students with knowledge, critical thinking,
                and moral values — producing graduates who contribute positively to society, the nation, and the world.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, #2E7D4F 0%, #1a5c38 100%)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Target size={22} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Mission
                </h3>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                To provide quality education in a nurturing environment, foster intellectual curiosity, build character,
                and equip students with practical skills to succeed in higher education and professional life — while
                upholding the values of integrity, discipline, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
              Leadership
            </span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
              Principal&apos;s Message
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div
              className="w-40 h-48 rounded-2xl shrink-0 flex items-center justify-center mx-auto sm:mx-0"
              style={{ background: "linear-gradient(135deg, #12305A, #1e4d8c)", border: "3px solid #C9A227" }}
            >
              <div className="text-center text-white">
                <div className="text-5xl mb-2">👨‍💼</div>
                <div className="text-xs text-blue-200 px-2">Prof. Dr.<br />Muhammad Ibrahim</div>
              </div>
            </div>
            <div>
              <Quote size={32} className="mb-4" style={{ color: "#C9A227" }} />
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                It gives me immense pleasure to welcome you to Govt. Shalimar Graduate College, Lahore — an institution
                that has stood as a symbol of academic excellence and character-building for over six decades.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our college, located near the historic Shalimar Gardens, is committed to providing quality education
                from Intermediate to BS level. We believe that a true educational institution is not only a place for
                academic learning but also a centre for moral, social, and cultural development.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We have a team of highly qualified and dedicated faculty members who work tirelessly to ensure that
                every student reaches their full potential. Our state-of-the-art facilities, including modern
                laboratories, a well-stocked library, and sports grounds, provide students with everything they need
                to excel.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                I am proud to say that our students have consistently performed brilliantly in board and university
                examinations, bringing laurels to this institution. Our alumni hold positions of distinction in
                government, academia, medicine, engineering, and business.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                I invite all aspiring students to join our college family and embark on a transformative journey of
                knowledge, discipline, and excellence. Together, we will build a brighter future.
              </p>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="font-bold text-sm" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
                  Prof. Dr. Muhammad Ibrahim
                </div>
                <div className="text-xs text-gray-500">Principal — Govt. Shalimar Graduate College, Lahore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section id="campus" className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
              Our Infrastructure
            </span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
              Campus Facilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Central Library", desc: "A vast collection of books, journals, and digital resources for all disciplines.", emoji: "📚", color: "#12305A" },
              { icon: Building, title: "Modern Labs", desc: "Well-equipped Physics, Chemistry, Biology, and Computer labs for practical learning.", emoji: "🔬", color: "#2E7D4F" },
              { icon: Trophy, title: "Sports Grounds", desc: "Cricket ground, football pitch, basketball court, and indoor games facilities.", emoji: "⚽", color: "#C9A227" },
              { icon: Users, title: "Assembly Hall", desc: "A large auditorium for events, seminars, prize ceremonies, and cultural shows.", emoji: "🎭", color: "#7c3aed" },
            ].map(({ title, desc, emoji, color }, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 transition-transform">
                <div className="h-36 flex items-center justify-center" style={{ backgroundColor: color }}>
                  <div className="text-5xl">{emoji}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
                    {title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
