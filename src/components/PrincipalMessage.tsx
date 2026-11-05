import Link from "next/link";
import { Quote } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export default function PrincipalMessage() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: Principal portrait */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              className="w-72 h-80 rounded-2xl overflow-hidden relative flex items-center justify-center"
              style={{ border: "4px solid #C9A227", boxShadow: "12px 12px 0 rgba(201,162,39,0.2)", background: "linear-gradient(135deg, #12305A 0%, #1a4a8a 100%)" }}
            >
              <div className="text-center text-white">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <FontAwesomeIcon icon={faUserTie} style={{ width: 48, height: 48, color: "#C9A227" }} />
                </div>
                <div className="text-xs text-blue-200">Principal&apos;s Photo</div>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-xl px-5 py-3 shadow-xl"
              style={{ border: "2px solid #C9A227" }}
            >
              <div className="text-sm font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
                Prof. Dr. Muhammad Ibrahim
              </div>
              <div className="text-xs text-gray-500">Principal, Shalimar College</div>
            </div>
          </div>
        </div>

        {/* Right: Message */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            From the Desk of the Principal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
            The Principal&apos;s Message
          </h2>
          <Quote size={40} className="mb-4" style={{ color: "#C9A227" }} />
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            It gives me immense pleasure to welcome you to Govt. Shalimar Graduate College, Lahore — an institution that has
            stood as a symbol of academic excellence and character-building for over six decades.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Our college, located near the historic Shalimar Gardens, is committed to providing quality education from
            Intermediate to BS level. We believe that a true educational institution is not only a place for academic
            learning but also a centre for moral, social, and cultural development.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We have a team of highly qualified and dedicated faculty members who work tirelessly to ensure that every
            student reaches their full potential. I invite all aspiring students to join our college and embark on a journey
            of knowledge, discipline, and excellence.
          </p>
          <Link
            href="/about#principal"
            style={{ backgroundColor: "#C9A227", color: "#12305A" }}
            className="inline-block font-bold text-sm px-7 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Read Full Message
          </Link>
        </div>
      </div>
    </section>
  );
}
