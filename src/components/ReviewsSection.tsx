import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmad Raza",
    role: "Alumni, BS Mathematics",
    rating: 5,
    text: "Shalimar College gave me the foundation I needed. The faculty is exceptionally knowledgeable and always supportive. I completed my BS Mathematics here and it truly shaped my career.",
    year: "2024",
  },
  {
    name: "Sana Fatima",
    role: "Current Student, F.Sc Pre-Medical",
    rating: 5,
    text: "The college environment is amazing. The labs are well-equipped and the teachers are very helpful. The annual sports and cultural activities make college life so enjoyable.",
    year: "2026",
  },
  {
    name: "Bilal Hassan",
    role: "Alumni, ICS",
    rating: 4,
    text: "Great institution with a rich history. The computer science department is strong and the library resources are extensive. I highly recommend Shalimar College to any student.",
    year: "2023",
  },
  {
    name: "Zainab Malik",
    role: "Current Student, BBA",
    rating: 5,
    text: "The BBA program is well-structured and taught by industry professionals. The campus near Shalimar Gardens is beautiful. Very proud to be a student here.",
    year: "2026",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          fill={s <= count ? "#C9A227" : "none"}
          style={{ color: "#C9A227" }}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            What Students Say
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
          >
            Student Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Stars count={5} />
            <span className="font-bold text-lg" style={{ color: "#12305A" }}>4.6</span>
            <span className="text-gray-400 text-sm">/ 5 — Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                  style={{ backgroundColor: ["#12305A", "#2E7D4F", "#C9A227", "#7c3aed"][i % 4] }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "#12305A" }}>{r.name}</div>
                  <div className="text-xs text-gray-400">{r.role}</div>
                </div>
              </div>
              <Stars count={r.rating} />
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="text-xs text-gray-400 mt-3">{r.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
