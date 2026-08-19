import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { ExternalLink, Sparkle } from "lucide-react";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

const GREEN = "#3ddc84";
const BG = "#0a0c0f";
const PANEL = "#111418";
const BORDER = "rgba(255,255,255,0.09)";

function Panel({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`rounded-lg border p-5 sm:p-6 ${className}`}
      style={{ background: PANEL, borderColor: BORDER }}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.15em] uppercase opacity-45 mb-4">{children}</p>
  );
}

const WORK = [
  {
    n: "01",
    tag: "IEEE PAPER",
    title: "Satellite Poverty CNN",
    desc: "CNN detecting poverty from satellite imagery.",
    tags: ["Python", "PyTorch", "CNN"],
    mock: "grid",
    href: "/research/satellite-poverty-cnn",
  },
  {
    n: "02",
    tag: "IEEE PAPER",
    title: "LSTM Market Forecast",
    desc: "Dual LSTM networks forecasting stock highs/lows.",
    tags: ["Python", "LSTM", "Pandas"],
    mock: "chart",
    href: "/research/lstm-market-forecast",
  },
  {
    n: "03",
    tag: "LIVE SITE",
    title: "DFW Community Hub",
    desc: "Civic platform live for the whole DFW metro.",
    tags: ["Next.js", "FastAPI", "Supabase"],
    mock: "map",
    href: "/engineering/dfw-community-hub",
  },
];

const CASE_STUDIES = [
  {
    n: "01",
    title: "Harnessing Satellite Imagery with CNNs for Poverty Prediction",
    desc: "IEEE co-authored paper — a CNN trained to recognize poverty indicators directly from satellite imagery of Africa, validated on unseen data.",
    tags: ["ICAIQSA 2024", "IEEE"],
    resultA: ["90%", "Model Accuracy"],
    resultB: ["70/30", "Train/Test Split"],
    href: "/research/satellite-poverty-cnn",
  },
  {
    n: "02",
    title: "Intraday Market Analysis and Forecasting with LSTM Networks",
    desc: "Two dedicated LSTM networks forecasting Infosys Ltd.'s daily high and low prices from a decade of trading history.",
    tags: ["AECE 2025", "IEEE"],
    resultA: ["0.954", "High-Price R²"],
    resultB: ["0.947", "Low-Price R²"],
    href: "/research/lstm-market-forecast",
  },
  {
    n: "03",
    title: "DFW Community Hub",
    desc: "A civic platform for the DFW metroplex — issue reporting, family support listings, and public resources, live for real residents.",
    tags: ["Live Production", "2026"],
    resultA: ["20hr", "Weekly Commitment"],
    resultB: ["9wk", "Development Sprint"],
    href: "/engineering/dfw-community-hub",
  },
  {
    n: "04",
    title: "Abandoned and Left Behind",
    desc: "A 165-page self-published action-adventure novel set in 1969 — two men racing the FBI to find their way home. A second manuscript, Hell on Planet B, was completed in 2024 and is not yet published.",
    tags: ["Amazon", "Published 2024"],
    resultA: ["165pp", "Novel"],
    resultB: ["4.0★", "Rating"],
    href: "/writing/abandoned-and-left-behind",
  },
];

const SKILLS: [string, number][] = [
  ["Python", 92],
  ["PyTorch / Deep Learning", 85],
  ["Data Analysis", 88],
  ["Full-Stack Development", 80],
];

const FOCUS = [
  "AI / ML Research",
  "Full-Stack Engineering",
  "Fiction Writing",
  "Civic Technology",
  "Community Leadership",
];

const SOURCES = [
  { label: "IEEE Xplore Profile", href: "https://ieeexplore.ieee.org/author/163333461938359" },
  { label: "Abandoned and Left Behind", href: "https://www.amazon.com/Abandoned-Left-Behind-action-adventure-novel/dp/B0D571N8TC" },
  { label: "DFW Community Hub", href: "https://www.dfwcomp.org" },
];

const SERVICE = [
  {
    org: "Roar 4 Change — Shelter Coordinator",
    date: "Jul 2023 – Dec 2025",
    featured: true,
    desc: "2.5 years supporting a homeless shelter in Irving, TX — intake, supplies, and resident support.",
  },
  {
    org: "Denton County Junior Historians",
    date: "Sep 2025 – May 2027",
    desc: "Curated museum exhibits and researched county archives.",
  },
  {
    org: "Rotary Youth Leadership Awards",
    date: "Jun 2026",
    desc: "Intensive week-long leadership and communication program.",
  },
  {
    org: "Flower Mound Leadership Program",
    date: "Aug 2026 – Apr 2027",
    desc: "Team management, accountability, and goal-setting.",
  },
];

const ACTIVITIES = ["Model UN", "FMHS Computer Science Club", "Schoolhouse Dialogues", "FMHS Band"];

const ACHIEVEMENTS = [
  { label: "National Honor Society", date: "2026" },
  { label: "AP Scholar with Distinction", date: "2025 & 2026" },
];

