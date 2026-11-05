"use client";
import { useEffect, useRef, useState } from "react";
import { Award, Users, BookOpen, GraduationCap } from "lucide-react";

const stats = [
  { icon: Award, number: 63, suffix: "", label: "Years of Excellence", sub: "Est. 1963" },
  { icon: Users, number: 5000, suffix: "+", label: "Students Each Year", sub: "Active Enrolment" },
  { icon: BookOpen, number: 24, suffix: "", label: "Departments", sub: "Across Programs" },
  { icon: GraduationCap, number: 135, suffix: "+", label: "Faculty Members", sub: "Qualified & Dedicated" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsStrip() {
  return (
    <section className="relative -mt-8 z-10 max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
        {stats.map(({ icon: Icon, number, suffix, label, sub }, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-7">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(201,162,39,0.12)" }}
            >
              <Icon size={22} style={{ color: "#C9A227" }} />
            </div>
            <div>
              <div
                className="text-3xl font-bold leading-none"
                style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}
              >
                <Counter target={number} suffix={suffix} />
              </div>
              <div className="text-xs font-semibold text-gray-700 mt-1">{label}</div>
              <div className="text-xs text-gray-400">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
