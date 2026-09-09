import { useReveal } from "@/hooks/use-reveal";

export type Work = {
  index: string;
  title: string;
  description: string;
  image: string;
  bg: string;
  tilt: number;
};

export function WorkCard({ work, flip }: { work: Work; flip: boolean }) {
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      ref={reveal.ref}
      className={`${reveal.className} relative overflow-hidden px-5 py-24 md:px-16 md:py-36`}
      style={{ backgroundColor: work.bg }}
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-12 md:gap-20 ${
          flip ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative w-full max-w-sm shrink-0">
          <div className="absolute inset-x-6 top-10 bottom-0 rounded-[999px] bg-cream/40 blur-2xl" />
          <img
            src={work.image}
            alt={`${work.title} project artwork`}
            loading="lazy"
            width={900}
            height={1200}
            style={{ ["--tilt" as string]: `${work.tilt}deg` }}
            className="relative w-full animate-float object-cover shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)]"
          />
        </div>

        <div className="max-w-md text-center md:text-left">
          <p className="eyebrow text-ink/50">{work.index}</p>
          <h2 className="mt-4 text-5xl md:text-7xl">{work.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">{work.description}</p>
          <a
            href="#contact"
            className="mt-8 inline-block border-b border-ink pb-1 eyebrow transition-opacity hover:opacity-60"
          >
            View project
          </a>
        </div>
      </div>
    </section>
  );
}
