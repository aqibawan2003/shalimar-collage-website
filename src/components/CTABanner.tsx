import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="relative py-28 px-4 text-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 60%, #1a4a8a 100%)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10"
        style={{ backgroundColor: "#C9A227" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-10"
        style={{ backgroundColor: "#C9A227" }}
      />

      <div className="relative max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "#C9A227" }}>
          Reach Out to Us
        </span>
        <h2
          className="text-3xl sm:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tell Us What You Want
        </h2>
        <p className="text-blue-200 text-base mb-10">
          Tell us your goal and we will help you reach it. Our admissions and counselling team is always ready to guide you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            style={{ backgroundColor: "#C9A227", color: "#12305A" }}
            className="font-bold text-sm px-10 py-4 rounded-full hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            Contact Us
          </Link>
          <Link
            href="/admissions"
            className="font-bold text-sm px-10 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-navy transition-all"
          >
            Apply Now
          </Link>
        </div>
        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-200">
          <a href="tel:04299332575" className="hover:text-yellow-400 transition-colors">
            📞 042-99332575
          </a>
          <a href="mailto:gcbshalimar@gmail.com" className="hover:text-yellow-400 transition-colors">
            ✉️ gcbshalimar@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
