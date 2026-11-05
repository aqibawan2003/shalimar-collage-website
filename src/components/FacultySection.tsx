import Link from "next/link";

const faculty = [
  { name: "Prof. Dr. Muhammad Ibrahim", title: "Principal", dept: "Administration", emoji: "👨‍💼" },
  { name: "Dr. Nasreen Akhtar", title: "Head of Department", dept: "Chemistry", emoji: "👩‍🔬" },
  { name: "Prof. Khalid Mahmood", title: "Senior Lecturer", dept: "Mathematics", emoji: "👨‍🏫" },
  { name: "Dr. Fatima Zahra", title: "Assistant Professor", dept: "English", emoji: "👩‍🏫" },
];

export default function FacultySection() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#12305A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Meet Our Team
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Esteemed Professors
          </h2>
          <p className="text-blue-200 text-sm max-w-xl mx-auto">
            Our faculty members are experienced educators and researchers dedicated to providing the highest quality
            education and mentorship to every student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {faculty.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden text-center group hover:-translate-y-2 transition-transform duration-300 shadow-lg"
            >
              {/* Photo area */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a3d6e 0%, #12305A 100%)" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  {member.emoji}
                </div>
                {/* Gold accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: "#C9A227" }}
                />
              </div>
              <div className="p-5">
                <h3
                  className="font-bold text-sm mb-1"
                  style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
                >
                  {member.name}
                </h3>
                <div className="text-xs font-semibold mb-1" style={{ color: "#C9A227" }}>
                  {member.title}
                </div>
                <div className="text-xs text-gray-500">{member.dept}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faculty"
            style={{ backgroundColor: "#C9A227", color: "#12305A" }}
            className="inline-block font-bold text-sm px-8 py-3 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            View All Faculty Members
          </Link>
        </div>
      </div>
    </section>
  );
}
