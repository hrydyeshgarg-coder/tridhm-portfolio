import { Inter, Bricolage_Grotesque, Caveat } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "800"] });
const signature = Caveat({ subsets: ["latin"], weight: ["600"] });

const TEAL = "#0fb5b0";
const INK = "#0a0a0a";

const RESEARCH = [
  {
    n: "01",
    title: "Satellite Imagery + CNNs for Poverty Prediction",
    desc: "A CNN trained to recognize poverty indicators directly from satellite imagery of Africa. 90% accuracy on unseen data.",
    href: "/g/research/satellite-poverty-cnn",
  },
  {
    n: "02",
    title: "Intraday Market Forecasting with LSTM Networks",
    desc: "Two LSTM networks forecasting a decade of daily stock highs and lows. R² of 0.954 and 0.947.",
    href: "/g/research/lstm-market-forecast",
  },
];

const SERVICE = [
  {
    org: "Roar 4 Change — Shelter Coordinator",
    date: "Jul 2023 – Dec 2025",
    featured: true,
    desc: "2.5 years supporting homeless shelters across multiple DFW cities.",
  },
  { org: "Denton County Junior Historians", date: "Sep 2025 – May 2027", desc: "Curated museum exhibits and county archive research." },
  { org: "Rotary Youth Leadership Awards", date: "Jun 2026", desc: "Intensive leadership and communication program." },
  { org: "Flower Mound Leadership Program", date: "Aug 2026 – Apr 2027", desc: "Team management, accountability, goal-setting." },
];

const ACTIVITIES = ["Model UN", "FMHS Computer Science Club", "Schoolhouse Dialogues", "FMHS Band"];
const ACHIEVEMENTS = [
  { label: "National Honor Society", date: "2026" },
  { label: "AP Scholar with Distinction", date: "2025 & 2026" },
];

