export default function AnnouncementTicker() {
  const announcements = [
    "Time Table BS 2nd Semester — Govt. Shalimar Graduate College, Lahore, w.e.f. 02-03-2026",
    "Intermediate classes have started from 1st September 2026 — Students are advised to ensure regular attendance",
    "Register now for MDCAT and ECAT 2026 — Start preparing with expert guidance",
    "Admissions Open in 1st Year at Govt. Shalimar College Baghbanpura, Lahore",
    "Shah Hussain Sports and Cultural Festival — First time in the history of the college",
    "Revision Classes for 1st Year and 2nd Year: 23rd February 2026 to 28th March 2026",
  ];

  const text = announcements.join("   •   ");

  return (
    <div style={{ backgroundColor: "#1a3d6e", borderBottom: "2px solid #C9A227" }} className="py-2 overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <span
          style={{ backgroundColor: "#C9A227", color: "#12305A" }}
          className="shrink-0 font-bold text-xs px-3 py-1 rounded-sm uppercase tracking-wide"
        >
          Announcements
        </span>
        <div className="flex-1 overflow-hidden relative">
          <div className="ticker-content text-white text-xs font-medium whitespace-nowrap">
            {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
          </div>
        </div>
      </div>
    </div>
  );
}
