import { Inter } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const RUST = "#b8763f";
const INK = "#33302c";
const CREAM = "#faf7f2";

export function HDetailShell({
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
      <div className="max-w-[700px] mx-auto px-6 sm:px-10 pt-14 pb-28">
        <Link
          href="/h"
          className="inline-flex items-center gap-2 text-[13px] opacity-50 hover:opacity-80 mb-14"
        >
          <ArrowLeft size={14} /> Back
        </Link>

        <p className="text-[12px] tracking-[0.18em] uppercase font-semibold mb-4" style={{ color: RUST }}>
          {eyebrow}
        </p>
        <h1 className="font-bold leading-[1.15] tracking-tight mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
          {title}
        </h1>
        <p className="text-[14px] opacity-50 mb-12 pb-10" style={{ borderBottom: "1px solid rgba(51,48,44,0.12)" }}>
          {meta}
        </p>

        <div className="flex flex-col gap-6 text-[16.5px] leading-[1.75] opacity-85 [&_strong]:font-semibold [&_strong]:opacity-100 [&_em]:font-medium">
          {children}
        </div>

        <div className="mt-16 pt-10" style={{ borderTop: "1px solid rgba(51,48,44,0.12)" }}>
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-full text-white"
            style={{ background: RUST }}
          >
            {externalLabel}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
