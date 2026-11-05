import Link from "next/link";
import { MapPin, BookOpen, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Who We Are
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
          >
            About Govt. Shalimar Graduate College
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Govt. Shalimar Graduate College, Lahore, is a premier public educational institution with a proud legacy
            spanning over 63 years. Situated near the historic Shalimar Gardens in Baghbanpura, our college has been
            at the forefront of education in Punjab.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We offer programs from Intermediate (F.Sc, ICS, I.Com, FA) to BS level across multiple disciplines
            including Natural Sciences, Social Sciences, Computer Science, Commerce, and more. With over 5,000
            students enrolled each year and 135+ dedicated faculty members, we continue to shape the leaders of tomorrow.
          </p>
          {/* Highlights */}
          <div className="space-y-3 mb-8">
            {[
              { icon: MapPin, text: "Located near the historic Shalimar Gardens, Baghbanpura, Lahore" },
              { icon: BookOpen, text: "Intermediate to BS programs across 24 departments" },
              { icon: Trophy, text: "Active sports, cultural, and co-curricular activities" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(46,125,79,0.1)" }}
                >
                  <Icon size={15} style={{ color: "#2E7D4F" }} />
                </div>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            style={{ backgroundColor: "#12305A", color: "#fff" }}
            className="inline-block font-bold text-sm px-7 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Right: image collage */}
        <div className="relative h-96 lg:h-auto">
          <div className="grid grid-cols-2 gap-4 h-80">
            {/* Main campus image */}
            <div
              className="col-span-2 rounded-2xl overflow-hidden flex items-center justify-center relative"
              style={{ background: "linear-gradient(135deg, #12305A 0%, #1e4d8c 100%)", height: "180px" }}
            >
              <div className="text-center text-white p-6">
                <div className="text-4xl mb-2">🏛️</div>
                <div className="text-sm font-semibold">Main Campus Building</div>
                <div className="text-xs text-blue-200">Baghbanpura, Lahore</div>
              </div>
              {/* Badge */}
              <div
                className="absolute top-4 right-4 w-16 h-16 rounded-full flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: "#C9A227" }}
              >
                <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>63</div>
                <div className="text-white text-xs leading-tight">Yrs</div>
              </div>
            </div>
            {/* Two smaller images */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2E7D4F 0%, #1a5c38 100%)", height: "150px" }}
            >
              <div className="text-center text-white p-4">
                <div className="text-3xl mb-1">📚</div>
                <div className="text-xs font-semibold">Library</div>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C9A227 0%, #a07d10 100%)", height: "150px" }}
            >
              <div className="text-center text-white p-4">
                <div className="text-3xl mb-1">⚽</div>
                <div className="text-xs font-semibold">Sports Ground</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
