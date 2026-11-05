"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 20) e.message = "Please write at least 20 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <>
      <div className="relative py-20 text-center" style={{ background: "linear-gradient(135deg, #0a1f42 0%, #12305A 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> Contact
          </p>
        </div>
      </div>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
              Send Us a Message
            </span>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
              We&apos;d Love to Hear From You
            </h2>

            {submitted ? (
              <div className="bg-green-50 rounded-2xl p-10 text-center border border-green-100">
                <CheckCircle size={48} className="mx-auto mb-4" style={{ color: "#2E7D4F" }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  Thank you for reaching out. We will get back to you within 1–2 working days.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",subject:"",message:"" }); setErrors({}); }}
                  className="text-sm font-semibold" style={{ color: "#C9A227" }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Full Name *</label>
                    <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name" className="form-input" />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Email Address *</label>
                    <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com" className="form-input" />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Phone Number</label>
                  <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="03001234567" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Subject *</label>
                  <input type="text" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder="How can we help you?" className="form-input" />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Message *</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={5} placeholder="Write your message here..." className="form-input resize-none" />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  style={{ backgroundColor: "#C9A227", color: "#12305A" }}>
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>
                Our Details
              </span>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>
                Contact Information
              </h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: "Address", text: "Baghbanpura, near Shalimar Gardens, Lahore, Punjab, Pakistan" },
                  { icon: Phone, title: "Phone", text: "042-99332575" },
                  { icon: Mail, title: "Email", text: "gcbshalimar@gmail.com" },
                  { icon: Clock, title: "Working Hours", text: "Mon–Sat: 8:00am – 2:00pm" },
                ].map(({ icon: Icon, title, text }, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#F5F7FA" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(201,162,39,0.15)" }}>
                      <Icon size={18} style={{ color: "#C9A227" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "#12305A" }}>{title}</div>
                      <div className="text-sm text-gray-600">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed */}
            <div>
              <h3 className="text-sm font-bold mb-3" style={{ color: "#12305A" }}>Find Us on the Map</h3>
              <div className="rounded-2xl overflow-hidden h-52 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.4!2d74.3287!3d31.5831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f72be1f651%3A0x6b2bae0e4718de87!2sGovt.%20Shalimar%20Graduate%20College%20Baghbanpura!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Govt. Shalimar Graduate College Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
