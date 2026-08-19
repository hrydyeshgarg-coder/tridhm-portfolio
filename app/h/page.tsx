import { Inter, Caveat } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const script = Caveat({ subsets: ["latin"], weight: ["500"] });

const RUST = "#b8763f";
const INK = "#33302c";
const CREAM = "#faf7f2";
const MUTED = "rgba(51,48,44,0.6)";

const NAV = [
  { href: "#research", label: "Research" },
  { href: "#writing", label: "Writing" },
  { href: "#service", label: "Service" },
  { href: "#about", label: "About" },
];

const RESEARCH = [
  {
    n: "01",
    title: "Satellite Imagery + CNNs for Poverty Prediction",
    desc: "A CNN trained to recognize poverty indicators directly from satellite imagery of Africa. 90% accuracy on unseen data.",
    href: "/h/research/satellite-poverty-cnn",
  },
  {
    n: "02",
    title: "Intraday Market Forecasting with LSTM Networks",
    desc: "Two LSTM networks forecasting a decade of daily stock highs and lows. R² of 0.954 and 0.947.",
    href: "/h/research/lstm-market-forecast",
  },
];

const SERVICE = [
  { org: "Roar 4 Change — Shelter Coordinator", date: "Jul 2023 – Dec 2025", featured: true, desc: "2.5 years supporting homeless shelters across multiple DFW cities." },
  { org: "Denton County Junior Historians", date: "Sep 2025 – May 2027", desc: "Curated museum exhibits and county archive research." },
  { org: "Rotary Youth Leadership Awards", date: "Jun 2026", desc: "Intensive leadership and communication program." },
  { org: "Flower Mound Leadership Program", date: "Aug 2026 – Apr 2027", desc: "Team management, accountability, goal-setting." },
];

const ACTIVITIES = ["Model UN", "FMHS Computer Science Club", "Schoolhouse Dialogues", "FMHS Band"];
const ACHIEVEMENTS = [
  { label: "National Honor Society", date: "2026" },
  { label: "AP Scholar with Distinction", date: "2025 & 2026" },
];

function HeroIllustration() {
  // Composition mirrors the reference: the subject sits toward the left
  // third of the frame, angled diagonally in, leaving the right side and
  // lower area quiet so the name/tagline overlay has room to breathe.
  return (
    <svg viewBox="0 0 900 480" className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="230" cy="430" rx="200" ry="16" fill={INK} opacity="0.05" />
      {/* Open book, angled */}
      <g transform="rotate(-6 230 300)">
        <path
          d="M70 260 Q230 225 390 260 L390 350 Q230 315 70 350 Z"
          stroke={INK}
          strokeOpacity="0.6"
          strokeWidth="2.5"
        />
        <path d="M230 232 L230 322" stroke={INK} strokeOpacity="0.4" strokeWidth="1.5" />
        <path d="M85 272 Q160 253 220 263" stroke={INK} strokeOpacity="0.32" strokeWidth="1.2" />
        <path d="M85 296 Q160 277 220 287" stroke={INK} strokeOpacity="0.32" strokeWidth="1.2" />
        <path d="M85 318 Q160 300 220 310" stroke={INK} strokeOpacity="0.32" strokeWidth="1.2" />
        <path d="M240 263 Q300 253 375 272" stroke={INK} strokeOpacity="0.32" strokeWidth="1.2" />
        <path d="M240 287 Q300 277 375 296" stroke={INK} strokeOpacity="0.32" strokeWidth="1.2" />
        <path d="M240 310 Q300 300 375 318" stroke={INK} strokeOpacity="0.32" strokeWidth="1.2" />
      </g>
      {/* Orbit / satellite path arcing above the book */}
      <path
        d="M40 190 C 110 40, 350 40, 420 190"
        stroke={RUST}
        strokeWidth="1.75"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
      <circle cx="420" cy="190" r="6" fill={RUST} />
      <path d="M410 180 L430 200 M430 180 L410 200" stroke={CREAM} strokeWidth="1.4" />
      {/* Small stars scattered around */}
      <circle cx="150" cy="110" r="2.5" fill={INK} opacity="0.3" />
      <circle cx="310" cy="90" r="2" fill={INK} opacity="0.25" />
      <circle cx="230" cy="55" r="2.5" fill={RUST} opacity="0.6" />
      <circle cx="60" cy="80" r="1.5" fill={INK} opacity="0.2" />
    </svg>
  );
}

