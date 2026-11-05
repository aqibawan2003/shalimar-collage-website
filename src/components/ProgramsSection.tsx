import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const intermediate = [
  "F.Sc Pre-Medical", "F.Sc Pre-Engineering", "ICS (Computer Science)",
  "I.Com (Commerce)", "FA (Arts)", "FA (Information Technology)",
];

const undergraduate = [
  "BS Chemistry", "BS Economics", "BS English", "BS Islamiat",
  "BS Mathematics", "BS Physics", "BS Political Science", "BS Urdu",
  "BS Statistics", "BS Physical Education", "BS Information Technology",
  "BBA", "ADC", "Account & Finance",
];

export default function ProgramsSection() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
            Academic Programs
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            From Intermediate to BS level — we offer a wide range of programs to match your interests and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Intermediate */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform">
            <div className="h-40 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #12305A 0%, #1e4d8c 100%)" }}>
              <div className="text-center text-white">
                <FontAwesomeIcon icon={faGraduationCap} style={{ width: 48, height: 48, marginBottom: 10 }} />
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Intermediate Programs</h3>
                <p className="text-blue-200 text-xs mt-1">2-Year Programs (11th &amp; 12th Grade)</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-2">
                {intermediate.map((prog, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#2E7D4F" }} />
                    <span className="text-sm text-gray-600">{prog}</span>
                  </div>
                ))}
              </div>
              <Link href="/academics#intermediate" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" style={{ color: "#12305A" }}>
                View Details →
              </Link>
            </div>
          </div>

          {/* Undergraduate */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform">
            <div className="h-40 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #2E7D4F 0%, #1a5c38 100%)" }}>
              <div className="text-center text-white">
                <FontAwesomeIcon icon={faBookOpen} style={{ width: 48, height: 48, marginBottom: 10 }} />
                <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Undergraduate Programs</h3>
                <p className="text-green-200 text-xs mt-1">4-Year BS Programs</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-2">
                {undergraduate.slice(0, 12).map((prog, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#2E7D4F" }} />
                    <span className="text-sm text-gray-600">{prog}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-xs text-gray-400 italic pl-5">+ 2 more programs</div>
              <Link href="/academics#bs" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" style={{ color: "#2E7D4F" }}>
                View Details →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/academics" style={{ backgroundColor: "#12305A", color: "#fff" }}
            className="inline-block font-bold text-sm px-8 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
