"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about#history", label: "History" },
      { href: "/about#principal", label: "Principal's Message" },
      { href: "/about#vision", label: "Vision & Mission" },
      { href: "/about#campus", label: "Campus" },
    ],
  },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/downloads", label: "Downloads" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav id="top" style={{ backgroundColor: "#12305A" }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.svg" alt="Shalimar College Logo" width={44} height={52} className="drop-shadow" />
          <div className="hidden sm:block">
            <div className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Govt. Shalimar
            </div>
            <div className="text-yellow-400 text-xs font-medium leading-tight">
              Graduate College, Lahore
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:text-yellow-400 transition-colors"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {link.label}
                  <ChevronDown size={12} />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-b-lg min-w-48 py-1 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="text-white hover:text-yellow-400 transition-colors hidden lg:block" aria-label="Search">
            <Search size={18} />
          </button>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div
            style={{ backgroundColor: "#12305A" }}
            className="absolute right-0 top-0 h-full w-72 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-blue-700">
              <span className="text-white font-bold">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {links.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      pathname === link.href ? "text-yellow-400" : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-10 pr-6 py-2 text-xs text-blue-200 hover:text-yellow-400 transition-colors"
                    >
                      — {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-blue-700">
              <Link
                href="/admissions"
                onClick={() => setMobileOpen(false)}
                style={{ backgroundColor: "#C9A227", color: "#12305A" }}
                className="block text-center font-bold text-sm py-3 rounded-full"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
