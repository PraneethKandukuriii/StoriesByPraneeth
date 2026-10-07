import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const scenes = [
  { id: "01", title: "A breathtaking view of white snow mountains", type: "PHOTO · MANALI", imageUrl: "https://res.cloudinary.com/dz0gsqsrk/image/upload/v1791415601/IMG_2189_grnjoj.jpg", alt: "Mountain landscape in Manali", shape: "aspect-[4/5]" },
  { id: "02", title: "Where the sea moves", type: "PHOTO · BEACH", imageUrl: "https://res.cloudinary.com/dz0gsqsrk/image/upload/v1791416063/IMG_0782_vqzmqr.jpg", alt: "Beach scene captured by Praneeth", shape: "aspect-[4/3]" },
  { id: "03", title: "After the rain", type: "CINEMATIC STILL · AFTER RAIN", imageUrl: "https://res.cloudinary.com/dz0gsqsrk/image/upload/v1791415317/IMG_6828_ey9eze.jpg", alt: "A girl with an umbrella among greenery after rain", shape: "aspect-[4/5]" },
  { id: "04", title: "A night full of music", type: "LIVE · MUSIC", imageUrl: "/concert-night.jpg", alt: "Singer performing beneath blue lights as the crowd watches", shape: "aspect-[4/5]" },
  { id: "05", title: "The stories you loved most", type: "INSTAGRAM · TOP CONTENT", imageUrl: "/top-content-performance.png", alt: "Instagram top content with 41 thousand, 6.9 thousand, and 2.3 thousand views", shape: "aspect-[3/2]", isScreenshot: true },
];

function Portfolio() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[#0b0b0a] px-5 pb-24 pt-36 text-[#f7f4ed] sm:px-10 sm:pt-44">
        <header className="mx-auto max-w-7xl border-b border-white/15 pb-10 sm:pb-14">
          <p className="text-[10px] font-semibold tracking-[.32em] text-white/55">A FILMMAKER’S POINT OF VIEW</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-[1.2fr_.8fr] sm:items-end">
            <h1 className="font-serif text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">I see the world<br/><span className="text-white/60">cinematically.</span></h1>
            <p className="max-w-sm text-base leading-7 text-white/60">A few moments from the mountains, the coast, and the city after the rain.</p>
          </div>
        </header>

        <section className="mx-auto mt-10 max-w-7xl" aria-label="Cinematic portfolio scenes">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">
            {scenes.map((scene) => <article key={scene.id}>
              <div className={`group relative overflow-hidden ${scene.isScreenshot ? "bg-white" : "bg-[#151515]"} ${scene.shape}`}>
                <img src={scene.imageUrl || `https://images.unsplash.com/${scene.image}?auto=format&fit=crop&w=1500&q=85`} alt={scene.alt} loading="lazy" className={`size-full ${scene.isScreenshot ? "object-contain" : "object-cover transition duration-700 group-hover:scale-[1.035]"}`} />
                {!scene.isScreenshot && <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />}
                <span className="absolute bottom-4 right-4 text-[10px] tracking-[.2em] text-white/65">{scene.id} / {String(scenes.length).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-3 text-base font-medium sm:text-lg">{scene.title}</h2>
              {scene.isScreenshot && <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-6 text-white/60">These are a few of the Instagram stories you watched and loved. Thank you for being part of every moment.</p><a href="https://www.instagram.com/praneethkandukuriii/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 border-b border-white/70 pb-2 text-xs font-semibold tracking-[.16em] transition hover:text-white/70">WATCH THE STORIES <span aria-hidden="true">↗</span></a></div>}
            </article>)}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl border-t border-white/15 py-12 sm:mt-28 sm:py-16" aria-label="Most-viewed Instagram stories">
          <p className="text-[10px] font-semibold tracking-[.28em] text-white/50">THANK YOU FOR WATCHING</p>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-.04em] sm:text-6xl">Your love keeps<br className="hidden sm:block"/> these stories alive.</h2>
            <a href="https://www.instagram.com/praneethkandukuriii/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 border-b border-white/70 pb-2 text-xs font-semibold tracking-[.16em] transition hover:border-white/40 hover:text-white/70">VIEW ON INSTAGRAM <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
