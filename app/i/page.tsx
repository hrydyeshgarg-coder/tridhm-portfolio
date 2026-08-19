import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { ExternalLink, Sparkle } from "lucide-react";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Light reskin of Design F — every content category gets its own labeled,
// distinctly-tinted box for maximum scannability and contrast.
const GREEN = "#0d9463";
const BG = "#f4f5f3";
const PANEL = "#ffffff";
const BORDER = "rgba(20,24,20,0.10)";
const INK = "#14181c";

const TINTS = {
  software: { bg: "#eef1fd", border: "rgba(79,70,229,0.3)", accent: "#4f46e5" },
  research: { bg: "#eafaf3", border: "rgba(13,148,99,0.3)", accent: GREEN },
  writing: { bg: "#fdf6ea", border: "rgba(184,118,63,0.35)", accent: "#b8763f" },
  service: { bg: "#fdeef0", border: "rgba(194,66,122,0.3)", accent: "#c2427a" },
  leadership: { bg: "#f3eefd", border: "rgba(124,58,237,0.3)", accent: "#7c3aed" },
  education: { bg: "#eef2f6", border: "rgba(71,85,105,0.3)", accent: "#475569" },
  trainings: { bg: "#eaf6fb", border: "rgba(3,133,171,0.3)", accent: "#0385ab" },
  bootcamps: { bg: "#fdf1e6", border: "rgba(194,97,13,0.3)", accent: "#c2610d" },
  clubs: { bg: "#fbf6e3", border: "rgba(161,98,7,0.3)", accent: "#a16207" },
  awards: { bg: "#fdf8ec", border: "rgba(146,64,14,0.3)", accent: "#92400e" },
};

function Panel({
  children,
  className = "",
  id,
  tint,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tint?: { bg: string; border: string };
}) {
  return (
    <div
      id={id}
      className={`rounded-lg border p-5 sm:p-6 ${className}`}
      style={{
        background: tint?.bg ?? PANEL,
        borderColor: tint?.border ?? BORDER,
        boxShadow: "0 1px 2px rgba(20,24,20,0.04)",
      }}
    >
      {children}
    </div>
  );
}

function Label({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-[11px] tracking-[0.15em] uppercase font-bold mb-4" style={{ color: color ?? "rgba(20,24,20,0.5)" }}>
      {children}
    </p>
  );
}

const AP_COURSES = [
  "Pre-Calculus", "Calculus AB", "Calculus BC", "Statistics", "Biology", "Chemistry",
  "Physics 1", "Computer Science", "Psychology", "Human Geography", "World History",
  "US History", "European History", "US Government", "Macroeconomics",
  "English Language & Composition", "English Literature & Composition",
];

const WORK = [
  { n: "01", tag: "IEEE PAPER", title: "Satellite Poverty CNN", desc: "CNN detecting poverty from satellite imagery.", tags: ["Python", "PyTorch", "CNN"], mock: "grid", href: "/i/research/satellite-poverty-cnn" },
  { n: "02", tag: "IEEE PAPER", title: "LSTM Market Forecast", desc: "Dual LSTM networks forecasting stock highs/lows.", tags: ["Python", "LSTM", "Pandas"], mock: "chart", href: "/i/research/lstm-market-forecast" },
  { n: "03", tag: "LIVE SITE", title: "DFW Community Hub", desc: "Civic platform live for the whole DFW metro.", tags: ["Next.js", "FastAPI", "Supabase"], mock: "map", href: "/i/engineering/dfw-community-hub" },
];

const RESEARCH_PAPERS = [
  {
    n: "01",
    title: "Harnessing Satellite Imagery with CNNs for Poverty Prediction",
    desc: "A CNN trained to recognize poverty indicators directly from satellite imagery of Africa, validated on unseen data.",
    tags: ["ICAIQSA 2024"],
    resultA: ["90%", "Accuracy"],
    resultB: ["70/30", "Train/Test"],
    href: "/i/research/satellite-poverty-cnn",
  },
  {
    n: "02",
    title: "Intraday Market Analysis and Forecasting with LSTM Networks",
    desc: "Two dedicated LSTM networks forecasting Infosys Ltd.'s daily high and low prices from a decade of trading history.",
    tags: ["AECE 2025"],
    resultA: ["0.954", "High R²"],
    resultB: ["0.947", "Low R²"],
    href: "/i/research/lstm-market-forecast",
  },
  {
    n: "03",
    title: "Federated Deep Learning for Privacy-Preserving Intrusion Detection",
    desc: "A federated learning architecture for network intrusion detection that never exposes raw client data.",
    tags: ["CONIT 2026"],
    resultA: ["99.68%", "Accuracy"],
    resultB: ["99.76%", "Cross-Val"],
    href: "/i/research/federated-intrusion-detection",
  },
];

