export function PixelCharacter({ className = "" }: { className?: string }) {
  const skin = "#f5d5b8";
  const skinShade = "#e8b88a";
  const hijab = "#1a1a22";
  const hijabHi = "#3d3d4a";
  const blazer = "#252530";
  const blazerHi = "#3a3a48";
  const eye = "#4a3020";
  const lip = "#e88aaa";
  const blush = "#f9a8d4";
  const accent = "#f472b6";

  return (
    <svg
      viewBox="0 0 64 88"
      className={className}
      aria-hidden="true"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Soft hijab dome — rounded, not a box */}
      <rect x="22" y="4" width="20" height="4" fill={hijab} />
      <rect x="18" y="6" width="28" height="4" fill={hijab} />
      <rect x="14" y="8" width="36" height="4" fill={hijab} />
      <rect x="12" y="10" width="40" height="4" fill={hijab} />
      <rect x="10" y="12" width="44" height="4" fill={hijab} />
      <rect x="10" y="16" width="6" height="10" fill={hijab} />
      <rect x="48" y="16" width="6" height="10" fill={hijab} />
      <rect x="12" y="14" width="4" height="4" fill={hijabHi} />
      <rect x="48" y="14" width="4" height="4" fill={hijabHi} />
      {/* Cute pin sparkle */}
      <rect x="30" y="8" width="4" height="4" fill={accent} />
      <rect x="31" y="7" width="2" height="2" fill="#fce7f3" />

      {/* Round chibi face */}
      <rect x="18" y="14" width="4" height="4" fill={skin} />
      <rect x="42" y="14" width="4" height="4" fill={skin} />
      <rect x="16" y="18" width="6" height="12" fill={skin} />
      <rect x="42" y="18" width="6" height="12" fill={skin} />
      <rect x="18" y="16" width="28" height="16" fill={skin} />
      <rect x="20" y="30" width="24" height="4" fill={skinShade} />
      <rect x="22" y="32" width="20" height="2" fill={skinShade} />

      {/* Big sparkly eyes */}
      <rect x="22" y="22" width="8" height="8" fill={eye} />
      <rect x="34" y="22" width="8" height="8" fill={eye} />
      <rect x="24" y="24" width="4" height="4" fill="#6b4428" />
      <rect x="36" y="24" width="4" height="4" fill="#6b4428" />
      <rect x="24" y="23" width="3" height="3" fill="#fff" />
      <rect x="37" y="23" width="3" height="3" fill="#fff" />
      <rect x="26" y="25" width="2" height="2" fill="#fce7f3" />
      <rect x="39" y="25" width="2" height="2" fill="#fce7f3" />

      {/* Rosy cheeks */}
      <rect x="18" y="28" width="4" height="3" fill={blush} opacity="0.7" />
      <rect x="42" y="28" width="4" height="3" fill={blush} opacity="0.7" />

      {/* Happy little smile */}
      <rect x="28" y="32" width="8" height="2" fill={lip} />
      <rect x="26" y="33" width="2" height="2" fill={lip} />
      <rect x="36" y="33" width="2" height="2" fill={lip} />

      {/* Soft neck drape */}
      <rect x="20" y="34" width="24" height="4" fill={hijab} />
      <rect x="18" y="36" width="28" height="4" fill={hijab} />
      <rect x="16" y="38" width="6" height="4" fill={hijabHi} />
      <rect x="42" y="38" width="6" height="4" fill={hijabHi} />

      {/* Tiny cute blazer body */}
      <rect x="18" y="42" width="28" height="2" fill={blazerHi} />
      <rect x="16" y="44" width="32" height="12" fill={blazer} />
      <rect x="22" y="46" width="3" height="8" fill={blazerHi} />
      <rect x="39" y="46" width="3" height="8" fill={blazerHi} />
      <rect x="28" y="48" width="8" height="6" fill="#1e1e28" />

      {/* Stubby arms — waving pose */}
      <rect x="8" y="46" width="8" height="6" fill={blazer} />
      <rect x="6" y="48" width="4" height="6" fill={skin} />
      <rect x="48" y="44" width="8" height="6" fill={blazer} />
      <rect x="54" y="42" width="4" height="6" fill={skin} />
      <rect x="55" y="40" width="2" height="2" fill={skin} />

      {/* Short legs & boots */}
      <rect x="22" y="56" width="8" height="8" fill="#2d2d38" />
      <rect x="34" y="56" width="8" height="8" fill="#2d2d38" />
      <rect x="20" y="64" width="10" height="4" fill="#1a1a22" />
      <rect x="34" y="64" width="10" height="4" fill="#1a1a22" />
      <rect x="21" y="65" width="2" height="2" fill={accent} opacity="0.5" />
      <rect x="41" y="65" width="2" height="2" fill={accent} opacity="0.5" />

      {/* Ground shadow */}
      <ellipse cx="32" cy="78" rx="18" ry="4" fill="#4ade80" opacity="0.25" />
    </svg>
  );
}

