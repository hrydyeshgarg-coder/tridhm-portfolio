import { Inter, Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "800"] });

const TEAL = "#0fb5b0";

export function GDetailShell({
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
    <div className={`${inter.className} min-h-screen`} style={{ background: "#ffffff", color: "#0a0a0a" }}>
      <div className="max-w-[720px] mx-auto px-6 sm:px-10 pt-16 pb-28">
        <Link
          href="/g"
          className="inline-flex items-center gap-2 text-[13px] opacity-50 hover:opacity-80 mb-16"
        >
          <ArrowLeft size={14} /> Back
        </Link>

        <p className="text-[12px] tracking-[0.2em] uppercase mb-4" style={{ color: TEAL }}>
          {eyebrow}
        </p>
        <h1 className={`${display.className} font-extrabold leading-[1.05] tracking-tight mb-4`} style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
          {title}
        </h1>
        <p className="text-[14px] opacity-45 mb-14 pb-10 border-b border-black/10">{meta}</p>

        <div className="flex flex-col gap-6 text-[16px] sm:text-[17px] leading-relaxed opacity-80 [&_strong]:text-black [&_strong]:font-semibold [&_em]:font-medium">
          {children}
        </div>

        <div className="mt-16 pt-10 border-t border-black/10">
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold border-b-2 pb-1"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            {externalLabel}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