const SKILLS: [string, number][] = [
  ["Python", 92],
  ["PyTorch / Deep Learning", 85],
  ["Data Analysis", 88],
  ["Full-Stack Development", 80],
];

const FOCUS = ["AI / ML Research", "Full-Stack Engineering", "Fiction Writing", "Civic Technology", "Community Leadership"];

const SOURCES = [
  { label: "IEEE Xplore Profile", href: "https://ieeexplore.ieee.org/author/163333461938359" },
  { label: "Abandoned and Left Behind", href: "https://www.amazon.com/Abandoned-Left-Behind-action-adventure-novel/dp/B0D571N8TC" },
  { label: "DFW Community Hub", href: "https://www.dfwcomp.org" },
];

const COMMUNITY_SERVICE = [
  { org: "Roar 4 Change — Shelter Coordinator", date: "Jul 2023 – Dec 2025", desc: "2.5 years supporting homeless shelters across multiple DFW cities — intake, supplies, and resident support." },
];

const LEADERSHIP = [
  { org: "Rotary Youth Leadership Awards", date: "Jun 2026", desc: "Intensive week-long leadership and communication program." },
  { org: "Denton County Junior Historians", date: "Sep 2025 – May 2027", desc: "Curated museum exhibits and researched county archives." },
  { org: "Flower Mound Leadership Program", date: "Aug 2026 – Apr 2027", desc: "Team management, accountability, and goal-setting." },
  { org: "Flower Mound High School Student Council", date: "Sep 2023 – Jan 2024", desc: "Contributed event ideas and helped organize school events, including the Flower Mound Showdown." },
];

const TRAININGS = [
  { org: "UT Dallas K-12 Outreach — AI Deep Dive", date: "Jun – Aug 2025", desc: "8-week structured program — neural networks, CNNs, greedy algorithms, trained in PyTorch, Pandas, NumPy, scikit-learn." },
  { org: "Code2College", date: "Jun 2026 – Present", desc: "Self-paced Python course — three independent projects completed." },
];

const BOOTCAMPS = [
  { org: "University of Houston–Victoria Data Science Bootcamp", date: "Jun 2024", desc: "CNNs, deep neural networks, NLP, computer vision, and Big Data fundamentals in Python." },
  { org: "The Coding School — AI & Big Data Camp", date: "Jul 2024", desc: "Applied scikit-learn and foundational AI modeling techniques." },
];

const CLUBS = ["Model UN", "FMHS Computer Science Club", "FMHS STEM Club", "Schoolhouse Dialogues", "FMHS Band"];

const AWARDS = [
  { label: "National Honor Society", date: "2026" },
  { label: "AP Scholar with Distinction", date: "2025 & 2026" },
  { label: "Jammin' Jags — Teacher Nomination", date: "2024 & 2025" },
];

