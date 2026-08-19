import { Inter, Fraunces } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const display = Fraunces({ subsets: ["latin"], weight: ["700", "900"] });

const RED = "#c0292f";
const CREAM = "#fdf4ea";
const INK = "#1a1a1a";

export function JDetailShell({
  eyebrow,
  title,
  meta,
  externalHref,
  externalLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  externalHref: string;
  externalLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} min-h-screen`} style={{ background: CREAM, color: INK }}>
      <div className="max-w-[720px] mx-auto px-6 sm:px-10 pt-14 pb-28">
        <Link href="/j" className="inline-flex items-center gap-2 text-[13px] opacity-60 hover:opacity-100 mb-14 font-semibold">
          <ArrowLeft size={14} /> Back
        </Link>

        <p className="text-[13px] tracking-[0.15em] uppercase font-black mb-4" style={{ color: RED }}>{eyebrow}</p>
        <h1 className={`${display.className} font-black leading-[1.05] tracking-tight mb-4`} style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)" }}>
          {title}
        </h1>
        <p className="text-[14px] opacity-60 mb-12 pb-10 border-b-2" style={{ borderColor: "rgba(26,26,26,0.1)" }}>{meta}</p>

        <div className="flex flex-col gap-6 text-[16.5px] leading-[1.75] opacity-85 [&_strong]:font-bold [&_strong]:opacity-100">
          {children}
        </div>

        <div className="mt-16 pt-10 border-t-2" style={{ borderColor: "rgba(26,26,26,0.1)" }}>
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3.5 rounded-full text-white"
            style={{ background: RED }}
          >
            {externalLabel}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
