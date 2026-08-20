import { Inter, Fraunces } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroIllustration, ResearchIllustration, WritingIllustration, EngineeringIllustration } from "@/components/JIllustrations";
import { GradCapArt } from "@/components/StudentArt";

const inter = Inter({ subsets: ["latin"] });
const display = Fraunces({ subsets: ["latin"], weight: ["700", "900"] });

const RED = "#c0292f";
const CREAM = "#fdf4ea";
const INK = "#1a1a1a";
const MUTED = "rgba(26,26,26,0.6)";

const NAV = [
  { href: "#education", label: "Education" },
  { href: "#research", label: "Research" },
  { href: "#writing", label: "Writing" },
  { href: "#engineering", label: "Engineering" },
  { href: "#service", label: "Service" },
];

const AP_COURSES = [
  "Pre-Calculus", "Calculus AB", "Calculus BC", "Statistics", "Biology", "Chemistry",
  "Physics 1", "Computer Science", "Psychology", "Human Geography", "World History",
  "US History", "European History", "US Government", "Macroeconomics",
  "English Language & Composition", "English Literature & Composition",
];

const RESEARCH = [
  {
    n: "01",
    title: "Satellite Imagery + CNNs for Poverty Prediction",
    desc: "A CNN trained to recognize poverty indicators directly from satellite imagery of Africa.",
    stat: "90%",
    statLabel: "Accuracy",
    href: "/j/research/satellite-poverty-cnn",
  },
  {
    n: "02",
    title: "Intraday Market Forecasting with LSTM Networks",
    desc: "Two LSTM networks forecasting a decade of daily stock highs and lows.",
    stat: "0.954",
    statLabel: "R² Score",
    href: "/j/research/lstm-market-forecast",
  },
  {
    n: "03",
    title: "Federated Deep Learning for Intrusion Detection",
    desc: "A privacy-preserving federated learning architecture for network security.",
    stat: "99.68%",
    statLabel: "Accuracy",
    href: "/j/research/federated-intrusion-detection",
  },
];

const COMMUNITY_SERVICE = [
  { org: "Roar 4 Change — Shelter Coordinator", date: "Jul 2023 – Dec 2025", featured: true, desc: "2.5 years supporting homeless shelters across multiple DFW cities." },
];

const LEADERSHIP = [
  { org: "Rotary Youth Leadership Awards", date: "Jun 2026", desc: "Intensive leadership and communication program." },
  { org: "Denton County Junior Historians", date: "Sep 2025 – May 2027", desc: "Curated museum exhibits and county archive research." },
  { org: "Flower Mound Leadership Program", date: "Aug 2026 – Apr 2027", desc: "Team management, accountability, goal-setting." },
  { org: "Flower Mound High School Student Council", date: "Sep 2023 – Jan 2024", desc: "Contributed event ideas and helped organize school events." },
];

