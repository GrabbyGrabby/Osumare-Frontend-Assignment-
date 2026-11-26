export function OsumareLogo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Osumare Marketing Solutions Home"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078ff] rounded-full ${className}`}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <circle
          cx="18"
          cy="18"
          r="14"
          stroke="url(#osumare-ring)"
          strokeWidth="4"
        />
        <circle cx="18" cy="18" r="6" fill="#0f172a" />
        <defs>
          <linearGradient
            id="osumare-ring"
            x1="4"
            y1="4"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0078FF" />
            <stop offset="0.5" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[17px] font-medium tracking-tight text-slate-900">
          Osumare
        </span>
        <span className="text-[9px] tracking-[0.18em] uppercase text-slate-500 mt-0.5">
          Marketing
        </span>
      </div>
    </a>
  );
}

export function HeroHouseIllustration() {
  return (
    <svg
      viewBox="0 0 560 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[540px] h-auto mx-auto"
      role="img"
      aria-label="Illustration of a house next to a wooden sign reading We Need Marketing"
    >
      {/* Ground shadow */}
      <ellipse cx="280" cy="268" rx="230" ry="16" fill="#E2E8F0" opacity="0.65" />

      {/* Bushes */}
      <circle cx="122" cy="240" r="22" fill="#BFDBFE" />
      <circle cx="145" cy="246" r="16" fill="#93C5FD" />
      <circle cx="348" cy="244" r="20" fill="#BFDBFE" />

      {/* House body */}
      <rect
        x="148"
        y="128"
        width="184"
        height="132"
        rx="12"
        fill="#FFFFFF"
        stroke="#CBD5E1"
        strokeWidth="2"
      />

      {/* Blue Roof */}
      <path
        d="M128 134L240 52L352 134H128Z"
        fill="#0078FF"
        stroke="#0062D6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="282" y="66" width="22" height="36" rx="4" fill="#1E293B" />

      {/* Windows */}
      <rect
        x="172"
        y="156"
        width="44"
        height="40"
        rx="6"
        fill="#EFF6FF"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <line x1="194" y1="156" x2="194" y2="196" stroke="#93C5FD" strokeWidth="1.5" />
      <line x1="172" y1="176" x2="216" y2="176" stroke="#93C5FD" strokeWidth="1.5" />

      {/* Garage door */}
      <rect x="234" y="168" width="76" height="92" rx="8" fill="#0078FF" />
      <line x1="244" y1="190" x2="300" y2="190" stroke="#60A5FA" strokeWidth="2" />
      <line x1="244" y1="212" x2="300" y2="212" stroke="#60A5FA" strokeWidth="2" />
      <line x1="244" y1="234" x2="300" y2="234" stroke="#60A5FA" strokeWidth="2" />

      {/* Wooden Signpost */}
      <rect x="412" y="114" width="10" height="148" rx="4" fill="#92400E" />
      <rect x="372" y="114" width="90" height="8" rx="4" fill="#78350F" />

      {/* Hanging Sign */}
      <line x1="388" y1="122" x2="388" y2="140" stroke="#64748B" strokeWidth="2" />
      <line x1="446" y1="122" x2="446" y2="140" stroke="#64748B" strokeWidth="2" />
      <rect
        x="362"
        y="138"
        width="112"
        height="68"
        rx="12"
        fill="#FEF3C7"
        stroke="#D97706"
        strokeWidth="2"
      />
      <text
        x="418"
        y="167"
        textAnchor="middle"
        fill="#0F172A"
        fontSize="13"
        fontWeight="500"
        fontFamily="Poppins, sans-serif"
      >
        We Need
      </text>
      <text
        x="418"
        y="186"
        textAnchor="middle"
        fill="#0078FF"
        fontSize="13"
        fontWeight="600"
        fontFamily="Poppins, sans-serif"
      >
        Marketing
      </text>
    </svg>
  );
}

