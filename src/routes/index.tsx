import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/site-nav";
import { Marquee } from "@/components/site/marquee";
import { WorkCard, type Work } from "@/components/site/work-card";
import { RotatingBadge, ArrowDown, ArrowSide } from "@/components/site/rotating-badge";
import { useReveal, useScrollY } from "@/hooks/use-reveal";

import portrait from "@/assets/portrait.jpg";
import workIllustrations from "@/assets/work-illustrations.jpg";
import workBangs from "@/assets/work-bangs.jpg";
import workKorea from "@/assets/work-korea.jpg";
import workCube from "@/assets/work-cube.jpg";
import workBranding from "@/assets/work-branding.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chungi Yoo — Art Director & Illustrator" },
      {
        name: "description",
        content:
          "Welcome to the playground of Chungi Yoo — a Germany based art director and illustrator making bold branding and colourful editorial stories.",
      },
      { property: "og:title", content: "Chungi Yoo — Art Director & Illustrator" },
      {
        property: "og:description",
        content:
          "Welcome to the playground of Chungi Yoo — a Germany based art director and illustrator making bold branding and colourful editorial stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const WORKS: Work[] = [
  {
    index: "15",
    title: "Illustrations",
    description: "Commercial and personal stories told through the art. Colour first, always.",
    image: workIllustrations,
    image2: workBranding,
    arch: "oklch(0.915 0.11 95)",
    bg: "oklch(0.955 0.014 85)",
  },
  {
    index: "25",
    title: "Bangs",
    description:
      "Who needs a haircut? Bangs is a (hypothetical) hairdresser salon which stands out with its bright colours and fun characters.",
    image: workBangs,
    image2: workIllustrations,
    arch: "oklch(0.915 0.11 95)",
    bg: "oklch(0.985 0.008 85)",
  },
  {
    index: "35",
    title: "Liberty in North Korea",
    description:
      "The disproportional attention of today's media is paid to the never ending debate between world leaders — this series looks the other way.",
    image: workKorea,
    image2: workCube,
    arch: "oklch(0.93 0.012 85)",
    bg: "oklch(0.955 0.014 85)",
  },
  {
    index: "45",
    title: "Cube",
    description:
      "Walking to work, dancing in the club, riding your bike: we are constantly moving and producing energy. What if we could use it?",
    image: workCube,
    image2: workKorea,
    arch: "oklch(0.855 0.062 15)",
    bg: "oklch(0.955 0.014 85)",
  },
  {
    index: "55",
    title: "Chungi Yoo",
    description:
      "Branding for yourself is by far the most difficult thing to do. You tend to critique and procrastinate endlessly.",
    image: workBranding,
    image2: workBangs,
    arch: "oklch(0.93 0.012 85)",
    bg: "oklch(0.955 0.014 85)",
  },
];

function Hero() {
  const y = useScrollY();
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 pt-36 md:px-12 md:pt-44">
      {/* soft pink shapes */}
      <div
        className="pointer-events-none absolute left-6 top-[46%] h-40 w-40 rotate-45 bg-blush/70 md:h-64 md:w-64"
        style={{ transform: `translateY(${y * -0.12}px) rotate(45deg)` }}
      />
      <div
        className="pointer-events-none absolute -right-16 top-[30%] h-72 w-72 rounded-full bg-sun/50 blur-[2px] md:h-[28rem] md:w-[28rem]"
        style={{ transform: `translateY(${y * -0.18}px)` }}
      />

      <div className="relative mx-auto max-w-6xl">
        <h1 className="text-center text-[15vw] leading-[0.82] md:text-[10.5vw]">
          <span className="block">Welcome to the</span>
          <span className="block">playground</span>
          <span className="block">
            <span className="italic">of</span> chungi
          </span>
          <span className="block italic">yoo</span>
        </h1>

        {/* intro copy inside an oval outline */}
        <div className="pointer-events-none absolute inset-x-0 top-[42%] flex justify-center">
          <p className="max-w-[19rem] rounded-[50%] border border-ink/40 bg-cream/70 px-10 py-8 text-center text-[0.8rem] leading-relaxed text-ink/80 backdrop-blur-[1px]">
            Hi! I&rsquo;m Chung-Yun Yoo, Art director and Illustrator from Germany. But you can call me Chungi.
          </p>
        </div>

        <RotatingBadge className="absolute right-2 top-[26%] md:right-10" />
      </div>
    </section>
  );
}

