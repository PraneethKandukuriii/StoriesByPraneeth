import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import BrandMark from "../components/BrandMark";

function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#090909] px-5 pb-20 pt-28 text-center">
          <video autoPlay muted loop playsInline preload="auto" aria-hidden="true" className="absolute inset-0 -z-20 size-full object-cover">
            <source src="https://res.cloudinary.com/dz0gsqsrk/video/upload/vc_h264,f_mp4/v1790460050/heroIntro_phio4d.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,.28)_0%,rgba(0,0,0,.12)_38%,rgba(0,0,0,.74)_100%)]" />
          <div className="max-w-5xl animate-[fade-in_1s_ease-out_both]">
            <p className="mb-7 text-[10px] font-semibold tracking-[.38em] text-white sm:text-xs">CINEMATIC FILMS · VISUAL STORIES</p>
            <h1 aria-label="Stories By Praneeth" className="leading-[.94]"><BrandMark className="text-[clamp(3.1rem,10vw,8rem)] text-white" accentClassName="text-white" /></h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white sm:text-xl">I turn the places you go and the moments you feel into films you can return to.</p>
            <Link to="/portfolio" className="mt-10 inline-flex items-center gap-3 rounded-full border border-white px-7 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-white transition hover:bg-white hover:text-black">Step into the stories <ArrowUpRight size={15} /></Link>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}

export default Home;