const CREDENTIALS = [
  { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/author/163333461938359" },
  { label: "Amazon Books", href: "https://www.amazon.com/Abandoned-Left-Behind-action-adventure-novel/dp/B0D571N8TC" },
  { label: "dfwcomp.org", href: "https://www.dfwcomp.org" },
];

const CLUBS = ["Model UN", "FMHS Computer Science Club", "FMHS STEM Club", "Schoolhouse Dialogues", "FMHS Band"];
const TRAININGS = ["UT Dallas AI Deep Dive (2025)", "Code2College (2026–Present)"];
const BOOTCAMPS = ["Houston–Victoria Data Science Bootcamp (2024)", "Coding School AI & Big Data Camp (2024)"];
const AWARDS = [
  { label: "National Honor Society", date: "2026" },
  { label: "AP Scholar with Distinction", date: "2025 & 2026" },
  { label: "Jammin' Jags — Teacher Nomination", date: "2024 & 2025" },
];

export default function DesignJ() {
  return (
    <div className={`${inter.className} min-h-screen`} style={{ background: CREAM, color: INK }}>
      {/* Nav */}
      <header className="border-b-2" style={{ borderColor: "rgba(26,26,26,0.1)" }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 h-[76px] flex items-center justify-between">
          <span className={`${display.className} font-black text-xl`} style={{ color: RED }}>Tridhm Garg</span>
          <nav className="hidden sm:flex gap-8 text-[14px] font-semibold" style={{ color: MUTED }}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:opacity-70">{n.label}</a>
            ))}
          </nav>
          <Link
            href="/j/writing/abandoned-and-left-behind"
            className="text-[13px] font-bold px-5 py-2.5 rounded-full text-white"
            style={{ background: RED }}
          >
            Read the Novel
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 py-14 sm:py-20 grid sm:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[13px] tracking-[0.15em] uppercase font-black mb-5" style={{ color: RED }}>
            Portfolio · Class of 2027
          </p>
          <h1 className={`${display.className} font-black leading-[1.02] tracking-tight mb-6`} style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", color: RED }}>
            Building the future, one experiment at a time.
          </h1>
          <p className="text-[16px] leading-relaxed max-w-md mb-8" style={{ color: MUTED }}>
            Rising senior at Flower Mound High School — three published IEEE research
            papers, a published novel, and a civic platform live for the entire DFW
            metro. 4.575 weighted GPA across 17 AP courses.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="#research" className="inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3 rounded-full text-white" style={{ background: RED }}>
              View Research <ArrowUpRight size={15} />
            </a>
            <a href="#engineering" className="inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3 rounded-full" style={{ border: `2px solid ${INK}`, color: INK }}>
              See dfwcomp.org
            </a>
          </div>
        </div>
        <div className="rounded-[28px] overflow-hidden aspect-square shadow-xl">
          <HeroIllustration />
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-y-2" style={{ borderColor: "rgba(26,26,26,0.1)" }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-6 flex flex-wrap items-center gap-x-10 gap-y-3">
          <span className="text-[12px] font-bold uppercase tracking-wide" style={{ color: MUTED }}>Verified —</span>
          {CREDENTIALS.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className={`${display.className} font-black text-lg hover:opacity-60`}>
              {c.label}
            </a>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <p className="text-[13px] tracking-[0.15em] uppercase font-black mb-8" style={{ color: RED }}>Education</p>
        <div className="rounded-2xl p-7 sm:p-9 grid sm:grid-cols-[auto_1fr] gap-8 items-start" style={{ background: "#ffffff", border: "2px solid rgba(26,26,26,0.08)" }}>
          <div className="w-20 h-20 shrink-0 hidden sm:block">
            <GradCapArt color={RED} />
          </div>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
              <h3 className="text-lg sm:text-xl font-bold">Flower Mound High School</h3>
              <span className="text-[13px] opacity-50">Aug 2023 – May 2027</span>
            </div>
            <p className="text-[14px] mb-5" style={{ color: MUTED }}>4.575 weighted GPA · 17 AP courses</p>
            <div className="flex flex-wrap gap-2">
              {AP_COURSES.map((c) => (
                <span key={c} className="text-[12px] px-2.5 py-1 rounded-full" style={{ background: "rgba(192,41,47,0.08)", color: RED }}>AP {c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research — Selected Publications */}
      <section id="research" className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid sm:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="sm:sticky sm:top-10">
            <h2 className={`${display.className} font-black leading-[1.05]`} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: RED }}>
              SELECTED<br />RESEARCH
            </h2>
            <div className="rounded-2xl overflow-hidden mt-6 max-w-[260px]">
              <ResearchIllustration />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {RESEARCH.map((r) => (
              <Link key={r.n} href={r.href} className="block group rounded-2xl p-6 sm:p-7" style={{ background: "#ffffff", border: "2px solid rgba(26,26,26,0.08)" }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[12px] font-bold opacity-40 mb-2">PAPER {r.n}</p>
                    <h3 className="text-lg font-bold mb-2 group-hover:opacity-70">{r.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>{r.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`${display.className} font-black text-2xl`} style={{ color: RED }}>{r.stat}</p>
                    <p className="text-[10px] uppercase font-bold opacity-40">{r.statLabel}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="py-16 sm:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 grid sm:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="text-[13px] tracking-[0.15em] uppercase font-black mb-4" style={{ color: RED }}>Writing</p>
            <h2 className={`${display.className} font-black leading-[1.1] mb-5`} style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              &ldquo;Will they find a way back home?&rdquo;
            </h2>
            <p className="text-[15px] leading-relaxed max-w-lg mb-6" style={{ color: MUTED }}>
              <strong style={{ color: INK }}>Abandoned and Left Behind</strong> — a
              165-page self-published action-adventure novel set in 1969, researched
              against real WWII and Cold War history. 4.0★ on Amazon. A second
              manuscript, <em>Hell on Planet B</em>, was completed in 2024 and is not
              yet published.
            </p>
            <Link href="/j/writing/abandoned-and-left-behind" className="inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3 rounded-full text-white" style={{ background: RED }}>
              Read the Full Story <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="rounded-[28px] overflow-hidden shadow-lg">
            <WritingIllustration />
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section id="engineering" className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16 sm:py-20 grid sm:grid-cols-[1fr_1.3fr] gap-10 items-center">
        <div className="rounded-[28px] overflow-hidden shadow-lg order-2 sm:order-1">
          <EngineeringIllustration />
        </div>
        <div className="order-1 sm:order-2">
          <p className="text-[13px] tracking-[0.15em] uppercase font-black mb-4" style={{ color: RED }}>Engineering</p>
          <h2 className={`${display.className} font-black leading-[1.1] mb-5`} style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
            DFW Community Hub
          </h2>
          <p className="text-[15px] leading-relaxed max-w-lg mb-6" style={{ color: MUTED }}>
            A civic platform live for the whole DFW metroplex — issue reporting,
            family support listings, and public resources for real residents. Built
            with Next.js, FastAPI, and Supabase, shipped and deployed in production.
          </p>
          <Link href="/j/engineering/dfw-community-hub" className="inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3 rounded-full text-white" style={{ background: RED }}>
            See the Platform <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* Community Service & Leadership */}
      <section id="service" className="py-16 sm:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <p className="text-[13px] tracking-[0.15em] uppercase font-black mb-4" style={{ color: RED }}>Community Service</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-16">
            {COMMUNITY_SERVICE.map((s) => (
              <div key={s.org} className="rounded-2xl p-6" style={{ background: RED, color: "#fff" }}>
                <h4 className="font-bold text-[15px] mb-2">{s.org}</h4>
                <p className="text-[12px] font-semibold opacity-70 mb-2">{s.date}</p>
                <p className="text-[13.5px] leading-relaxed opacity-90">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[13px] tracking-[0.15em] uppercase font-black mb-4" style={{ color: RED }}>Leadership</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {LEADERSHIP.map((s) => (
              <div key={s.org} className="rounded-2xl p-6" style={{ background: CREAM, border: "2px solid rgba(26,26,26,0.08)" }}>
                <h4 className="font-bold text-[15px] mb-2">{s.org}</h4>
                <p className="text-[12px] font-semibold opacity-60 mb-2">{s.date}</p>
                <p className="text-[13.5px] leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs / Trainings / Bootcamps / Awards strip */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 py-16 sm:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="text-[12px] tracking-[0.15em] uppercase font-black mb-5" style={{ color: RED }}>Clubs</p>
          <div className="flex flex-col gap-2">
            {CLUBS.map((c) => <p key={c} className="text-[14px]" style={{ color: MUTED }}>{c}</p>)}
          </div>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.15em] uppercase font-black mb-5" style={{ color: RED }}>Trainings</p>
          <div className="flex flex-col gap-2">
            {TRAININGS.map((c) => <p key={c} className="text-[14px]" style={{ color: MUTED }}>{c}</p>)}
          </div>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.15em] uppercase font-black mb-5" style={{ color: RED }}>Bootcamps</p>
          <div className="flex flex-col gap-2">
            {BOOTCAMPS.map((c) => <p key={c} className="text-[14px]" style={{ color: MUTED }}>{c}</p>)}
          </div>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.15em] uppercase font-black mb-5" style={{ color: RED }}>Awards</p>
          <div className="flex flex-col gap-2">
            {AWARDS.map((a) => (
              <p key={a.label} className="text-[14px]" style={{ color: MUTED }}>
                {a.label} <span className="opacity-60">({a.date})</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 py-10" style={{ borderColor: "rgba(26,26,26,0.1)" }}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 flex items-center justify-between text-[13px] font-semibold" style={{ color: MUTED }}>
          <span className={`${display.className} font-black text-lg`} style={{ color: RED }}>Tridhm Garg</span>
          <span>Flower Mound, Texas</span>
        </div>
      </footer>
    </div>
  );
}
