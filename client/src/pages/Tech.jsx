import { useState } from "react";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, GraduationCap } from "lucide-react";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

const projects = [
  { name: "AskDocs AI", category: "GenAI", stack: "MERN, FastAPI, RAG", summary: "AI document assistant for PDF, DOCX, PPTX, TXT, CSV, and XLSX files.", detail: "Built document parsing, semantic chunking, embeddings, FAISS search, JWT authentication, and grounded answers with Google Gemini.", github: "https://github.com/PraneethKandukuriii/AskDocs-AI", demo: "https://askdocsai.vercel.app" },
  { name: "ResumeX", category: "Full stack", stack: "MERN, spaCy, regex", summary: "ATS resume analyzer and resume builder with live preview and PDF export.", detail: "Uses spaCy NER and regex to extract structured resume fields, identify keyword gaps, and provide actionable recommendations.", github: "https://github.com/PraneethKandukuriii/resumeX" },
  { name: "SnapHire", category: "Full stack", stack: "MERN, Stripe", summary: "Freelance booking platform for photographers and video creators.", detail: "Includes creator discovery, availability scheduling, JWT role-based authentication, Stripe payments, and booking management.", github: "https://github.com/PraneethKandukuriii/SnapHire" },
];

const skillGroups = [
  ["Languages", "Java · Python · SQL · JavaScript"],
  ["Frontend", "React · HTML · CSS · Tailwind CSS"],
  ["Backend", "Node.js · Express · FastAPI · REST APIs"],
  ["AI / ML", "RAG · LLMs · LangChain · Gemini · Sentence Transformers · Vector Search"],
  ["Databases", "MongoDB · PostgreSQL · MySQL"],
  ["Tools", "Git · Docker · Linux · GCP · CI/CD · Postman"],
];

function Tech() {
  const [expanded, setExpanded] = useState("");

  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[#0b0b0a] px-5 pb-16 pt-32 text-white sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-5xl">
          <section className="grid gap-8 border-b border-white/15 pb-10 sm:grid-cols-[1fr_220px] sm:items-center">
            <div>
              <p className="text-xs text-white/55">TECH PROFILE · HYDERABAD, INDIA</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Praneeth Kumar Kandukuri</h1>
              <p className="mt-3 text-base text-white/75">Full Stack Developer · GenAI</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">I build full-stack web applications and AI-powered tools. My work includes React interfaces, REST APIs, databases, document processing, retrieval, and LLM integrations. I enjoy making useful technology clear and easy to use. I’m eager to learn new technologies and open to internship and full-time roles.</p>
              <div className="mt-5 flex gap-5 text-sm"><a href="https://github.com/PraneethKandukuriii" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/75 underline underline-offset-4 hover:text-white">GitHub <ArrowUpRight size={13}/></a><a href="https://linkedin.com/in/praneethkandukuriii" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/75 underline underline-offset-4 hover:text-white">LinkedIn <ArrowUpRight size={13}/></a></div>
            </div>
            <img src="/praneeth-profile.png" alt="Praneeth Kumar Kandukuri" className="mx-auto h-64 w-52 border border-white/15 bg-[#151515] object-contain object-bottom sm:h-72 sm:w-full" />
          </section>

          <section className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[180px_1fr]">
            <h2 className="flex items-center gap-2 text-sm font-medium"><BriefcaseBusiness size={16}/> Experience</h2>
            <div><div className="flex flex-col justify-between gap-1 sm:flex-row"><h3 className="text-base font-medium">Full Stack Developer Intern · CodeXConquer</h3><p className="text-sm text-white/50">Jan – Mar 2026</p></div><p className="mt-2 text-sm leading-6 text-white/60">Worked with a cross-functional team in an Agile environment. Designed, tested, and optimized 10+ REST API endpoints, improving response efficiency by 25%.</p></div>
          </section>

          <section className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[180px_1fr]">
            <h2 className="flex items-center gap-2 text-sm font-medium"><GraduationCap size={17}/> Education</h2>
            <div><h3 className="text-base font-medium">B.Tech in Computer Science & Engineering</h3><p className="mt-1 text-sm text-white/60">Parul University · 2022–2026 · CGPA 8.19 / 10</p></div>
          </section>

          <section className="border-b border-white/15 py-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div><h2 className="text-lg font-semibold">Projects</h2><p className="mt-1 text-sm text-white/50">A few things I’ve built.</p></div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {projects.map((project) => <article key={project.name} className="border border-white/15 bg-[#111] p-5 transition-colors hover:border-white/35 sm:p-6">
                <div className="flex items-center justify-between text-xs text-white/45"><span>0{projects.indexOf(project) + 1} / 0{projects.length}</span><span>{project.category}</span></div>
                <h3 className="mt-5 text-xl font-semibold">{project.name}</h3>
                <p className="mt-1 text-xs text-white/45">{project.stack}</p>
                <p className="mt-4 text-sm leading-6 text-white/65">{project.summary}</p>
                <button type="button" aria-expanded={expanded === project.name} onClick={() => setExpanded(expanded === project.name ? "" : project.name)} className="mt-4 text-sm text-white/80 underline underline-offset-4 hover:text-white">{expanded === project.name ? "Hide details" : "Project details"}</button>
                {expanded === project.name && <p className="mt-3 border-l border-white/25 pl-3 text-sm leading-6 text-white/60">{project.detail}</p>}
                <div className="mt-5 flex gap-5 border-t border-white/10 pt-4 text-sm"><a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/80 underline underline-offset-4 hover:text-white">GitHub <ArrowUpRight size={13}/></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-white/80 underline underline-offset-4 hover:text-white">Live demo <ArrowUpRight size={13}/></a>}</div>
              </article>)}
            </div>
          </section>

          <section className="grid gap-4 border-b border-white/15 py-8 sm:grid-cols-[180px_1fr]"><h2 className="text-sm font-medium">Tech skills</h2><dl className="space-y-3">{skillGroups.map(([group, list]) => <div key={group} className="grid gap-1 sm:grid-cols-[130px_1fr]"><dt className="text-sm text-white/45">{group}</dt><dd className="text-sm leading-6 text-white/75">{list}</dd></div>)}</dl></section>

          <section className="grid gap-4 py-8 sm:grid-cols-[180px_1fr]"><h2 className="flex items-center gap-2 text-sm font-medium"><BadgeCheck size={16}/> Certifications</h2><ul className="space-y-3 text-sm leading-6 text-white/70"><li><a href="https://smartinterviews.in/certificate/cdb9a4bd" target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 hover:text-white/75">Smart Coder · Smart Interviews <ArrowUpRight size={12} className="inline"/></a> · 300+ DSA problems solved</li><li><a href="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs19/Course/NPTEL24CS19S116960056830330598.pdf" target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 hover:text-white/75">NPTEL Computer Networks & Internet Protocol <ArrowUpRight size={12} className="inline"/></a> · Elite, 76% · IIT Kharagpur</li><li><a href="https://drive.google.com/file/d/1PPixNJ6ak3YgZXENLXaKK_ko1f1G0aqf/view?usp=share_link" target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 hover:text-white/75">NPTEL Introduction to IoT <ArrowUpRight size={12} className="inline"/></a> · Top 2% · IIT Kharagpur</li></ul></section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Tech;
