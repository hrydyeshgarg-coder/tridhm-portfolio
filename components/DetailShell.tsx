import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

const GREEN = "#3ddc84";
const BG = "#0a0c0f";
const PANEL = "#111418";
const BORDER = "rgba(255,255,255,0.09)";

export function DetailShell({
  eyebrow,
  title,
  meta,
  tags,
  externalHref,
  externalLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  tags: string[];
  externalHref: string;
  externalLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${mono.className} min-h-screen`} style={{ background: BG, color: "#e8eaed" }}>
      <div className="max-w-[760px] mx-auto px-5 sm:px-6 pt-8 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] opacity-50 hover:opacity-80 mb-10"
        >
          <ArrowLeft size={13} /> back_to_portfolio
        </Link>

        <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: GREEN }}>
          {eyebrow}
        </p>
        <h1 className="text-2xl sm:text-[32px] font-bold leading-tight mb-3">{title}</h1>
        <p className="text-[12.5px] opacity-45 mb-4">{meta}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 rounded border"
              style={{ borderColor: BORDER, background: PANEL }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col gap-5 text-[14.5px] leading-relaxed opacity-80 [&_strong]:text-[#e8eaed] [&_strong]:font-semibold"
        >
          {children}
        </div>

        <div className="mt-14 pt-8 border-t" style={{ borderColor: BORDER }}>
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-3 rounded border"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            {externalLabel}
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
