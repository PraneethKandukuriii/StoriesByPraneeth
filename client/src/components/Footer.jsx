import { ArrowUpRight, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import BrandMark from "./BrandMark";

function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_14%_5%,rgba(60,112,190,.42),transparent_45%),radial-gradient(ellipse_at_85%_95%,rgba(195,72,136,.34),transparent_48%),linear-gradient(180deg,#11101a,#080807)] px-5 py-12 text-center text-white sm:px-10 sm:py-16">
      <div className="relative mx-auto max-w-5xl">
        <p className="text-[9px] font-semibold tracking-[.38em] text-white/75">UNTIL THE NEXT FRAME</p>
        <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-.05em] sm:text-6xl">The story continues.</h2>
        <p className="mx-auto mt-4 text-sm text-white/70">Have a story in mind?</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:praneethkandukuriii@gmail.com" className="group flex min-w-60 items-center gap-4 border border-white/40 bg-black/20 px-4 py-3 text-left transition hover:border-white hover:bg-white/10"><Mail size={18}/><span className="flex-1"><span className="block text-[11px] text-white/60">Start a conversation</span><span className="mt-0.5 block text-sm">Email Praneeth</span></span><ArrowUpRight size={15} className="transition group-hover:-translate-y-1 group-hover:translate-x-1"/></a>
          <a href="https://www.instagram.com/praneethkandukuriii/" target="_blank" rel="noreferrer" className="group flex min-w-60 items-center gap-4 border border-white/40 bg-black/20 px-4 py-3 text-left transition hover:border-white hover:bg-white/10"><FaInstagram size={18}/><span className="flex-1"><span className="block text-[11px] text-white/60">Follow the journey</span><span className="mt-0.5 block text-sm">Instagram</span></span><ArrowUpRight size={15} className="transition group-hover:-translate-y-1 group-hover:translate-x-1"/></a>
        </div>
        <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-white/25 pt-4 text-[10px] text-white/65 sm:flex-row"><BrandMark className="text-lg"/><span>© 2026 · Praneeth</span></div>
      </div>
    </footer>
  );
}

export default Footer;
