import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Share2, X, Link2, Send, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#12305A" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.svg" alt="Shalimar College Logo" width={48} height={56} />
              <div>
                <div className="font-bold text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Govt. Shalimar
                </div>
                <div className="text-xs text-yellow-400">Graduate College, Lahore</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Govt. Shalimar Graduate College has been a beacon of education and character-building in Lahore since 1963,
              situated near the historic Shalimar Gardens. We empower students through quality education, sports, and
              co-curricular activities.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Share2, label: "Facebook", href: "https://www.facebook.com" },
                { Icon: X, label: "X", href: "https://x.com" },
                { Icon: Link2, label: "Instagram", href: "https://www.instagram.com" },
                { Icon: Send, label: "Telegram", href: "https://t.me" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-yellow-500 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Important Links */}
          <div>
            <h4 className="font-bold text-base mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#C9A227" }}>
              Important Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About the College" },
                { href: "/academics", label: "Academic Programs" },
                { href: "/admissions", label: "Admissions" },
                { href: "/faculty", label: "Faculty" },
                { href: "/downloads", label: "Downloads" },
                { href: "/news", label: "News & Events" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    <ChevronRight size={13} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academics */}
          <div>
            <h4 className="font-bold text-base mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#C9A227" }}>
              Academics
            </h4>
            <ul className="space-y-2">
              {[
                "F.Sc Pre-Medical",
                "F.Sc Pre-Engineering",
                "ICS (Computer Science)",
                "I.Com",
                "BS Chemistry",
                "BS Mathematics",
                "BS Physics",
                "BS Computer Science",
                "BBA",
              ].map((prog) => (
                <li key={prog}>
                  <Link
                    href="/academics"
                    className="flex items-center gap-2 text-sm text-blue-200 hover:text-yellow-400 transition-colors"
                  >
                    <ChevronRight size={13} />
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-bold text-base mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#C9A227" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-sm text-blue-200">
                  Baghbanpura, near Shalimar Gardens, Lahore, Punjab, Pakistan
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-yellow-400 shrink-0 mt-1" />
                <div>
                  <a href="tel:04299332575" className="text-sm text-blue-200 hover:text-yellow-400 transition-colors block">
                    042-99332575
                  </a>
                  <span className="text-xs text-blue-300">Mon–Fri: 10:00am – 5:00pm</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-yellow-400 shrink-0 mt-1" />
                <a href="mailto:gcbshalimar@gmail.com" className="text-sm text-blue-200 hover:text-yellow-400 transition-colors break-all">
                  gcbshalimar@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-sm text-blue-200">Mon – Sat: 8:00am – 2:00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(0,0,0,0.2)" }} className="py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <span>© 2026 Govt. Shalimar Graduate College, Lahore. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
