import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/tech", label: "Tech Profile" },
];

function SiteNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const linkClass = (path) => `text-white transition-opacity hover:opacity-65 ${pathname === path ? "opacity-100" : "opacity-75"}`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-5 py-5 text-white sm:px-10 sm:py-7" aria-label="Main navigation">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <Link to="/" aria-label="Stories By Praneeth home" onClick={() => setOpen(false)}>
          <BrandMark className="text-xl sm:text-2xl" accentClassName="text-white" />
        </Link>
        <div className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[.18em] lg:flex">
          {links.map((item) => <Link key={item.to} to={item.to} className={linkClass(item.to)}>{item.label}</Link>)}
          <Link to="/contact" className="rounded-full border border-white/75 px-5 py-3 text-white transition hover:bg-white hover:text-black">Book now <span aria-hidden="true">↗</span></Link>
        </div>
        <button type="button" className="grid size-11 place-items-center text-white lg:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className="absolute inset-x-0 top-full flex flex-col gap-6 bg-[#0b0b0a] px-6 py-7 text-sm font-medium uppercase tracking-[.16em] text-white lg:hidden">
        {links.map((item) => <Link key={item.to} to={item.to} className={linkClass(item.to)} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link to="/contact" className="text-white" onClick={() => setOpen(false)}>Book now ↗</Link>
      </div>}
    </nav>
  );
}

export default SiteNav;
