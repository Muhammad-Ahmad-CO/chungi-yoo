import { useReveal } from "@/hooks/use-reveal";

export type Work = {
  index: string;
  title: string;
  description: string;
  image: string;
  image2: string;
  arch: string;
  bg: string;
};

export function WorkCard({ work }: { work: Work }) {
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      ref={reveal.ref}
      className={`${reveal.className} relative overflow-hidden px-5 pt-28 pb-20 md:px-16 md:pt-40 md:pb-28`}
      style={{ backgroundColor: work.bg }}
    >
      {/* big arch shape behind the cards */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[52rem] max-w-[130vw] -translate-x-1/2 rounded-t-full md:top-28 md:h-[42rem]"
        style={{ backgroundColor: work.arch }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative mx-auto flex h-[19rem] max-w-xl items-center justify-center md:h-[26rem]">
          <img
            src={work.image2}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute right-4 w-40 rotate-[7deg] rounded-2xl object-cover shadow-[0_24px_50px_-22px_rgba(0,0,0,0.55)] md:right-10 md:w-60"
          />
          <img
            src={work.image}
            alt={`${work.title} project artwork`}
            loading="lazy"
            className="absolute left-4 w-40 -rotate-[8deg] rounded-2xl object-cover shadow-[0_28px_60px_-20px_rgba(0,0,0,0.5)] md:left-10 md:w-60"
          />
        </div>

        <p className="mt-6 text-center eyebrow text-ink/50">{work.index}</p>
        <h2 className="mt-3 text-center text-6xl leading-[0.9] md:text-[7rem]">{work.title}</h2>
        <p className="mx-auto mt-7 max-w-md text-center text-base leading-relaxed text-ink/70">
          {work.description}
        </p>
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-ink/40 px-7 py-3 eyebrow transition-colors hover:bg-ink hover:text-cream"
          >
            View project
          </a>
        </div>
      </div>
    </section>
  );
}