function MockPreview({ type }: { type: string }) {
  if (type === "chart") {
    return (
      <svg viewBox="0 0 100 40" className="w-full h-full">
        <polyline
          points="0,32 15,28 30,30 45,15 60,20 75,8 100,12"
          fill="none"
          stroke={GREEN}
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  if (type === "map") {
    return (
      <div className="w-full h-full flex flex-col gap-1.5 justify-center px-3">
        <div className="h-1.5 rounded-full bg-[#6366f1]/50 w-3/4" />
        <div className="h-1.5 rounded-full bg-[#6366f1]/30 w-1/2" />
        <div className="h-1.5 rounded-full bg-[#6366f1]/40 w-2/3" />
      </div>
    );
  }
  return (
    <div className="w-full h-full grid grid-cols-6 grid-rows-3 gap-0.5 p-2">
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="rounded-[1px]"
          style={{ background: GREEN, opacity: ((i * 37) % 10) / 15 + 0.08 }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={`${mono.className} min-h-screen`} style={{ background: BG, color: "#e8eaed" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 pb-10">
        {/* Top nav */}
        <div className="flex items-center justify-between mb-4 px-1 flex-wrap gap-3">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded flex items-center justify-center font-bold text-xs"
              style={{ background: GREEN, color: "#0a0c0f" }}
            >
              TG
            </div>
            <span className="font-semibold text-sm">TRIDHM GARG</span>
            <span className="text-[11px] opacity-40 hidden sm:inline">AI_RESEARCHER · AUTHOR</span>
          </div>
          <div className="flex gap-5 sm:gap-6 text-[11px] sm:text-[12px] opacity-60">
            <a href="#research" className="hover:opacity-100" style={{ color: GREEN }}>RESEARCH</a>
            <a href="#writing" className="hover:opacity-100">WRITING</a>
            <a href="#service" className="hover:opacity-100">SERVICE</a>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-4">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Hero panel */}
            <Panel>
              <p className="text-[11px] opacity-40 mb-1">&gt; INITIALIZING_PORTFOLIO.EXE</p>
              <p className="text-[11px] mb-6" style={{ color: GREEN }}>
                &gt; STATUS: ONLINE
              </p>

              <div className="grid sm:grid-cols-[1.3fr_0.9fr] gap-6">
                <div>
                  <h1 className="text-2xl sm:text-[28px] font-bold leading-[1.15] mb-4">
                    Building AI systems{" "}
                    <span style={{ color: GREEN }}>and telling stories.</span>
                  </h1>
                  <p className="text-[13px] leading-relaxed opacity-60 mb-6">
                    Rising senior researching applied AI, writing published fiction, and
                    shipping software real people use.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="#research"
                      className="text-[12px] font-semibold px-4 py-2 rounded border"
                      style={{ borderColor: GREEN, color: GREEN }}
                    >
                      VIEW_RESEARCH →
                    </a>
                    <Link
                      href="/writing/abandoned-and-left-behind"
                      className="text-[12px] font-semibold px-4 py-2 rounded border border-white/15 opacity-70"
                    >
                      READ_NOVEL
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div
                    className="aspect-square rounded-lg flex items-center justify-center text-3xl font-bold"
                    style={{ background: "linear-gradient(135deg,#1a2e22,#0a0c0f)", border: `1px solid ${BORDER}`, color: GREEN }}
                  >
                    TG
                  </div>
                  <div className="text-[11px] leading-6">
                    <p className="opacity-40">&gt; LOCATION</p>
                    <p className="mb-2">Flower Mound, TX</p>
                    <p className="opacity-40">&gt; CLASS / GPA</p>
                    <p className="mb-2">2027 · 4.575 weighted</p>
                    <p className="opacity-40">&gt; COURSEWORK</p>
                    <p>17 AP courses</p>
                  </div>
                </div>
              </div>
            </Panel>

            {/* Selected work row */}
            <div id="engineering">
              <Label>// SELECTED_WORK</Label>
              <div className="grid sm:grid-cols-3 gap-3">
                {WORK.map((w) => (
                  <Link key={w.n} href={w.href} className="block">
                    <Panel className="!p-4 h-full transition-colors hover:!border-[#3ddc8455]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] opacity-40">{w.n}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: `${GREEN}22`, color: GREEN }}>
                          {w.tag}
                        </span>
                      </div>
                      <div className="h-16 rounded mb-3 overflow-hidden border" style={{ borderColor: BORDER, background: "#0d0f13" }}>
                        <MockPreview type={w.mock} />
                      </div>
                      <h3 className="text-[13px] font-semibold mb-1">{w.title}</h3>
                      <p className="text-[11px] opacity-50 leading-relaxed mb-3">{w.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {w.tags.map((t) => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 opacity-60">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Panel>
                  </Link>
                ))}
              </div>
            </div>

            {/* Leadership & service log */}
            <div id="service">
              <Label>// LEADERSHIP_&amp;_SERVICE</Label>
              <Panel className="!p-0 overflow-hidden">
                <div className="flex flex-col divide-y" style={{ borderColor: BORDER }}>
                  {SERVICE.map((s) => (
                    <div
                      key={s.org}
                      className="p-4 sm:p-5"
                      style={{
                        borderColor: BORDER,
                        background: s.featured ? `${GREEN}0a` : "transparent",
                      }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                        <h4 className="text-[13px] font-semibold">{s.org}</h4>
                        <span className="text-[10px] opacity-40 shrink-0">{s.date}</span>
                      </div>
                      <p className="text-[11.5px] opacity-55 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Bottom row: log + stack */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Panel>
                <Label>&gt; BUILD_LOG</Label>
                <p className="text-[11px] leading-6 opacity-50">
                  [2024] Published first IEEE paper.
                  <br />
                  [2024] Self-published debut novel.
                  <br />
                  [2025] Published second IEEE paper.
                  <br />
                  [2026] Shipped dfwcomp.org.
                </p>
              </Panel>
              <Panel>
                <Label>&gt; TECH_STACK</Label>
                <div className="flex flex-wrap gap-2 text-[11px] opacity-70">
                  {["Python", "PyTorch", "Pandas", "Next.js", "FastAPI", "SQL"].map((t) => (
                    <span key={t} className="px-2 py-1 rounded border border-white/10">{t}</span>
                  ))}
                </div>
              </Panel>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            <Panel id="research">
              <div className="flex items-center justify-between mb-5">
                <Label>// CASE_STUDIES</Label>
              </div>
              <div className="flex flex-col divide-y" style={{ borderColor: BORDER }}>
                {CASE_STUDIES.map((c) => (
                  <Link
                    key={c.n}
                    id={c.n === "04" ? "writing" : undefined}
                    href={c.href}
                    className="grid sm:grid-cols-[auto_1fr_auto] gap-4 items-start py-5 first:pt-0 last:pb-0 group"
                    style={{ borderColor: BORDER }}
                  >
                    <span className="text-[11px] opacity-30 pt-1">{c.n}</span>
                    <div>
                      <h4 className="text-[13.5px] font-semibold mb-1.5 leading-snug group-hover:opacity-80">
                        {c.title}
                      </h4>
                      <p className="text-[11.5px] opacity-50 leading-relaxed mb-2 max-w-md">{c.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.tags.map((t) => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 opacity-50">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex sm:flex-col gap-4 sm:gap-2 shrink-0 text-right sm:items-end">
                      <div>
                        <p className="text-[13px] font-bold" style={{ color: GREEN }}>{c.resultA[0]}</p>
                        <p className="text-[9px] opacity-40">{c.resultA[1]}</p>
                      </div>
                      <div>
                        <p className="text-[13px] font-bold" style={{ color: GREEN }}>{c.resultB[0]}</p>
                        <p className="text-[9px] opacity-40">{c.resultB[1]}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Panel>

            <div className="grid sm:grid-cols-3 gap-4">
              <Panel>
                <Label>&lt;/&gt; RESEARCH_SKILLS</Label>
                <div className="flex flex-col gap-3">
                  {SKILLS.map(([label, val]) => (
                    <div key={label}>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="opacity-60">{label}</span>
                        <span style={{ color: GREEN }}>{val}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/8 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${val}%`, background: GREEN }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel>
                <Label>◇ FOCUS_AREAS</Label>
                <div className="flex flex-col gap-2.5 text-[12px] opacity-70">
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
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between opacity-70 hover:opacity-100"
                    >
                      {s.label}
                      <ExternalLink size={11} />
                    </a>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Activities + Achievements */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Panel>
                <Label>* ACTIVITIES</Label>
                <div className="flex flex-wrap gap-2">
                  {ACTIVITIES.map((a) => (
                    <span key={a} className="text-[11px] px-2.5 py-1.5 rounded border border-white/10 opacity-70">
                      {a}
                    </span>
                  ))}
                </div>
              </Panel>
              <Panel>
                <Label>★ ACHIEVEMENTS</Label>
                <div className="flex flex-col gap-2.5">
                  {ACHIEVEMENTS.map((a) => (
                    <div key={a.label} className="flex items-center justify-between text-[11.5px]">
                      <span className="opacity-75">{a.label}</span>
                      <span className="opacity-40 text-[10px]">{a.date}</span>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>

            {/* Closing banner */}
            <Panel className="relative overflow-hidden">
              <div
                className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`,
                  backgroundSize: "14px 14px",
                }}
              />
              <p className="text-[11px] opacity-40 mb-2">&gt; STATUS</p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight relative z-10">
                Building what&apos;s{" "}
                <span style={{ color: GREEN }}>next.</span>
              </h3>
            </Panel>

            {/* Footer */}
            <div className="flex items-center justify-between px-1 text-[11px] opacity-40">
              <span className="flex items-center gap-1.5">
                <Sparkle size={12} /> // THANKS FOR VISITING
              </span>
              <span>FLOWER MOUND, TX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
