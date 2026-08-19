// Original abstract illustrations — no stock/scraped imagery, fully
// hand-built SVG art in a vivid, editorial-illustration style to give the
// site genuine color and life.

const CORAL = "#ff6b5b";
const TEAL = "#0d9488";
const GOLD = "#f4a933";
const PURPLE = "#7c3aed";
const INK = "#1a1a1a";

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={CORAL} />
          <stop offset="100%" stopColor={GOLD} />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={TEAL} />
          <stop offset="100%" stopColor={PURPLE} />
        </linearGradient>
      </defs>
      <rect width="500" height="500" fill="#fdf4ea" />
      {/* Organic blobs */}
      <ellipse cx="150" cy="180" rx="130" ry="110" fill="url(#g1)" opacity="0.9" />
      <ellipse cx="360" cy="320" rx="150" ry="130" fill="url(#g2)" opacity="0.85" />
      <circle cx="330" cy="140" r="60" fill={GOLD} opacity="0.9" />
      {/* Grid overlay — evokes data / research */}
      <g stroke={INK} strokeOpacity="0.15" strokeWidth="1">
        <line x1="0" y1="250" x2="500" y2="250" />
        <line x1="250" y1="0" x2="250" y2="500" />
      </g>
      {/* Network / satellite motif */}
      <g stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M120 200 L220 150 L310 210 L400 160" strokeOpacity="0.7" />
        <circle cx="120" cy="200" r="5" fill={INK} />
        <circle cx="220" cy="150" r="5" fill={INK} />
        <circle cx="310" cy="210" r="5" fill={INK} />
        <circle cx="400" cy="160" r="5" fill={INK} />
      </g>
      {/* Open book shape, bottom */}
      <path
        d="M120 380 Q250 350 380 380 L380 430 Q250 400 120 430 Z"
        fill="#fff"
        stroke={INK}
        strokeWidth="2"
      />
      <path d="M250 358 L250 408" stroke={INK} strokeWidth="1.5" opacity="0.6" />
      {/* Little stars */}
      <circle cx="60" cy="80" r="4" fill={CORAL} />
      <circle cx="440" cy="380" r="3" fill={TEAL} />
      <circle cx="430" cy="70" r="3" fill={PURPLE} />
    </svg>
  );
}

export function ResearchIllustration() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <rect width="300" height="300" fill="#fdf4ea" />
      <circle cx="150" cy="150" r="110" fill={TEAL} opacity="0.15" />
      <g stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.75">
        {[...Array(5)].map((_, i) => (
          <circle key={i} cx={90 + i * 30} cy={150 + Math.sin(i) * 40} r="6" fill={i % 2 ? CORAL : TEAL} stroke="none" />
        ))}
        <path d="M90 150 Q120 110 150 150 T210 150" />
      </g>
      <rect x="70" y="210" width="160" height="8" rx="4" fill={GOLD} opacity="0.7" />
      <rect x="70" y="225" width="100" height="8" rx="4" fill={CORAL} opacity="0.5" />
    </svg>
  );
}

export function WritingIllustration() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <rect width="300" height="300" fill="#fdf4ea" />
      <ellipse cx="150" cy="150" rx="115" ry="95" fill={CORAL} opacity="0.15" />
      <path d="M80 190 Q150 160 220 190 L220 230 Q150 200 80 230 Z" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M150 168 L150 218" stroke={INK} strokeWidth="1.5" opacity="0.6" />
      <path d="M95 100 L150 75 L205 100" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="150" cy="75" r="5" fill={GOLD} />
    </svg>
  );
}

export function EngineeringIllustration() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <rect width="300" height="300" fill="#fdf4ea" />
      <ellipse cx="150" cy="150" rx="115" ry="95" fill={PURPLE} opacity="0.15" />
      {/* Skyline motif */}
      <g fill={PURPLE} opacity="0.85">
        <rect x="80" y="150" width="30" height="80" rx="2" />
        <rect x="118" y="120" width="30" height="110" rx="2" />
        <rect x="156" y="160" width="30" height="70" rx="2" />
        <rect x="194" y="100" width="30" height="130" rx="2" />
      </g>
      <circle cx="209" cy="80" r="14" fill={GOLD} />
      <path d="M60 230 L240 230" stroke={INK} strokeWidth="2" strokeOpacity="0.4" />
    </svg>
  );
}