function Intro() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section ref={reveal.ref} className={`${reveal.className} relative overflow-hidden px-5 py-28 md:py-40`}>
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute inset-x-0 top-4 text-center text-[30vw] leading-none text-blush/70"
      >
        Art
      </span>
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="display text-3xl md:text-6xl">
          Director <span className="italic">&amp;</span> Illustrator
        </p>
        <ArrowDown className="mx-auto mt-10 h-24 w-14 text-rouge" />
        <a
          href="#works"
          className="mt-10 inline-block rounded-full border border-ink/40 px-8 py-3 eyebrow transition-colors hover:bg-ink hover:text-cream"
        >
          Let&rsquo;s make your own story
        </a>
      </div>
    </section>
  );
}


function About() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section
      id="about"
      ref={reveal.ref}
      className={`${reveal.className} bg-sand px-5 py-28 md:px-16 md:py-40`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row md:gap-24">
        <img
          src={portrait}
          alt="Illustrated portrait of Chungi Yoo on her balcony"
          loading="lazy"
          width={1000}
          height={1000}
          className="w-60 shrink-0 rounded-[50%] object-cover md:w-80"
          style={{ aspectRatio: "3 / 4" }}
        />

        <div>
          <p className="eyebrow text-ink/50">About</p>
          <h2 className="mt-5 text-4xl md:text-6xl">
            On my free time you can find me trying to rescue my plants, soaking up sunlight on the balcony and
            reading <span className="italic">exciting thrillers</span>.
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-ink/70">
            I love creating bold creative works and enjoy illustrating colourful editorial visuals and drawings
            which are fun to look at, but at the same time spread awareness.
          </p>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section ref={reveal.ref} className={`${reveal.className} px-5 py-32 text-center md:px-16 md:py-48`}>
      <h2 className="mx-auto max-w-4xl text-4xl md:text-7xl">
        I always strive to develop unique design solutions and improve the{" "}
        <span className="italic">quality of life.</span>
      </h2>
    </section>
  );
}

function Contact() {
  const reveal = useReveal<HTMLElement>();
  return (
    <section
      id="contact"
      ref={reveal.ref}
      className={`${reveal.className} relative overflow-hidden bg-sun px-5 py-32 md:px-16 md:py-44`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <p className="eyebrow text-ink/60">Say a simple hello</p>
        <h2 className="max-w-5xl text-5xl leading-[0.95] md:text-[6.5rem]">
          Let&rsquo;s collaborate <span className="italic">&amp;</span> tell your story.
        </h2>
        <div className="flex items-center gap-4 md:gap-10">
          <ArrowSide className="h-8 w-20 text-ink/70 md:w-28" />
          <a
            href="mailto:hello@chungiyoo.com"
            className="flex h-36 w-36 items-center justify-center rounded-full bg-cream text-center eyebrow transition-transform duration-500 hover:scale-110 md:h-48 md:w-48"
          >
            Contact
            <br />
            me
          </a>
          <ArrowSide flip className="h-8 w-20 text-ink/70 md:w-28" />
        </div>
      </div>

    </section>
  );
}

function Footer() {
  return (
    <footer id="illustrations-end" className="bg-blush px-5 py-24 text-rouge md:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-5xl md:text-8xl">
          chungi <span className="italic">&amp; you</span>
        </h2>
        <div className="mt-10 flex justify-center gap-10 eyebrow">
          <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="hover:italic">
            Behance
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:italic">
            Instagram
          </a>
        </div>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 eyebrow text-rouge/70">
          <nav className="flex flex-wrap gap-6">
            <a href="#about">About</a>
            <a href="#works">Works</a>
            <a href="#illustrations">Illustrations</a>
            <a href="#contact">Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} Chungi Yoo</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="bg-cream text-ink">
      <SiteNav />
      <Hero />
      <Intro />
      <About />
      <Marquee text="Let's make your own story" className="bg-cream" />
      <Quote />
      <section id="works" className="px-5 pb-4 text-center md:px-16">
        <h2 className="text-6xl leading-[0.9] md:text-[8rem]">
          Some of my <span className="italic">selected works</span>
        </h2>
      </section>
      <div id="illustrations">
        {WORKS.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </div>
      <Contact />
      <Footer />
    </main>

  );
}