export default function DesignGHome() {
  return (
    <div className={`${inter.className} min-h-screen`} style={{ background: "#ffffff", color: INK }}>
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
        {/* Nav */}
        <div className="flex items-center justify-between pt-10 pb-16 sm:pb-24">
          <span className={`${signature.className} text-3xl`}>TG.</span>
          <div className="flex gap-8 text-[13px] font-medium tracking-wide uppercase opacity-40">
            <a href="#research" className="hover:opacity-100">Research</a>
            <a href="#writing" className="hover:opacity-100">Writing</a>
            <a href="#service" className="hover:opacity-100">Service</a>
          </div>
        </div>

        {/* Intro row */}
        <div className="grid sm:grid-cols-[1fr_1fr] gap-8 sm:gap-6 items-start pb-10 border-b border-black/10">
          <div>
            <p className="text-[13px] opacity-50 mb-1">
              Hello and welcome to my website <span style={{ color: TEAL }} className="font-medium">V1.0</span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight opacity-70">
              AI Researcher
              <br />
              Author
              <br />
              Developer
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed opacity-55 sm:pt-9">
            My name is Tridhm, and I am a rising senior at Flower Mound High School in
            Texas, carrying a 4.575 weighted GPA across 17 AP courses. I write published
            AI research, self-publish novels, and build civic software that ships to
            real people.
          </p>
        </div>

        {/* Giant name */}
        <div className="py-14 sm:py-20">
          <h1
            className={`${display.className} font-extrabold leading-[0.88] tracking-tight`}
            style={{ fontSize: "clamp(3rem, 11vw, 8.5rem)" }}
          >
            TRIDHM
            <br />
            GARG
          </h1>
          <p className="mt-6 text-[13px] opacity-40">Flower Mound, Texas — Class of 2027</p>
        </div>

        {/* Research */}
        <section id="research" className="py-16 sm:py-20 border-t border-black/10">
          <p className="text-[12px] tracking-[0.2em] uppercase mb-8" style={{ color: TEAL }}>Research</p>
          <div className="flex flex-col gap-10">
            {RESEARCH.map((r) => (
              <Link key={r.n} href={r.href} className="grid sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-8 items-start group">
                <span className="text-sm opacity-30">{r.n}</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-1.5 group-hover:opacity-70">{r.title}</h3>
                  <p className="text-[14px] opacity-55 leading-relaxed max-w-lg">{r.desc}</p>
                </div>
                <ArrowUpRight size={18} className="opacity-30 group-hover:opacity-70 shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </section>

        {/* Engineering */}
        <section className="py-16 sm:py-20 border-t border-black/10">
          <p className="text-[12px] tracking-[0.2em] uppercase mb-8" style={{ color: TEAL }}>Engineering</p>
          <Link href="/g/engineering/dfw-community-hub" className="grid sm:grid-cols-[1fr_auto] gap-4 items-start group">
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-1.5 group-hover:opacity-70">DFW Community Hub</h3>
              <p className="text-[14px] opacity-55 leading-relaxed max-w-lg">
                A civic platform for the whole DFW metroplex, live in production —
                issue reporting, family support listings, and public resources for real
                residents.
              </p>
            </div>
            <ArrowUpRight size={18} className="opacity-30 group-hover:opacity-70 shrink-0 mt-1" />
          </Link>
        </section>

        {/* Writing */}
        <section id="writing" className="py-16 sm:py-20 border-t border-black/10">
          <p className="text-[12px] tracking-[0.2em] uppercase mb-8" style={{ color: TEAL }}>Writing</p>
          <Link href="/g/writing/abandoned-and-left-behind" className="block group mb-6">
            <p className={`${display.className} italic text-2xl sm:text-3xl font-medium leading-tight mb-4 group-hover:opacity-70`}>
              &ldquo;Will they find a way back home?&rdquo;
            </p>
            <p className="text-[14px] opacity-55 leading-relaxed max-w-lg">
              <span className="text-black font-medium">Abandoned and Left Behind</span> —
              a 165-page action-adventure novel set in 1969. Self-published on Amazon,
              4.0★ rating.
            </p>
          </Link>
          <p className="text-[13px] opacity-40 max-w-lg">
            A second manuscript, <em>Hell on Planet B</em>, was completed in 2024 and is
            not yet published.
          </p>
        </section>

        {/* Leadership & Service */}
        <section id="service" className="py-16 sm:py-20 border-t border-black/10">
          <p className="text-[12px] tracking-[0.2em] uppercase mb-8" style={{ color: TEAL }}>Leadership &amp; Service</p>
          <div className="flex flex-col gap-7">
            {SERVICE.map((s) => (
              <div key={s.org} className={s.featured ? "pl-4 border-l-2" : ""} style={s.featured ? { borderColor: TEAL } : undefined}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h4 className={`font-medium ${s.featured ? "text-lg" : "text-[15px]"}`}>{s.org}</h4>
                  <span className="text-[12px] opacity-40">{s.date}</span>
                </div>
                <p className="text-[13.5px] opacity-55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activities + Achievements */}
        <section className="py-16 sm:py-20 border-t border-black/10 grid sm:grid-cols-2 gap-12">
          <div>
            <p className="text-[12px] tracking-[0.2em] uppercase mb-6" style={{ color: TEAL }}>Activities</p>
            <div className="flex flex-wrap gap-2">
              {ACTIVITIES.map((a) => (
                <span key={a} className="text-[13px] px-3 py-1.5 rounded-full border border-black/15 opacity-70">{a}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[12px] tracking-[0.2em] uppercase mb-6" style={{ color: TEAL }}>Achievements</p>
            <div className="flex flex-col gap-3">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.label} className="flex items-baseline justify-between text-[14px]">
                  <span className="opacity-75">{a.label}</span>
                  <span className="opacity-40 text-[12px]">{a.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-black/10 flex items-center justify-between text-[13px] opacity-40">
          <span className={signature.className + " text-xl"}>TG.</span>
          <span>Flower Mound, Texas</span>
        </footer>
      </div>
    </div>
  );
}