export default function DesignH() {
  return (
    <div className={`${inter.className} min-h-screen`} style={{ background: CREAM, color: INK }}>
      {/* Nav */}
      <header className="border-b" style={{ borderColor: "rgba(51,48,44,0.1)" }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 h-[68px] flex items-center justify-between">
          <span className={`${script.className} text-2xl`}>Tridhm Garg</span>
          <nav className="flex gap-8 text-[14px]" style={{ color: MUTED }}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:opacity-70">{n.label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero — single full-bleed image panel with name/tagline overlaid
          bottom-right, matching the reference composition exactly rather
          than a side-by-side split. */}
      <section className="relative" style={{ background: "#f0ebe1" }}>
        <div className="w-full" style={{ aspectRatio: "2.1 / 1", minHeight: 340 }}>
          <HeroIllustration />
        </div>
        <div className="absolute bottom-8 right-6 sm:bottom-14 sm:right-14 text-right">
          <h1 className="font-bold tracking-tight leading-[1.1] mb-2" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}>
            Tridhm Garg, <span style={{ fontWeight: 500 }}>&apos;27</span>
          </h1>
          <p className={`${script.className} text-2xl sm:text-3xl`} style={{ color: RUST }}>
            AI Researcher, Author &amp; Developer
          </p>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 sm:px-10 pt-10 pb-4">
        <p className="text-[15px] leading-relaxed max-w-xl" style={{ color: MUTED }}>
          Rising senior at Flower Mound High School — 4.575 weighted GPA, 17 AP
          courses, two published IEEE research papers, a published novel, and a civic
          platform now live for the entire DFW metro.
        </p>
      </section>

      {/* Research */}
      <section id="research" className="max-w-[1100px] mx-auto px-6 sm:px-10 py-16 sm:py-20 border-t" style={{ borderColor: "rgba(51,48,44,0.1)" }}>
        <p className="text-[12px] tracking-[0.18em] uppercase font-semibold mb-10" style={{ color: RUST }}>Research</p>
        <div className="flex flex-col gap-10">
          {RESEARCH.map((r) => (
            <Link key={r.n} href={r.href} className="grid sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-8 items-start group">
              <span className="text-sm opacity-30">{r.n}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1.5 group-hover:opacity-70">{r.title}</h3>
                <p className="text-[14.5px] leading-relaxed max-w-lg" style={{ color: MUTED }}>{r.desc}</p>
              </div>
              <ArrowUpRight size={18} className="opacity-30 group-hover:opacity-70 shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* Engineering */}
      <section className="max-w-[1100px] mx-auto px-6 sm:px-10 py-16 sm:py-20 border-t" style={{ borderColor: "rgba(51,48,44,0.1)" }}>
        <p className="text-[12px] tracking-[0.18em] uppercase font-semibold mb-10" style={{ color: RUST }}>Engineering</p>
        <Link href="/h/engineering/dfw-community-hub" className="grid sm:grid-cols-[1fr_auto] gap-4 items-start group">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1.5 group-hover:opacity-70">DFW Community Hub</h3>
            <p className="text-[14.5px] leading-relaxed max-w-lg" style={{ color: MUTED }}>
              A civic platform for the whole DFW metroplex, live in production —
              issue reporting, family support listings, and public resources for real
              residents.
            </p>
          </div>
          <ArrowUpRight size={18} className="opacity-30 group-hover:opacity-70 shrink-0 mt-1" />
        </Link>
      </section>

      {/* Writing */}
      <section id="writing" className="max-w-[1100px] mx-auto px-6 sm:px-10 py-16 sm:py-20 border-t" style={{ borderColor: "rgba(51,48,44,0.1)" }}>
        <p className="text-[12px] tracking-[0.18em] uppercase font-semibold mb-10" style={{ color: RUST }}>Writing</p>
        <Link href="/h/writing/abandoned-and-left-behind" className="block group mb-6">
          <p className={`${script.className} text-2xl sm:text-3xl mb-3 group-hover:opacity-70`} style={{ color: RUST }}>
            &ldquo;Will they find a way back home?&rdquo;
          </p>
          <p className="text-[14.5px] leading-relaxed max-w-lg" style={{ color: MUTED }}>
            <strong style={{ color: INK }}>Abandoned and Left Behind</strong> — a
            165-page action-adventure novel set in 1969. Self-published on Amazon,
            4.0★ rating.
          </p>
        </Link>
        <p className="text-[13px] max-w-lg" style={{ color: "rgba(51,48,44,0.45)" }}>
          A second manuscript, <em>Hell on Planet B</em>, was completed in 2024 and is
          not yet published.
        </p>
      </section>

      {/* Leadership & Service */}
      <section id="service" className="max-w-[1100px] mx-auto px-6 sm:px-10 py-16 sm:py-20 border-t" style={{ borderColor: "rgba(51,48,44,0.1)" }}>
        <p className="text-[12px] tracking-[0.18em] uppercase font-semibold mb-10" style={{ color: RUST }}>Leadership &amp; Service</p>
        <div className="flex flex-col gap-7">
          {SERVICE.map((s) => (
            <div key={s.org} className={s.featured ? "pl-4" : ""} style={s.featured ? { borderLeft: `2px solid ${RUST}` } : undefined}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h4 className={`font-semibold ${s.featured ? "text-lg" : "text-[15px]"}`}>{s.org}</h4>
                <span className="text-[12px] opacity-40">{s.date}</span>
              </div>
              <p className="text-[13.5px]" style={{ color: MUTED }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About + Activities + Achievements */}
      <section id="about" className="max-w-[1100px] mx-auto px-6 sm:px-10 py-16 sm:py-20 border-t grid sm:grid-cols-2 gap-12" style={{ borderColor: "rgba(51,48,44,0.1)" }}>
        <div>
          <p className="text-[12px] tracking-[0.18em] uppercase font-semibold mb-6" style={{ color: RUST }}>Activities</p>
          <div className="flex flex-wrap gap-2">
            {ACTIVITIES.map((a) => (
              <span key={a} className="text-[13px] px-3 py-1.5 rounded-full" style={{ border: "1px solid rgba(51,48,44,0.18)", color: MUTED }}>{a}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.18em] uppercase font-semibold mb-6" style={{ color: RUST }}>Achievements</p>
          <div className="flex flex-col gap-3">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.label} className="flex items-baseline justify-between text-[14px]">
                <span>{a.label}</span>
                <span className="text-[12px] opacity-40">{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "rgba(51,48,44,0.1)" }}>
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 flex items-center justify-between text-[13px]" style={{ color: MUTED }}>
          <span className={script.className + " text-xl"} style={{ color: INK }}>Tridhm Garg</span>
          <span>Flower Mound, Texas</span>
        </div>
      </footer>
    </div>
  );
}
