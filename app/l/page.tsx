import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Sparkle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
  children, className = "", id, tint,
}: { children: React.ReactNode; className?: string; id?: string; tint?: { bg: string; border: string } }) {
  return (
    <div
      id={id}
      className={`rounded-lg border p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ background: tint?.bg ?? PANEL, borderColor: tint?.border ?? BORDER, boxShadow: "0 1px 2px rgba(20,24,20,0.04)" }}
    >
      {children}
    </div>
  );
}

function Label({ children, color }: { children: React.ReactNode; color?: string }) {
  return <p className="text-[11px] tracking-[0.15em] uppercase font-bold mb-4" style={{ color: color ?? "rgba(20,24,20,0.5)" }}>{children}</p>;
}

const AP_COURSES = [
  "Pre-Calculus", "Calculus AB", "Calculus BC", "Statistics", "Biology", "Chemistry",
  "Physics 1", "Computer Science", "Psychology", "Human Geography", "World History",
  "US History", "European History", "US Government", "Macroeconomics",
  "English Language & Composition", "English Literature & Composition",
];

const WORK = [
  { n: "01", tag: "IEEE PAPER", title: "Satellite Poverty CNN", desc: "CNN detecting poverty from satellite imagery.", tags: ["Python", "PyTorch", "CNN"], href: "/l/research/satellite-poverty-cnn" },
  { n: "02", tag: "IEEE PAPER", title: "LSTM Market Forecast", desc: "Dual LSTM networks forecasting stock highs/lows.", tags: ["Python", "LSTM", "Pandas"], href: "/l/research/lstm-market-forecast" },
  { n: "03", tag: "IEEE PAPER", title: "Federated Intrusion Detection", desc: "Privacy-preserving federated learning for network intrusion detection.", tags: ["Python", "Federated Learning"], href: "/l/research/federated-intrusion-detection" },
  { n: "04", tag: "LIVE SITE", title: "DFW Community Hub", desc: "Civic platform live for the whole DFW metro.", tags: ["Next.js", "FastAPI", "Supabase"], href: "/l/engineering/dfw-community-hub" },
  { n: "05", tag: "SUBMITTED", title: "Depression Screening ML", desc: "XGBoost/ANN/RF binary depression classifier on DASS-42.", tags: ["Python", "XGBoost", "ANN"], href: "/l/research/depression-screening-dass42" },
  { n: "06", tag: "PUBLISHED BOOK", title: "Abandoned and Left Behind", desc: "165-page action-adventure novel, self-published on Amazon.", tags: ["Amazon", "Fiction", "4.0★"], href: "/l/writing/abandoned-and-left-behind" },
];

const RESEARCH_PAPERS = [
  { n: "01", title: "Harnessing Satellite Imagery with CNNs for Poverty Prediction", desc: "A CNN trained to recognize poverty indicators directly from satellite imagery of Africa, validated on unseen data.", tags: ["ICAIQSA 2024"], stat: 90, statSuffix: "%", statLabel: "Accuracy", href: "/l/research/satellite-poverty-cnn", thumb: "/images/poverty-satellite-1.png" },
  { n: "02", title: "Intraday Market Analysis and Forecasting with LSTM Networks", desc: "Two dedicated LSTM networks forecasting Infosys Ltd.'s daily high and low prices from a decade of trading history.", tags: ["AECE 2025"], stat: 0.954, statSuffix: "", statLabel: "High R²", href: "/l/research/lstm-market-forecast", thumb: "/images/lstm-hero.png" },
  { n: "03", title: "Federated Deep Learning for Privacy-Preserving Intrusion Detection", desc: "A federated learning architecture for network intrusion detection that never exposes raw client data.", tags: ["CONIT 2026"], stat: 99.68, statSuffix: "%", statLabel: "Accuracy", href: "/l/research/federated-intrusion-detection", thumb: "/images/cyber-hero.png" },
  { n: "04", title: "Machine Learning-Based Mental Health Assessment and Depression Screening Using the U.S. DASS-42 Dataset", desc: "Random Forest, XGBoost, and ANN compared for binary depression classification on a U.S.-specific subset of DASS-42.", tags: ["Under Review"], submitted: true, stat: 98.72, statSuffix: "%", statLabel: "XGBoost Accuracy", href: "/l/research/depression-screening-dass42", thumb: "/images/depression-infographic.png" },
];

const SKILLS: [string, number][] = [
  ["Python", 92], ["PyTorch / Deep Learning", 85], ["Data Analysis", 88], ["Full-Stack Development", 80],
];
const FOCUS = ["AI / ML Research", "Full-Stack Engineering", "Fiction Writing", "Civic Technology", "Community Leadership"];
const SOURCES = [
  { label: "IEEE Xplore Profile", href: "https://ieeexplore.ieee.org/author/163333461938359" },
  { label: "Abandoned and Left Behind", href: "https://www.amazon.com/Abandoned-Left-Behind-action-adventure-novel/dp/B0D571N8TC" },
  { label: "DFW Community Hub", href: "https://www.dfwcomp.org" },
];
const COMMUNITY_SERVICE = [
  { org: "Roar 4 Change — Shelter Coordinator", date: "Jul 2023 – Dec 2025", desc: "2.5 years supporting homeless shelters across multiple DFW cities — intake, supplies, and resident support.", logo: "/images/logo-roar4change.jpg" },
];
const LEADERSHIP = [
  { org: "Rotary Youth Leadership Awards", date: "Jun 2026", desc: "Intensive week-long leadership and communication program.", logo: "/images/logo-rotary.png" },
  { org: "Denton County Junior Historians", date: "Sep 2025 – May 2027", desc: "Curated museum exhibits and researched county archives.", logo: "/images/logo-denton-county.jpg" },
  { org: "Flower Mound Leadership Program", date: "Aug 2026 – Apr 2027", desc: "Team management, accountability, and goal-setting.", logo: "/images/logo-student-leadership.png" },
  { org: "Flower Mound High School Student Council", date: "Sep 2023 – Jan 2024", desc: "Contributed event ideas and helped organize school events, including the Flower Mound Showdown.", logo: "/images/logo-fmhs.png" },
];
const TRAININGS = [
  { org: "UT Dallas K-12 Outreach — AI Deep Dive", date: "Jun – Aug 2025", desc: "8-week structured program — neural networks, CNNs, greedy algorithms, trained in PyTorch, Pandas, NumPy, scikit-learn.", logo: "/images/logo-utd.webp" },
  { org: "Code2College", date: "Jun 2026 – Present", desc: "Self-paced Python course — three independent projects completed.", logo: "/images/logo-code2college.png" },
];
const BOOTCAMPS = [
  { org: "University of Houston–Victoria Data Science Bootcamp", date: "Jun 2024", desc: "CNNs, deep neural networks, NLP, computer vision, and Big Data fundamentals in Python.", logo: "/images/logo-uhv.png" },
  { org: "The Coding School — AI & Big Data Camp", date: "Jul 2024", desc: "Applied scikit-learn and foundational AI modeling techniques.", logo: "/images/logo-coding-school.png" },
];
const CLUBS = ["Model UN", "FMHS Computer Science Club", "FMHS STEM Club", "Schoolhouse Dialogues", "FMHS Band"];
const AWARDS = [
  { label: "National Honor Society", date: "2026" },
  { label: "AP Scholar with Distinction", date: "2025 & 2026" },
  { label: "Jammin' Jags — Teacher Nomination", date: "2024 & 2025" },
];

export default function DesignK() {
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
            {/* Hero — real portrait, white panel that fades into light gray behind him */}
            <Reveal>
              <div id="hero">
                <Label color={GREEN}>◉ WHO_I_AM</Label>
                <Panel className="relative overflow-hidden !p-0 min-h-[440px] sm:min-h-[478px]">
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(90deg, #ffffff 0%, #ffffff 38%, #c3d7e6 52%, #a8c3d8 100%)" }}
                  />
                  <div className="absolute right-[70px] sm:right-[95px] top-0 bottom-0 flex items-end">
                    <Image
                      src="/images/whoiam-portrait-tight.png"
                      alt="Portrait of Tridhm Garg"
                      width={825}
                      height={1515}
                      priority
                      sizes="(max-width: 1024px) 55vw, 260px"
                      className="h-[440px] sm:h-[478px] w-auto object-contain object-bottom"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col justify-center py-8 px-6 sm:px-8 max-w-[175px] sm:max-w-[188px] min-h-[440px] sm:min-h-[478px]">
                    <p className="text-[9.5px] opacity-45 mb-1 whitespace-nowrap">&gt; INIT_PORTFOLIO.EXE</p>
                    <p className="text-[9.5px] mb-6 font-semibold whitespace-nowrap" style={{ color: GREEN }}>&gt; STATUS: ONLINE</p>
                    <h1 className="text-xl sm:text-[22px] font-bold leading-[1.2] mb-3">
                      Building AI systems <span style={{ color: GREEN }}>and telling stories.</span>
                    </h1>
                    <p className="text-[11.5px] leading-relaxed opacity-70 mb-4">
                      Rising senior researching applied AI, writing published fiction, and shipping software real people use.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <a href="#research" className="text-[12px] font-semibold px-4 py-2 rounded border" style={{ borderColor: GREEN, color: GREEN, background: "rgba(255,255,255,0.7)" }}>VIEW_RESEARCH →</a>
                      <Link href="/l/writing/abandoned-and-left-behind" className="text-[12px] font-semibold px-4 py-2 rounded border opacity-70" style={{ borderColor: BORDER, background: "rgba(255,255,255,0.7)" }}>READ_NOVEL</Link>
                    </div>
                  </div>
                </Panel>
              </div>
            </Reveal>

            {/* Education */}
            <Reveal>
              <div id="education">
                <Label color={TINTS.education.accent}>▤ EDUCATION</Label>
                <Panel tint={TINTS.education} className="!p-0 overflow-hidden">
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                      <h4 className="text-[14px] font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full overflow-hidden bg-white border shrink-0 inline-flex items-center justify-center" style={{ borderColor: TINTS.education.border }}>
                          <Image src="/images/logo-fmhs.png" alt="" width={24} height={24} className="w-full h-full object-contain" />
                        </span>
                        Flower Mound High School
                      </h4>
                      <span className="text-[11px] opacity-55">Aug 2023 – May 2027</span>
                    </div>
                    <p className="text-[12px] opacity-70 mb-4">
                      <Counter value={4.575} decimals={3} /> weighted GPA · <Counter value={17} /> AP courses
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {AP_COURSES.map((c) => (
                        <span key={c} className="text-[9.5px] px-2 py-1 rounded" style={{ background: "rgba(71,85,105,0.1)", color: TINTS.education.accent }}>AP {c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/education-desk-trim.png"
                      alt="Illustration of a student thinking at a desk with a laptop, microscope, and books"
                      width={2593}
                      height={1490}
                      className="w-full h-[275px] object-cover object-[50%_25%] block"
                    />
                    <div className="absolute inset-x-0 top-0 h-12" style={{ background: `linear-gradient(180deg, ${TINTS.education.bg} 0%, transparent 100%)` }} />
                  </div>
                </Panel>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <Label>// SELECTED_WORK</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {WORK.map((w) => (
                    <Link key={w.n} href={w.href} className="block">
                      <Panel className="!p-4 h-full hover:!border-[#0d946377]">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] opacity-45">{w.n}</span>
                          <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded font-medium" style={{ background: `${GREEN}18`, color: GREEN }}>
                            {w.tag === "IEEE PAPER" && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src="/images/logo-ieee.svg" alt="" className="h-2.5 w-auto" />
                            )}
                            {w.tag === "LIVE SITE" && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src="/images/logo-civichub.png" alt="" className="h-3 w-3 object-contain" />
                            )}
                            {w.tag === "PUBLISHED BOOK" && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src="/images/logo-amazon.svg" alt="" className="h-2.5 w-auto" />
                            )}
                            {w.tag}
                          </span>
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
            </Reveal>

            <Reveal delay={100}>
              <div>
                <Label color={TINTS.service.accent}>♥ COMMUNITY_SERVICE</Label>
                <Panel tint={TINTS.service} className="!p-0 overflow-hidden">
                  <div className="flex flex-col divide-y" style={{ borderColor: TINTS.service.border }}>
                    {COMMUNITY_SERVICE.map((s) => (
                      <div key={s.org} className="p-4 sm:p-5 flex gap-4 items-start">
                        <div className="w-11 h-11 rounded-full overflow-hidden border shrink-0 bg-white flex items-center justify-center" style={{ borderColor: TINTS.service.border }}>
                          <Image src={s.logo} alt="" width={44} height={44} className="w-full h-full object-contain p-1" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                            <h4 className="text-[13px] font-semibold">{s.org}</h4>
                            <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                          </div>
                          <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/service-banner.png"
                      alt="Illustration of a teen volunteer handing out supplies at a community shelter"
                      width={1456}
                      height={816}
                      className="w-full h-[275px] object-cover object-[50%_25%] block"
                    />
                    <div className="absolute inset-x-0 top-0 h-12" style={{ background: `linear-gradient(180deg, ${TINTS.service.bg} 0%, transparent 100%)` }} />
                  </div>
                </Panel>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div id="service">
                <Label color={TINTS.leadership.accent}>◆ LEADERSHIP</Label>
                <Panel tint={TINTS.leadership} className="!p-0 overflow-hidden">
                  <div className="flex flex-col divide-y" style={{ borderColor: TINTS.leadership.border }}>
                    {LEADERSHIP.map((s) => (
                      <div key={s.org} className="p-4 sm:p-5 flex gap-4 items-start">
                        {s.logo ? (
                          <div className="w-11 h-11 rounded-full overflow-hidden border shrink-0 bg-white flex items-center justify-center" style={{ borderColor: TINTS.leadership.border }}>
                            <Image src={s.logo} alt="" width={44} height={44} className="w-full h-full object-contain p-1" />
                          </div>
                        ) : (
                          <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center" style={{ background: `${TINTS.leadership.accent}18` }}>
                            <span className="text-[13px] font-bold" style={{ color: TINTS.leadership.accent }}>◆</span>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                            <h4 className="text-[13px] font-semibold">{s.org}</h4>
                            <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                          </div>
                          <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/leadership-banner2.png"
                      alt="Illustration listing leadership traits: integrity, vision, positive attitude, sense of humor, solid communicator, inspiring"
                      width={2067}
                      height={761}
                      className="w-full h-[275px] object-cover object-[50%_25%] block"
                    />
                    <div className="absolute inset-x-0 top-0 h-12" style={{ background: `linear-gradient(180deg, ${TINTS.leadership.bg} 0%, transparent 100%)` }} />
                  </div>
                </Panel>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                <Label color={TINTS.trainings.accent}>▲ TRAININGS</Label>
                <Panel tint={TINTS.trainings} className="!p-0 overflow-hidden">
                  <div className="flex flex-col divide-y" style={{ borderColor: TINTS.trainings.border }}>
                    {TRAININGS.map((s) => (
                      <div key={s.org} className="p-4 sm:p-5 flex gap-4 items-start">
                        {s.logo ? (
                          <div className="w-11 h-11 rounded-full overflow-hidden border shrink-0 bg-white flex items-center justify-center" style={{ borderColor: TINTS.trainings.border }}>
                            <Image src={s.logo} alt="" width={44} height={44} className="w-full h-full object-contain p-1" />
                          </div>
                        ) : (
                          <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center" style={{ background: `${TINTS.trainings.accent}18` }}>
                            <span className="text-[13px] font-bold" style={{ color: TINTS.trainings.accent }}>▲</span>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                            <h4 className="text-[13px] font-semibold">{s.org}</h4>
                            <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                          </div>
                          <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/trainings-banner.png"
                      alt="Illustration of a student surrounded by AI training diagrams, robots, and machine learning books"
                      width={1672}
                      height={941}
                      className="w-full h-[275px] object-cover object-[50%_20%] block"
                    />
                    <div className="absolute inset-x-0 top-0 h-12" style={{ background: `linear-gradient(180deg, ${TINTS.trainings.bg} 0%, transparent 100%)` }} />
                  </div>
                </Panel>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div>
                <Label color={TINTS.bootcamps.accent}>▲▲ BOOTCAMPS</Label>
                <Panel tint={TINTS.bootcamps} className="!p-0 overflow-hidden">
                  <div className="flex flex-col divide-y" style={{ borderColor: TINTS.bootcamps.border }}>
                    {BOOTCAMPS.map((s) => (
                      <div key={s.org} className="p-4 sm:p-5 flex gap-4 items-start">
                        <div className="w-11 h-11 rounded-full overflow-hidden border shrink-0 bg-white flex items-center justify-center" style={{ borderColor: TINTS.bootcamps.border }}>
                          <Image src={s.logo} alt="" width={44} height={44} className="w-full h-full object-contain p-0.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                            <h4 className="text-[13px] font-semibold">{s.org}</h4>
                            <span className="text-[10px] opacity-50 shrink-0">{s.date}</span>
                          </div>
                          <p className="text-[11.5px] opacity-70 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/bootcamps-banner.png"
                      alt="Illustration of a student in a boot camp classroom with a whiteboard showing AI model training steps"
                      width={1672}
                      height={941}
                      className="w-full h-[275px] object-cover object-[50%_20%] block"
                    />
                    <div className="absolute inset-x-0 top-0 h-12" style={{ background: `linear-gradient(180deg, ${TINTS.bootcamps.bg} 0%, transparent 100%)` }} />
                  </div>
                </Panel>
              </div>
            </Reveal>

            <Reveal delay={180}>
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
            </Reveal>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Software Creation — real product screenshots */}
            <Reveal>
              <div id="software">
                <Label color={TINTS.software.accent}>▣ SOFTWARE_CREATION</Label>
                <Panel tint={TINTS.software} className="min-h-[440px] sm:min-h-[478px] flex flex-col">
                  <Link href="/l/engineering/dfw-community-hub" className="block group mb-4">
                    <h4 className="text-[14px] font-semibold mb-1.5 group-hover:opacity-70 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full overflow-hidden bg-white border shrink-0 inline-flex items-center justify-center" style={{ borderColor: TINTS.software.border }}>
                        <Image src="/images/logo-civichub.png" alt="" width={24} height={24} className="w-full h-full object-contain" />
                      </span>
                      DFW Community Hub
                    </h4>
                    <p className="text-[12px] opacity-70 leading-relaxed max-w-md mb-4">
                      A civic platform live for the whole DFW metroplex — issue reporting,
                      family support listings, and public resources for real residents.
                    </p>
                  </Link>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="rounded-md overflow-hidden border" style={{ borderColor: TINTS.software.border }}>
                      <Image src="/images/dfwcomp-home.jpg" alt="DFW Community Hub homepage" width={800} height={500} className="w-full h-auto" />
                    </div>
                    <div className="rounded-md overflow-hidden border" style={{ borderColor: TINTS.software.border }}>
                      <Image src="/images/dfwcomp-map.jpg" alt="DFW Community Hub city map view" width={800} height={500} className="w-full h-auto" />
                    </div>
                  </div>
                  <a href="https://www.dfwcomp.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-semibold mt-3" style={{ color: TINTS.software.accent }}>
                    Visit the live site <ExternalLink size={11} />
                  </a>
                </Panel>
              </div>
            </Reveal>

            {/* IEEE Research — with animated stat counters */}
            <Reveal delay={80}>
              <div id="research">
                <Label color={TINTS.research.accent}>◈ RESEARCH</Label>
                <Panel tint={TINTS.research} className="!p-0 overflow-hidden">
                  <div className="flex flex-col divide-y p-5 sm:p-6" style={{ borderColor: TINTS.research.border }}>
                    {RESEARCH_PAPERS.map((c) => (
                      <Link key={c.n} href={c.href} className="grid sm:grid-cols-[auto_auto_1fr_auto] gap-4 items-start py-5 first:pt-0 last:pb-0 group">
                        <span className="text-[11px] opacity-40 pt-1">{c.n}</span>
                        <div className="w-14 h-14 rounded-md overflow-hidden shrink-0 hidden sm:block">
                          <Image src={c.thumb} alt="" width={100} height={100} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-[13.5px] font-semibold mb-1.5 leading-snug group-hover:opacity-70">{c.title}</h4>
                          <p className="text-[11.5px] opacity-65 leading-relaxed mb-2 max-w-md">{c.desc}</p>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {c.submitted ? (
                              <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide opacity-90" style={{ background: "rgba(194,97,13,0.12)", color: "#c2610d" }}>
                                Submitted · Not Yet Accepted
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded opacity-80" style={{ background: "rgba(10,112,163,0.1)" }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/logo-ieee.svg" alt="" className="h-2.5 w-auto" />
                                IEEE
                              </span>
                            )}
                            {c.tags.map((t) => (
                              <span key={t} className="text-[9px] px-1.5 py-0.5 rounded opacity-70" style={{ background: "rgba(20,24,20,0.06)" }}>{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[15px] font-bold" style={{ color: TINTS.research.accent }}>
                            <Counter value={c.stat} decimals={c.stat % 1 !== 0 ? 3 : 0} suffix={c.statSuffix} />
                          </p>
                          <p className="text-[9px] opacity-50">{c.statLabel}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/research-banner2-trim.png"
                      alt="Illustration of a person thinking at a laptop with a question mark"
                      width={2129}
                      height={1489}
                      className="w-full h-[275px] object-cover object-[50%_20%] block"
                    />
                    <div className="absolute inset-x-0 top-0 h-12" style={{ background: `linear-gradient(180deg, ${TINTS.research.bg} 0%, transparent 100%)` }} />
                  </div>
                </Panel>
              </div>
            </Reveal>

            {/* Writing — real book cover */}
            <Reveal delay={100}>
              <div id="writing">
                <Label color={TINTS.writing.accent}>✎ WRITING</Label>
                <Panel tint={TINTS.writing} className="!p-0 overflow-hidden">
                  <div className="p-5 sm:p-6">
                    <div className="grid sm:grid-cols-[auto_1fr] gap-5">
                      <Link href="/l/writing/abandoned-and-left-behind" className="flex gap-2 w-auto shrink-0 mx-auto sm:mx-0">
                        <div className="w-24 aspect-[2/3] rounded-md overflow-hidden border shadow-sm" style={{ borderColor: TINTS.writing.border }}>
                          <Image src="/images/book1-cover-front.png" alt="Abandoned and Left Behind front cover" width={1024} height={1536} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="w-24 aspect-[2/3] rounded-md overflow-hidden border shadow-sm hidden sm:block" style={{ borderColor: TINTS.writing.border }}>
                          <Image src="/images/book1-cover-back.png" alt="Abandoned and Left Behind back cover" width={1023} height={1537} className="w-full h-full object-cover object-top" />
                        </div>
                      </Link>
                      <div>
                        <Link href="/l/writing/abandoned-and-left-behind" className="block group mb-3">
                          <h4 className="text-[14px] font-semibold mb-1.5 group-hover:opacity-70">Abandoned and Left Behind</h4>
                          <p className="text-[12px] opacity-70 leading-relaxed">
                            A 165-page self-published action-adventure novel set in 1969 — two men
                            racing the FBI to find their way home. 4.0★ on Amazon.
                          </p>
                        </Link>
                        <p className="text-[11px] opacity-60 leading-relaxed mb-3">
                          &ldquo;His love for writing came from his tutoring teacher, Mrs. Murphy.
                          With the teacher&rsquo;s help, he has improved in his writing and editing.
                          His interest is to connect with new audiences and write more and more
                          novels on different genres.&rdquo;
                        </p>
                        <a
                          href="https://www.amazon.com/Abandoned-Left-Behind-action-adventure-novel/dp/B0D571N8TC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded border"
                          style={{ borderColor: TINTS.writing.border, color: TINTS.writing.accent }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/images/logo-amazon.svg" alt="" className="h-3 w-auto" />
                          Buy on Amazon
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>

                    <div className="mt-5 pt-5 border-t grid sm:grid-cols-[auto_1fr] gap-5" style={{ borderColor: TINTS.writing.border }}>
                      <div className="flex gap-2 w-auto shrink-0 mx-auto sm:mx-0">
                        <div className="w-24 aspect-[2/3] rounded-md overflow-hidden border shadow-sm" style={{ borderColor: TINTS.writing.border }}>
                          <Image src="/images/hopb-cover-front.png" alt="Hell on Planet B front cover" width={1024} height={1536} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="w-24 aspect-[2/3] rounded-md overflow-hidden border shadow-sm hidden sm:block" style={{ borderColor: TINTS.writing.border }}>
                          <Image src="/images/hopb-cover-back.png" alt="Hell on Planet B back cover" width={1024} height={1536} className="w-full h-full object-cover object-top" />
                        </div>
                      </div>
                      <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1.5">
                        <h4 className="text-[14px] font-semibold">Hell on Planet B</h4>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold uppercase tracking-wide" style={{ background: `${TINTS.writing.accent}18`, color: TINTS.writing.accent }}>Coming Soon</span>
                      </div>
                      <p className="text-[12px] opacity-70 leading-relaxed mb-3">
                        A completed science-fiction war novel exploring the devastating
                        consequences of conflict on another planet, following a man caught
                        between the horrors of war and a deeply troubled family relationship.
                        Coming soon on Amazon.
                      </p>
                      <p className="text-[11px] opacity-60 leading-relaxed">
                        &ldquo;After completing his first novel, he continued writing
                        independently, challenging himself to explore a new genre and a darker
                        story. Hell on Planet B reflects his growing interest in exploring
                        complex themes of war, family, survival, and human nature while
                        connecting with new audiences through fiction.&rdquo;
                      </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/writing-banner2.png"
                      alt="Illustration of the author writing at a desk surrounded by WWII and 1969 Chicago gang-war research imagery"
                      width={1672}
                      height={941}
                      className="w-full h-[275px] object-cover object-[50%_20%] block"
                    />
                    <div className="absolute inset-x-0 top-0 h-12" style={{ background: `linear-gradient(180deg, ${TINTS.writing.bg} 0%, transparent 100%)` }} />
                  </div>
                </Panel>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid sm:grid-cols-3 gap-4">
                <Panel>
                  <Label>&lt;/&gt; RESEARCH_SKILLS</Label>
                  <div className="flex flex-col gap-3">
                    {SKILLS.map(([label, val]) => (
                      <div key={label}>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="opacity-65">{label}</span>
                          <span style={{ color: GREEN }} className="font-medium"><Counter value={val} suffix="%" /></span>
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
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 opacity-75 hover:opacity-100">
                        <span className="inline-flex items-center gap-1.5">
                          {s.label.includes("IEEE") && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/logo-ieee.svg" alt="" className="h-3 w-auto shrink-0" />
                          )}
                          {s.href.includes("amazon.com") && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/logo-amazon.svg" alt="" className="h-3 w-auto shrink-0" />
                          )}
                          {s.href.includes("dfwcomp.org") && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src="/images/logo-civichub.png" alt="" className="h-3.5 w-3.5 object-contain shrink-0" />
                          )}
                          {s.label}
                        </span>
                        <ExternalLink size={11} />
                      </a>
                    ))}
                  </div>
                </Panel>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="grid sm:grid-cols-2 gap-4">
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
            </Reveal>

            <Reveal delay={160}>
              <Panel className="relative overflow-hidden">
                <div
                  className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.12] pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(circle, ${GREEN} 1px, transparent 1px)`, backgroundSize: "14px 14px" }}
                />
                <p className="text-[11px] opacity-45 mb-2">&gt; STATUS</p>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight relative z-10">
                  Building what&apos;s <span style={{ color: GREEN }}>next.</span>
                </h3>
              </Panel>
            </Reveal>

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
