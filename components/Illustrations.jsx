export function CupIllustration({ variant = "small" }) {
  const size = variant === "large" ? 320 : 220;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" role="img" aria-label="Ilustrasi cangkir kopi">
      <circle cx="100" cy="112" r="78" fill="none" stroke="#C99A3B" strokeWidth="3" strokeDasharray="6 8" />
      <path d="M78 52c-8-10 8-14 0-26M100 50c-8-10 8-14 0-26M122 52c-8-10 8-14 0-26" stroke="#8A6A4A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M52 76h96l-8 70a14 14 0 0 1-14 12H74a14 14 0 0 1-14-12z" fill="#F2E6CC" stroke="#2A1A12" strokeWidth="4" />
      <path d="M148 90h10a16 16 0 0 1 0 32h-14" fill="none" stroke="#2A1A12" strokeWidth="4" />
      <ellipse cx="100" cy="78" rx="46" ry="7" fill="#5A3420" />
      <path d="M36 166h128" stroke="#2A1A12" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function MagnifierIllustration() {
  return (
    <svg width="220" height="220" viewBox="0 0 200 200" role="img" aria-label="Ilustrasi kaca pembesar di atas biji kopi">
      <circle cx="84" cy="84" r="48" fill="#F2E6CC" stroke="#2A1A12" strokeWidth="6" />
      <path d="M120 120l46 46" stroke="#2A1A12" strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="74" cy="80" rx="12" ry="17" fill="#5A3420" transform="rotate(-25 74 80)" />
      <path d="M70 66c6 8 4 20 8 28" stroke="#F2E6CC" strokeWidth="3" fill="none" />
      <ellipse cx="98" cy="96" rx="10" ry="14" fill="#5A3420" transform="rotate(30 98 96)" />
    </svg>
  );
}

export function BookIllustration() {
  return (
    <svg width="220" height="220" viewBox="0 0 200 200" role="img" aria-label="Ilustrasi tumpukan buku misteri">
      <rect x="40" y="128" width="124" height="22" rx="3" fill="#B8322A" stroke="#2A1A12" strokeWidth="4" />
      <rect x="50" y="104" width="108" height="22" rx="3" fill="#F2E6CC" stroke="#2A1A12" strokeWidth="4" />
      <rect x="36" y="80" width="118" height="22" rx="3" fill="#C99A3B" stroke="#2A1A12" strokeWidth="4" />
      <path d="M60 80v22M140 128v22" stroke="#2A1A12" strokeWidth="3" />
      <text x="104" y="120" textAnchor="middle" fontFamily="Special Elite, monospace" fontSize="14" fill="#2A1A12">?</text>
    </svg>
  );
}

export function KeyIllustration() {
  return (
    <svg width="220" height="220" viewBox="0 0 200 200" role="img" aria-label="Ilustrasi kunci dan lilin">
      <circle cx="64" cy="100" r="26" fill="none" stroke="#2A1A12" strokeWidth="8" />
      <path d="M90 100h80M150 100v20M164 100v14" stroke="#2A1A12" strokeWidth="8" strokeLinecap="round" />
      <rect x="128" y="40" width="18" height="40" fill="#F2E6CC" stroke="#2A1A12" strokeWidth="4" />
      <path d="M137 26c-6 6-2 12 0 14 2-2 6-8 0-14z" fill="#C99A3B" />
    </svg>
  );
}
