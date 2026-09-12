import type { PointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

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
  const shouldReduceMotion = useReducedMotion();

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--pointer-x", `${x * 12}deg`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * -10}deg`);
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "0deg");
    event.currentTarget.style.setProperty("--pointer-y", "0deg");
  }

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
        <motion.div
          initial="rest"
          whileHover={shouldReduceMotion ? "rest" : "hover"}
          whileTap={shouldReduceMotion ? "rest" : "hover"}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className="group relative mx-auto flex h-[19rem] max-w-xl cursor-pointer items-center justify-center [perspective:900px] md:h-[26rem]"
          aria-label={`Preview ${work.title} artwork`}
        >
          <motion.img
            src={work.image2}
            alt=""
            aria-hidden="true"
            loading="lazy"
            variants={{
              rest: { x: 0, y: 0, scale: 1, rotate: 7 },
              hover: { x: 24, y: -24, scale: 1.06, rotate: 12 },
            }}
            transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.8 }}
            className="absolute right-4 w-40 rounded-2xl object-cover shadow-[0_24px_50px_-22px_rgba(0,0,0,0.55)] md:right-10 md:w-60"
          />
          <motion.img
            src={work.image}
            alt={`${work.title} project artwork`}
            loading="lazy"
            variants={{
              rest: { x: 0, y: 0, scale: 1, rotate: -8 },
              hover: { x: -18, y: -46, scale: 1.11, rotate: -13 },
            }}
            transition={{ type: "spring", stiffness: 280, damping: 17, mass: 0.7 }}
            className="absolute left-4 z-10 w-40 rounded-2xl object-cover shadow-[0_28px_60px_-20px_rgba(0,0,0,0.5)] md:left-10 md:w-60"
            style={{ rotateX: "var(--pointer-y)", rotateY: "var(--pointer-x)" }}
          />
        </motion.div>

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
