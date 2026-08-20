import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

const GREEN = "#0d9463";
const BG = "#f4f5f3";
const PANEL = "#ffffff";
const BORDER = "rgba(20,24,20,0.10)";
const INK = "#14181c";

export function Figure({
  src, alt, caption, width = 1000, height = 620,
}: { src: string; alt: string; caption: string; width?: number; height?: number }) {
  return (
    <figure className="rounded-lg overflow-hidden border" style={{ borderColor: BORDER, background: PANEL }}>
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
      <figcaption className="text-[11px] opacity-55 px-4 py-2.5 border-t" style={{ borderColor: BORDER }}>{caption}</figcaption>
    </figure>
  );
}

export function KDetailShell({
  eyebrow,
  title,
  meta,
  tags,
  heroImage,
  heroAlt,
  titleLogo,
  externalHref,
  externalLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  tags: string[];
  heroImage?: string;
  heroAlt?: string;
  titleLogo?: string;
  externalHref: string;
  externalLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${mono.className} min-h-screen`} style={{ background: BG, color: INK }}>
      {heroImage && (
        <div className="w-full max-h-[380px] overflow-hidden border-b" style={{ borderColor: BORDER }}>
          <Image src={heroImage} alt={heroAlt ?? ""} width={1600} height={700} className="w-full h-[220px] sm:h-[340px] object-cover" priority />
        </div>
      )}
      <div className="max-w-[780px] mx-auto px-5 sm:px-6 pt-8 pb-24">
        <Link
          href="/k"
          className="inline-flex items-center gap-2 text-[12px] opacity-50 hover:opacity-80 mb-10"
        >
          <ArrowLeft size={13} /> back_to_portfolio
        </Link>

        <p className="text-[11px] tracking-[0.15em] uppercase mb-3 font-semibold" style={{ color: GREEN }}>
          {eyebrow}
        </p>
        <h1 className="text-2xl sm:text-[32px] font-bold leading-tight mb-3 flex items-center gap-3">
          {titleLogo && (
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white border shrink-0 inline-flex items-center justify-center" style={{ borderColor: BORDER }}>
              <Image src={titleLogo} alt="" width={40} height={40} className="w-full h-full object-contain" />
            </span>
          )}
          {title}
        </h1>
        <p className="text-[12.5px] opacity-55 mb-4">{meta}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 text-[10px] px-2 py-1 rounded border"
              style={{ borderColor: BORDER, background: PANEL }}
            >
              {t === "IEEE" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/logo-ieee.svg" alt="" className="h-2.5 w-auto" />
              )}
              {t === "Amazon" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/images/logo-amazon.svg" alt="" className="h-2.5 w-auto" />
              )}
              {t}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col gap-6 text-[14.5px] leading-relaxed opacity-85 [&_strong]:opacity-100 [&_strong]:font-semibold [&_p]:opacity-85"
        >
          {children}
        </div>

        <div className="mt-14 pt-8 border-t" style={{ borderColor: BORDER }}>
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-3 rounded border"
            style={{ borderColor: GREEN, color: GREEN, background: "#ffffff" }}
          >
            {externalLabel}
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
