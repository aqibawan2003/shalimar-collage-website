"use client";
import { useState } from "react";
import Link from "next/link";
import { Calendar, Tag, Mail } from "lucide-react";

const news = [
  {
    category: "Academic",
    date: "Feb 23, 2026",
    title: "Revision Classes for 1st Year and 2nd Year Students",
    excerpt:
      "Revision classes for 1st Year and 2nd Year students will commence from 23rd February 2026 and continue until 28th March 2026. All students are advised to attend regularly.",
    color: "#2E7D4F",
  },
  {
    category: "Notice",
    date: "Mar 2, 2026",
    title: "Time Table BS 2nd Semester — w.e.f. 02-03-2026",
    excerpt:
      "The time table for BS 2nd Semester has been released. Students are advised to check the downloads section for the complete schedule and report to their respective classes on time.",
    color: "#12305A",
  },
  {
    category: "Events",
    date: "Nov 1, 2026",
    title: "Shah Hussain Sports & Cultural Festival — A Historic First",
    excerpt:
      "The Shah Hussain Sports and Cultural Festival is being organized for the first time in the history of Govt. Shalimar Graduate College. All students are encouraged to participate.",
    color: "#C9A227",
  },
];

export default function NewsSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Stay Informed
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
          >
            Blog, News &amp; Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News list — takes 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((item, i) => (
              <div key={i} className="flex gap-5 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow group">
                {/* Color bar */}
                <div
                  className="w-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color, minHeight: "80px" }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
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
                  <h3
                    className="font-bold text-base mb-2 group-hover:text-yellow-700 transition-colors"
                    style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.excerpt}</p>
                  <Link
                    href="/news"
                    className="text-xs font-semibold hover:underline"
                    style={{ color: item.color }}
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
            <div className="text-left pt-2">
              <Link
                href="/news"
                style={{ backgroundColor: "#12305A", color: "#fff" }}
                className="inline-block font-bold text-sm px-7 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                View All News
              </Link>
            </div>
          </div>

          {/* Subscribe card — takes 1/3 */}
          <div
            className="rounded-2xl p-7 flex flex-col items-center text-center h-fit sticky top-24"
            style={{ backgroundColor: "#F5F7FA", border: "2px solid #e5e7eb" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "rgba(201,162,39,0.15)" }}
            >
              <Mail size={28} style={{ color: "#C9A227" }} />
            </div>
            <h3
              className="font-bold text-xl mb-2"
              style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
            >
              Updates Via Inbox
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Subscribe with your email to receive the latest college news, notices, and announcements.
            </p>
            {subscribed ? (
              <div
                className="w-full py-3 rounded-xl text-sm font-semibold"
                style={{ backgroundColor: "rgba(46,125,79,0.1)", color: "#2E7D4F" }}
              >
                ✓ Subscribed! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-yellow-400"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: "#C9A227", color: "#12305A" }}
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
