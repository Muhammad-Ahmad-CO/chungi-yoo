export function RotatingBadge({
  text = "chungi's studio ✳ chungi's studio ✳ ",
  className = "",
  size = 132,
}: {
  text?: string;
  className?: string;
  size?: number;
}) {
  const chars = Array.from(text);
  return (
    <div
      className={`pointer-events-none relative animate-spin-slow ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 eyebrow text-[0.55rem] text-ink/70"
          style={{
            transform: `rotate(${(360 / chars.length) * i}deg) translateY(-${size / 2 - 10}px)`,
            transformOrigin: "0 0",
          }}
        >
          {c}
        </span>
      ))}
      <span className="absolute inset-0 flex items-center justify-center text-lg">☺</span>
    </div>
  );
}

export function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 120"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M14 4c26 22 32 62 16 106" />
      <path d="M20 96l10 16 12-13" />
    </svg>
  );
}

export function ArrowSide({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M4 30C34 34 78 24 112 12" />
      <path d="M92 4l20 8-14 13" />
    </svg>
  );
}
