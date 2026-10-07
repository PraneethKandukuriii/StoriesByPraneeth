import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
const empty = { name: "", email: "", eventType: "", date: "", message: "", website: "" };
const labelClass = "flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-white/55";
const inputClass = "rounded-sm border-b border-white/20 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-white/25 focus:border-[#c6a875]";

function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(`${API}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
      setForm(empty);
    } catch (err) {
      setError(err.message === "Failed to fetch" ? "The form server is offline. Email me directly and we’ll take it from there." : err.message);
      setStatus("error");
    }
  };

  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[#0b0b0a] px-5 pb-24 pt-36 text-[#f7f4ed] sm:px-10 sm:pt-48">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold tracking-[.34em] text-[#c6a875]">GOOD THINGS START WITH A HELLO</p>
          <div className="mt-6 grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:pb-16">
            <div><h1 className="font-serif text-6xl leading-[.92] tracking-[-.05em] sm:text-8xl">What are<br/>you <span className="italic text-[#c6a875]">dreaming up?</span></h1><p className="mt-7 max-w-md text-sm leading-6 text-white/55">A trip, a live show, a story that deserves to be told? Give me a little picture of it.</p>
              <div className="mt-10 space-y-5 text-sm text-white/65"><a href="mailto:praneethkandukuriii@gmail.com" className="flex items-center gap-3 transition hover:text-[#e5c99e]"><Mail size={16} className="text-[#c6a875]"/>praneethkandukuriii@gmail.com<ArrowUpRight size={14}/></a><a href="https://www.instagram.com/praneethkandukuriii/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[#e5c99e]"><FaInstagram size={16} className="text-[#c6a875]"/>@praneethkandukuriii<ArrowUpRight size={14}/></a><p className="flex items-center gap-3"><MapPin size={16} className="text-[#c6a875]"/>Based in India · available to travel</p></div>
            </div>
            <form className="grid content-start gap-x-8 gap-y-8 sm:grid-cols-2" onSubmit={handleSubmit}>
              <label className={labelClass}>Your name<input className={inputClass} type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required/></label>
              <label className={labelClass}>Email address<input className={inputClass} type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required/></label>
              <label className={labelClass}>What’s the story?<select className={`${inputClass} [color-scheme:dark]`} name="eventType" value={form.eventType} onChange={handleChange}><option value="">Choose a project type</option><option>Travel film</option><option>Live event</option><option>Brand story</option><option>Something else</option></select></label>
              <label className={labelClass}>When are you thinking?<input className={`${inputClass} [color-scheme:dark]`} type="date" name="date" value={form.date} onChange={handleChange}/></label>
              <label className={`${labelClass} sm:col-span-2`}>Tell me a little more<textarea className={`${inputClass} resize-y`} name="message" rows={4} value={form.message} onChange={handleChange} placeholder="The place, the feeling, the big idea…" required minLength={10}/></label>
              <input name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] size-0 opacity-0"/>
              {status === "error" && <p role="alert" className="text-sm text-red-300 sm:col-span-2">{error}</p>}
              {status === "sent" && <p role="status" className="text-sm text-emerald-300 sm:col-span-2">Got it — thank you. I’ll be in touch soon.</p>}
              <button type="submit" disabled={status === "sending"} className="inline-flex w-fit items-center gap-3 rounded-full bg-[#e5c99e] px-7 py-4 text-[10px] font-bold uppercase tracking-[.18em] text-[#171512] transition hover:bg-white disabled:opacity-50 sm:col-span-2">{status === "sending" ? "Sending…" : "Send the note"}<ArrowUpRight size={15}/></button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