export function PixelCat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" className={className} aria-hidden="true" style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="8" width="24" height="12" fill="#e2e8f0" />
      <rect x="2" y="6" width="6" height="6" fill="#e2e8f0" />
      <rect x="24" y="6" width="6" height="6" fill="#e2e8f0" />
      <rect x="2" y="4" width="4" height="4" fill="#e2e8f0" />
      <rect x="26" y="4" width="4" height="4" fill="#e2e8f0" />
      <rect x="10" y="12" width="3" height="3" fill="#1e1b4b" />
      <rect x="19" y="12" width="3" height="3" fill="#1e1b4b" />
      <rect x="14" y="16" width="4" height="2" fill="#f9a8d4" />
      <rect x="26" y="14" width="8" height="4" fill="#e2e8f0" />
    </svg>
  );
}

export function PixelTree({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={className} aria-hidden="true" style={{ imageRendering: "pixelated" }}>
      <rect x="16" y="36" width="8" height="16" fill="#78350f" />
      <rect x="8" y="20" width="24" height="8" fill="#22c55e" />
      <rect x="12" y="12" width="16" height="8" fill="#4ade80" />
      <rect x="16" y="4" width="8" height="8" fill="#86efac" />
    </svg>
  );
}

export function PixelConsole({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" style={{ imageRendering: "pixelated" }}>
      {/* Body */}
      <rect x="4" y="4" width="112" height="92" rx="0" fill="#db2777" />
      <rect x="8" y="8" width="104" height="84" fill="#be185d" />
      {/* Top screen */}
      <rect x="16" y="14" width="88" height="36" fill="#1e1b4b" />
      <rect x="20" y="18" width="80" height="28" fill="#312e81" />
      {/* Character in screen — chibi */}
      <rect x="44" y="20" width="16" height="3" fill="#1a1a22" />
      <rect x="42" y="23" width="20" height="8" fill="#f5d5b8" />
      <rect x="46" y="25" width="4" height="4" fill="#4a3020" />
      <rect x="54" y="25" width="4" height="4" fill="#4a3020" />
      <rect x="47" y="26" width="2" height="2" fill="#fff" />
      <rect x="55" y="26" width="2" height="2" fill="#fff" />
      <rect x="48" y="30" width="8" height="2" fill="#e88aaa" />
      <rect x="44" y="32" width="16" height="4" fill="#252530" />
      {/* Bottom screen */}
      <rect x="16" y="56" width="88" height="28" fill="#fce7f3" />
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={20 + col * 8}
            y={60 + row * 4}
            width="6"
            height="2"
            fill="#f9a8d4"
            opacity="0.4"
          />
        ))
      )}
      {/* Buttons */}
      <rect x="27" y="87" width="6" height="6" fill="#22d3ee" />
      <rect x="39" y="87" width="6" height="6" fill="#4ade80" />
      <rect x="51" y="87" width="6" height="6" fill="#f472b6" />
    </svg>
  );
}