export function MasteryIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[400px] h-auto mx-auto"
      role="img"
      aria-label="Illustration of digital growth with an upward blue arrow"
    >
      <rect x="28" y="28" width="364" height="264" rx="28" fill="#F8FAFC" />
      <circle cx="320" cy="94" r="38" fill="#DBEAFE" opacity="0.7" />
      <circle cx="104" cy="214" r="28" fill="#E0F2FE" />
      {/* Upward curved arrow */}
      <path
        d="M84 226C146 218 206 178 274 96"
        stroke="#0078FF"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M242 94L280 88L276 126"
        stroke="#0078FF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark speech bubble */}
      <rect
        x="246"
        y="168"
        width="96"
        height="58"
        rx="16"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="2"
      />
      <circle cx="274" cy="197" r="13" fill="#0078FF" />
      <path
        d="M268 197L272.5 201.5L281 192"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="296" y="189" width="32" height="5" rx="2.5" fill="#CBD5E1" />
      <rect x="296" y="200" width="22" height="5" rx="2.5" fill="#E2E8F0" />
    </svg>
  );
}

export function InsightsIllustration() {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[400px] h-auto mx-auto"
      role="img"
      aria-label="Presentation board reading We Are Expert"
    >
      <rect x="20" y="20" width="380" height="300" rx="28" fill="#F1F5F9" />
      {/* Wall clock */}
      <circle
        cx="94"
        cy="82"
        r="22"
        fill="#FFFFFF"
        stroke="#CBD5E1"
        strokeWidth="2"
      />
      <path d="M94 72V82L101 86" stroke="#0078FF" strokeWidth="2" strokeLinecap="round" />

      {/* Presentation Board */}
      <rect
        x="148"
        y="76"
        width="206"
        height="148"
        rx="18"
        fill="#0078FF"
      />
      <text
        x="251"
        y="142"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="22"
        fontWeight="500"
        fontFamily="Poppins, sans-serif"
      >
        We Are
      </text>
      <text
        x="251"
        y="174"
        textAnchor="middle"
        fill="#DBEAFE"
        fontSize="26"
        fontWeight="600"
        fontFamily="Poppins, sans-serif"
      >
        Expert
      </text>
      {/* Stand */}
      <line x1="210" y1="224" x2="188" y2="274" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />
      <line x1="292" y1="224" x2="314" y2="274" stroke="#64748B" strokeWidth="5" strokeLinecap="round" />

      {/* Potted plant */}
      <rect x="74" y="236" width="36" height="36" rx="8" fill="#0F172A" />
      <circle cx="92" cy="220" r="18" fill="#86EFAC" />
    </svg>
  );
}

export function ConversionIllustration() {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[380px] h-auto mx-auto"
      role="img"
      aria-label="House inspected by a magnifying glass"
    >
      <rect x="24" y="24" width="372" height="252" rx="28" fill="#F8FAFC" />
      {/* Cloud */}
      <path
        d="M112 96C112 82 124 72 138 72C144 60 158 54 172 58C184 58 194 68 196 80C208 82 216 92 214 104C212 114 202 120 190 120H126C116 120 112 108 112 96Z"
        fill="#DBEAFE"
      />
      {/* House */}
      <rect
        x="118"
        y="138"
        width="136"
        height="96"
        rx="10"
        fill="#FFFFFF"
        stroke="#CBD5E1"
        strokeWidth="2"
      />
      <path d="M104 142L186 84L268 142H104Z" fill="#0078FF" />
      <rect x="164" y="172" width="44" height="62" rx="6" fill="#0078FF" />
      {/* Magnifying glass */}
      <circle
        cx="256"
        cy="176"
        r="48"
        fill="#EFF6FF"
        fillOpacity="0.65"
        stroke="#0F172A"
        strokeWidth="6"
      />
      <line
        x1="292"
        y1="210"
        x2="334"
        y2="250"
        stroke="#0F172A"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
