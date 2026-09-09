import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Illustrations", href: "#illustrations" },
  { label: "Contact", href: "#contact" },
];

function Wordmark() {
  return (
    <span className="display leading-[0.8] text-2xl md:text-3xl">
      <span className="block italic">chungi</span>
      <span className="block pl-5 italic">yoo</span>
    </span>
  );
}

function Asterisk() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 animate-spin-slow text-ink"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
    </svg>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between px-5 py-5 md:px-10 md:py-7 mix-blend-difference">
        <a href="#top" className="pointer-events-auto text-cream" aria-label="Chungi Yoo — home">
          <Wordmark />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="pointer-events-auto mt-2 flex h-8 w-10 flex-col items-center justify-center gap-[7px] text-cream"
        >
          <span
            className={`block h-[2px] w-9 bg-current transition-transform duration-300 ${
              open ? "translate-y-[4.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-9 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[4.5px] -rotate-45" : ""
            }`}
          />
        </button>

        <div className="pointer-events-none mt-1 text-cream">
          <Asterisk />
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-cream transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-2">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${80 + i * 70}ms` }}
              className={`display text-4xl uppercase tracking-[0.02em] transition-all duration-700 hover:italic md:text-6xl ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-10 flex gap-10 eyebrow">
            <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="hover:italic">
              Behance
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:italic">
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