function MockPreview({ type }: { type: string }) {
  if (type === "chart") {
    return (
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <polyline points="0,32 15,28 30,30 45,15 60,20 75,8 100,12" fill="none" stroke={GREEN} strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "map") {
    return (
      <div className="w-full h-full flex flex-col gap-1.5 justify-center px-3">
        <div className="h-1.5 rounded-full bg-[#6366f1]/60 w-3/4" />
        <div className="h-1.5 rounded-full bg-[#6366f1]/35 w-1/2" />
        <div className="h-1.5 rounded-full bg-[#6366f1]/45 w-2/3" />
      </div>
    );
  }
  return (
    <div className="w-full h-full grid grid-cols-6 grid-rows-3 gap-0.5 p-2">
      {[...Array(18)].map((_, i) => (
        <div key={i} className="rounded-[1px]" style={{ background: GREEN, opacity: ((i * 37) % 10) / 15 + 0.15 }} />
      ))}
    </div>
  );
}

export default function DesignI() {
  return (
    <div className={`${mono.className} min-h-screen`} style={{ background: BG, color: INK }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 pb-10">
        {/* Top nav */}
        <div className="flex items-center justify-between mb-4 px-1 flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded flex items-center justify-center font-bold text-xs" style={{ background: GREEN, color: "#ffffff" }}>TG</div>
            <span className="font-semibold text-sm">TRIDHM GARG</span>
            <span className="text-[11px] opacity-50 hidden sm:inline">AI_RESEARCHER · AUTHOR</span>
          </div>
          <div className="flex gap-4 sm:gap-5 text-[10px] sm:text-[11px] opacity-70 flex-wrap">
            <a href="#education" className="hover:opacity-100" style={{ color: TINTS.education.accent }}>EDUCATION</a>
            <a href="#software" className="hover:opacity-100" style={{ color: TINTS.software.accent }}>SOFTWARE</a>
            <a href="#research" className="hover:opacity-100" style={{ color: TINTS.research.accent }}>RESEARCH</a>
            <a href="#writing" className="hover:opacity-100" style={{ color: TINTS.writing.accent }}>WRITING</a>
            <a href="#service" className="hover:opacity-100" style={{ color: TINTS.service.accent }}>SERVICE</a>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-4">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            <Panel>
              <p className="text-[11px] opacity-45 mb-1">&gt; INITIALIZING_PORTFOLIO.EXE</p>
              <p className="text-[11px] mb-6 font-semibold" style={{ color: GREEN }}>&gt; STATUS: ONLINE</p>
              <div className="grid sm:grid-cols-[1.3fr_0.9fr] gap-6 items-center">
                <div>
                  <h1 className="text-2xl sm:text-[28px] font-bold leading-[1.15] mb-4">
                    Building AI systems <span style={{ color: GREEN }}>and telling stories.</span>
                  </h1>
                  <p className="text-[13px] leading-relaxed opacity-70 mb-6">
                    Rising senior researching applied AI, writing published fiction, and shipping software real people use.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <a href="#research" className="text-[12px] font-semibold px-4 py-2 rounded border" style={{ borderColor: GREEN, color: GREEN }}>VIEW_RESEARCH →</a>
                    <Link href="/i/writing/abandoned-and-left-behind" className="text-[12px] font-semibold px-4 py-2 rounded border opacity-70" style={{ borderColor: BORDER }}>READ_NOVEL</Link>
                  </div>
                </div>
                <div className="aspect-square rounded-lg flex items-center justify-center text-4xl font-bold" style={{ background: "linear-gradient(135deg,#e6f5ee,#f4f5f3)", border: `1px solid ${BORDER}`, color: GREEN }}>TG</div>
              </div>
            </Panel>

            {/* Education — own box */}
            <div id="education">
              <Label color={TINTS.education.accent}>▤ EDUCATION</Label>
              <Panel tint={TINTS.education}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                  <h4 className="text-[14px] font-semibold">Flower Mound High School</h4>
                  <span className="text-[11px] opacity-55">Aug 2023 – May 2027</span>
                </div>
                <p className="text-[12px] opacity-70 mb-4">4.575 weighted GPA · 17 AP courses</p>
                <div className="flex flex-wrap gap-1.5">
                  {AP_COURSES.map((c) => (
                    <span key={c} className="text-[9.5px] px-2 py-1 rounded" style={{ background: "rgba(71,85,105,0.1)", color: TINTS.education.accent }}>
                      AP {c}
                    </span>
                  ))}
                </div>
              </Panel>
            </div>

            <div>
              <Label>// SELECTED_WORK</Label>
              <div className="grid sm:grid-cols-3 gap-3">
                {WORK.map((w) => (
                  <Link key={w.n} href={w.href} className="block">
                    <Panel className="!p-4 h-full transition-colors hover:!border-[#0d946377]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] opacity-45">{w.n}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium" style={{ background: `${GREEN}18`, color: GREEN }}>{w.tag}</span>
                      </div>
                      <div className="h-16 rounded mb-3 overflow-hidden border" style={{ borderColor: BORDER, background: "#f0f2ef" }}>
                        <MockPreview type={w.mock} />
                      </div>
                      <h3 className="text-[13px] font-semibold mb-1">{w.title}</h3>
                      <p className="text-[11px] opacity-60 leading-relaxed mb-3">{w.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {w.tags.map((t) => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded opacity-70" style={{ background: "rgba(20,24,20,0.06)" }}>{t}</span>
                        ))}
                      </div>
                    </Panel>
                  </Link>
                ))}
              </div>
            </div>

            {/* Community Service — own box */}
            <div>
              <Label color={TINTS.service.accent}>♥ COMMUNITY_SERVICE</Label>
              <Panel tint={TINTS.service} className="!p-0 overflow-hidden">
                <div className="flex flex-col divide-y" style={{ borderColor: TINTS.service.border }}>
                  {COMMUNITY_SERVICE.map((s) => (
                    <div key={s.org} className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                        <h4 className="text-[13px] font-semibold">{s.org}</h4>
                        <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                      </div>
                      <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Leadership — own box */}
            <div id="service">
              <Label color={TINTS.leadership.accent}>◆ LEADERSHIP</Label>
              <Panel tint={TINTS.leadership} className="!p-0 overflow-hidden">
                <div className="flex flex-col divide-y" style={{ borderColor: TINTS.leadership.border }}>
                  {LEADERSHIP.map((s) => (
                    <div key={s.org} className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                        <h4 className="text-[13px] font-semibold">{s.org}</h4>
                        <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                      </div>
                      <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Trainings — own box */}
            <div>
              <Label color={TINTS.trainings.accent}>▲ TRAININGS</Label>
              <Panel tint={TINTS.trainings} className="!p-0 overflow-hidden">
                <div className="flex flex-col divide-y" style={{ borderColor: TINTS.trainings.border }}>
                  {TRAININGS.map((s) => (
                    <div key={s.org} className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                        <h4 className="text-[13px] font-semibold">{s.org}</h4>
                        <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                      </div>
                      <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Bootcamps — own box */}
            <div>
              <Label color={TINTS.bootcamps.accent}>▲▲ BOOTCAMPS</Label>
              <Panel tint={TINTS.bootcamps} className="!p-0 overflow-hidden">
                <div className="flex flex-col divide-y" style={{ borderColor: TINTS.bootcamps.border }}>
                  {BOOTCAMPS.map((s) => (
                    <div key={s.org} className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                        <h4 className="text-[13px] font-semibold">{s.org}</h4>
                        <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                      </div>
                      <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Panel>
                <Label>&gt; BUILD_LOG</Label>
                <p className="text-[11px] leading-6 opacity-60">
                  [2024] Published first IEEE paper.<br />
                  [2024] Self-published debut novel.<br />
                  [2025] Published second IEEE paper.<br />
                  [2026] Shipped dfwcomp.org.<br />
                  [2026] Published third IEEE paper.
                </p>
              </Panel>
              <Panel>
                <Label>&gt; TECH_STACK</Label>
                <div className="flex flex-wrap gap-2 text-[11px] opacity-75">
                  {["Python", "PyTorch", "Pandas", "Next.js", "FastAPI", "SQL"].map((t) => (
                    <span key={t} className="px-2 py-1 rounded border" style={{ borderColor: BORDER }}>{t}</span>
                  ))}
                </div>
              </Panel>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Software Creation — own box */}
            <div id="software">
              <Label color={TINTS.software.accent}>▣ SOFTWARE_CREATION</Label>
              <Panel tint={TINTS.software}>
                <Link href="/i/engineering/dfw-community-hub" className="grid sm:grid-cols-[1fr_auto] gap-4 items-start group">
                  <div>
                    <h4 className="text-[14px] font-semibold mb-1.5 group-hover:opacity-70">DFW Community Hub</h4>
                    <p className="text-[12px] opacity-70 leading-relaxed max-w-md">
                      A civic platform live for the whole DFW metroplex — issue reporting,
                      family support listings, and public resources for real residents.
                    </p>
                  </div>
                  <ExternalLink size={15} style={{ color: TINTS.software.accent }} className="shrink-0 mt-1" />
                </Link>
              </Panel>
            </div>

            {/* IEEE Research — own box */}
            <div id="research">
              <Label color={TINTS.research.accent}>◈ RESEARCH</Label>
              <Panel tint={TINTS.research}>
                <div className="flex flex-col divide-y" style={{ borderColor: TINTS.research.border }}>
                  {RESEARCH_PAPERS.map((c) => (
                    <Link key={c.n} href={c.href} className="grid sm:grid-cols-[auto_1fr_auto] gap-4 items-start py-5 first:pt-0 last:pb-0 group">
                      <span className="text-[11px] opacity-40 pt-1">{c.n}</span>
                      <div>
                        <h4 className="text-[13.5px] font-semibold mb-1.5 leading-snug group-hover:opacity-70">{c.title}</h4>
                        <p className="text-[11.5px] opacity-65 leading-relaxed mb-2 max-w-md">{c.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {c.tags.map((t) => (
                            <span key={t} className="text-[9px] px-1.5 py-0.5 rounded opacity-70" style={{ background: "rgba(20,24,20,0.06)" }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex sm:flex-col gap-4 sm:gap-2 shrink-0 text-right sm:items-end">
                        <div>
                          <p className="text-[13px] font-bold" style={{ color: TINTS.research.accent }}>{c.resultA[0]}</p>
                          <p className="text-[9px] opacity-50">{c.resultA[1]}</p>
                        </div>
                        <div>
                          <p className="text-[13px] font-bold" style={{ color: TINTS.research.accent }}>{c.resultB[0]}</p>
                          <p className="text-[9px] opacity-50">{c.resultB[1]}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Writing — own box */}
            <div id="writing">
              <Label color={TINTS.writing.accent}>✎ WRITING</Label>
              <Panel tint={TINTS.writing}>
                <Link href="/i/writing/abandoned-and-left-behind" className="block group mb-4">
                  <h4 className="text-[14px] font-semibold mb-1.5 group-hover:opacity-70">Abandoned and Left Behind</h4>
                  <p className="text-[12px] opacity-70 leading-relaxed max-w-md">
                    A 165-page self-published action-adventure novel set in 1969 — two men
                    racing the FBI to find their way home. 4.0★ on Amazon.
                  </p>
                </Link>
                <p className="text-[11px] opacity-55 max-w-md">
                  A second manuscript, <em>Hell on Planet B</em>, was completed in 2024
                  and is not yet published.
                </p>
              </Panel>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Panel>
                <Label>&lt;/&gt; RESEARCH_SKILLS</Label>
                <div className="flex flex-col gap-3">
                  {SKILLS.map(([label, val]) => (
                    <div key={label}>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="opacity-65">{label}</span>
                        <span style={{ color: GREEN }} className="font-medium">{val}%</span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(20,24,20,0.08)" }}>
                        <div className="h-full rounded-full" style={{ width: `${val}%`, background: GREEN }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel>
                <Label>◇ FOCUS_AREAS</Label>
                <div className="flex flex-col gap-2.5 text-[12px] opacity-75">
                  {FOCUS.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: GREEN }} />
                      {f}
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel>
                <Label>⊞ VERIFIED_SOURCES</Label>
                <div className="flex flex-col gap-3 text-[11.5px]">
                  {SOURCES.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between opacity-75 hover:opacity-100">
                      {s.label}
                      <ExternalLink size={11} />
                    </a>
                  ))}
                </div>
              </Panel>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Clubs — own box */}
              <div>
                <Label color={TINTS.clubs.accent}>* CLUBS</Label>
                <Panel tint={TINTS.clubs}>
                  <div className="flex flex-wrap gap-2">
                    {CLUBS.map((a) => (
                      <span key={a} className="text-[11px] px-2.5 py-1.5 rounded" style={{ background: "rgba(161,98,7,0.1)", color: TINTS.clubs.accent }}>{a}</span>
                    ))}
                  </div>
                </Panel>
              </div>
              {/* Awards — own box */}
              <div>
                <Label color={TINTS.awards.accent}>★ AWARDS</Label>
                <Panel tint={TINTS.awards}>
                  <div className="flex flex-col gap-2.5">
                    {AWARDS.map((a) => (
                      <div key={a.label} className="flex items-center justify-between text-[11.5px]">
                        <span className="opacity-85">{a.label}</span>
                        <span className="opacity-50 text-[10px]">{a.date}</span>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>
            </div>

            <Panel className="relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.10] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`, backgroundSize: "14px 14px" }} />
              <p className="text-[11px] opacity-45 mb-2">&gt; STATUS</p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight relative z-10">
                Building what&apos;s <span style={{ color: GREEN }}>next.</span>
              </h3>
            </Panel>

            <div className="flex items-center justify-between px-1 text-[11px] opacity-45">
              <span className="flex items-center gap-1.5"><Sparkle size={12} /> // THANKS FOR VISITING</span>
              <span>FLOWER MOUND, TX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
