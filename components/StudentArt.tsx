// Original, hand-built student-themed vector art — genuinely royalty-free
// since it's authored here, not sourced from any third-party stock library
// (which can't be reliably fetched/license-verified in this environment).

export function GradCapArt({ color = "#3ddc84" }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      <path d="M60 10 L115 32 L60 54 L5 32 Z" fill={color} opacity="0.85" />
      <path d="M30 40 L30 62 Q60 78 90 62 L90 40" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="108" y1="35" x2="108" y2="68" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="108" cy="72" r="4" fill={color} />
    </svg>
  );
}

export function BookStackArt({ color = "#3ddc84" }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      <rect x="15" y="60" width="90" height="14" rx="3" fill={color} opacity="0.9" />
      <rect x="22" y="42" width="76" height="14" rx="3" fill={color} opacity="0.65" />
      <rect x="30" y="24" width="60" height="14" rx="3" fill={color} opacity="0.4" />
      <circle cx="60" cy="14" r="6" fill={color} opacity="0.9" />
    </svg>
  );
}

export function BackpackArt({ color = "#3ddc84" }: { color?: string }) {
  return (
    <svg viewBox="0 0 90 110" className="w-full h-full">
      <rect x="15" y="30" width="60" height="70" rx="16" fill="none" stroke={color} strokeWidth="3" />
      <rect x="30" y="10" width="30" height="26" rx="8" fill="none" stroke={color} strokeWidth="3" />
      <line x1="45" y1="55" x2="45" y2="85" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="45" cy="70" r="3" fill={color} />
    </svg>
  );
}

export function LaptopArt({ color = "#3ddc84" }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 90" className="w-full h-full">
      <rect x="20" y="15" width="80" height="52" rx="4" fill="none" stroke={color} strokeWidth="3" />
      <path d="M10 75 L110 75 L100 67 L20 67 Z" fill={color} opacity="0.85" />
      <line x1="40" y1="30" x2="80" y2="30" stroke={color} strokeWidth="2" opacity="0.6" />
      <line x1="40" y1="40" x2="70" y2="40" stroke={color} strokeWidth="2" opacity="0.6" />
      <line x1="40" y1="50" x2="75" y2="50" stroke={color} strokeWidth="2" opacity="0.6" />
    </svg>
  );
}
