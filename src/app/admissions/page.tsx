"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, FileText, Calendar, AlertCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faFileLines, faCloudArrowUp, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const steps = [
  { faIcon: faClipboardCheck, step: "01", title: "Check Eligibility", desc: "Review the eligibility criteria for your desired program." },
  { faIcon: faFileLines,      step: "02", title: "Fill Application",  desc: "Complete the online admission form with accurate details." },
  { faIcon: faCloudArrowUp,   step: "03", title: "Upload Documents",  desc: "Attach all required documents in the prescribed format." },
  { faIcon: faMoneyBill,      step: "04", title: "Pay Fee & Confirm", desc: "Submit fee challan and await merit list announcement." },
];

const documents = [
  "Matriculation / O-Level Certificate & Mark Sheet",
  "Intermediate / A-Level Certificate (for BS admissions)",
  "Domicile Certificate",
  "CNIC / B-Form copy",
  "Passport-size photographs (4 copies)",
  "Character Certificate from previous institution",
  "Migration Certificate (if applicable)",
  "Fee deposit slip",
];

const feeTable = [
  { program: "F.Sc / ICS / I.Com / FA", admFee: "Rs. 2,000", tuition: "Rs. 1,500/month", total: "Rs. 20,000/yr" },
  { program: "BS Programs (All)",        admFee: "Rs. 3,000", tuition: "Rs. 2,000/month", total: "Rs. 27,000/yr" },
  { program: "BBA",                      admFee: "Rs. 4,000", tuition: "Rs. 2,500/month", total: "Rs. 34,000/yr" },
  { program: "ADC",                      admFee: "Rs. 2,500", tuition: "Rs. 1,800/month", total: "Rs. 24,000/yr" },
];

export default function AdmissionsPage() {
  const [form, setForm] = useState({ name: "", father: "", phone: "", email: "", program: "", marks: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.father.trim()) e.father = "Father's name is required";
    if (!/^[0-9]{10,11}$/.test(form.phone.replace(/[-\s]/g, ""))) e.phone = "Valid phone number required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.program) e.program = "Please select a program";
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
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>Join Our Family</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Admissions 2026</h1>
          <p className="text-blue-200 mt-4 text-sm">
            <Link href="/" className="hover:text-yellow-400">Home</Link> <span className="mx-2">›</span> Admissions
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>How to Apply</span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>Admission Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-3/4 w-1/2 h-0.5" style={{ backgroundColor: "#e5e7eb" }} />
                )}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#12305A" }}>
                  <FontAwesomeIcon icon={s.faIcon} style={{ width: 24, height: 24, color: "#C9A227" }} />
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: "#C9A227" }}>Step {s.step}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#12305A" }}>{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>Apply Online</span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>Online Admission Form</h2>
          </div>
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
              <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#2E7D4F" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>Application Submitted!</h3>
              <p className="text-gray-600 text-sm mb-6">Thank you for applying. Our admissions team will contact you within 2–3 working days.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name:"",father:"",phone:"",email:"",program:"",marks:"",message:"" }); }}
                className="text-sm font-semibold" style={{ color: "#C9A227" }}>Submit Another Application</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { key: "name",   label: "Full Name *",        type: "text",  ph: "Muhammad Ali" },
                  { key: "father", label: "Father's Name *",    type: "text",  ph: "Muhammad Hassan" },
                  { key: "phone",  label: "Phone Number *",     type: "tel",   ph: "03001234567" },
                  { key: "email",  label: "Email Address *",    type: "email", ph: "student@email.com" },
                ].map(({ key, label, type, ph }) => (
                  <div key={key}>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>{label}</label>
                    <input type={type} value={form[key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      placeholder={ph} className="form-input" />
                    {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Desired Program *</label>
                  <select value={form.program} onChange={e => setForm(f => ({ ...f, program: e.target.value }))} className="form-input">
                    <option value="">— Select Program —</option>
                    <optgroup label="Intermediate">
                      <option>F.Sc Pre-Medical</option>
                      <option>F.Sc Pre-Engineering</option>
                      <option>ICS (Computer Science)</option>
                      <option>I.Com (Commerce)</option>
                      <option>FA (Arts)</option>
                    </optgroup>
                    <optgroup label="BS Programs">
                      <option>BS Mathematics</option>
                      <option>BS Physics</option>
                      <option>BS Chemistry</option>
                      <option>BS Computer Science / IT</option>
                      <option>BS Economics</option>
                      <option>BS English</option>
                      <option>BBA</option>
                      <option>Other BS Program</option>
                    </optgroup>
                  </select>
                  {errors.program && <p className="text-xs text-red-500 mt-1">{errors.program}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Previous Marks (%)</label>
                  <input type="text" value={form.marks} onChange={e => setForm(f => ({ ...f, marks: e.target.value }))}
                    placeholder="e.g. 85%" className="form-input" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "#12305A" }}>Additional Message (optional)</label>
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={3} placeholder="Any additional information..." className="form-input resize-none" />
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <AlertCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#C9A227" }} />
                <span>By submitting this form, you agree to be contacted by the admissions team. All information will be kept confidential.</span>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all"
                style={{ backgroundColor: "#C9A227", color: "#12305A" }}>Submit Application</button>
            </form>
          )}
        </div>
      </section>

      {/* Documents & Schedule */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>What to Bring</span>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>Required Documents</h2>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FileText size={15} style={{ color: "#C9A227" }} className="mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-600">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>Important Dates</span>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>Admission Schedule</h2>
            <div className="space-y-3">
              {[
                { event: "Form Sale Begins",          date: "July 1, 2026" },
                { event: "Last Date for Submission",  date: "August 15, 2026" },
                { event: "1st Merit List",            date: "August 20, 2026" },
                { event: "2nd Merit List",            date: "September 1, 2026" },
                { event: "Classes Begin",             date: "September 10, 2026" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-100">
                  <Calendar size={16} style={{ color: "#C9A227" }} className="shrink-0" />
                  <div className="flex-1 text-sm text-gray-700">{item.event}</div>
                  <div className="text-sm font-semibold" style={{ color: "#12305A" }}>{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "#C9A227" }}>Financial Information</span>
            <h2 className="text-3xl font-bold" style={{ color: "#12305A", fontFamily: "'Playfair Display', serif" }}>Fee Structure</h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <table className="w-full text-sm">
              <thead style={{ backgroundColor: "#12305A" }}>
                <tr>{["Program","Admission Fee","Tuition Fee","Approx. Annual Total"].map(h => (
                  <th key={h} className="px-6 py-4 text-left text-white text-xs font-semibold uppercase tracking-wide">{h}</th>
                ))}</tr>
              </thead>
              <tbody>
                {feeTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium" style={{ color: "#12305A" }}>{row.program}</td>
                    <td className="px-6 py-4 text-gray-600">{row.admFee}</td>
                    <td className="px-6 py-4 text-gray-600">{row.tuition}</td>
                    <td className="px-6 py-4 font-semibold" style={{ color: "#2E7D4F" }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-4 bg-yellow-50 border-t border-yellow-100">
              <p className="text-xs text-yellow-800">* Fees are approximate and subject to change. Scholarships available for deserving students.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
