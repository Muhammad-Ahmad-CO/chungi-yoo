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
    index: "1 / 5",
    title: "Illustrations",
    description: "Commercial and personal stories told through the art. Colour first, always.",
    image: workIllustrations,
    bg: "oklch(0.915 0.11 95)",
    tilt: -6,
  },
  {
    index: "2 / 5",
    title: "Bangs",
    description:
      "Who needs a haircut? Bangs is a (hypothetical) hairdresser salon which stands out with its bright colours and fun characters.",
    image: workBangs,
    bg: "oklch(0.955 0.014 85)",
    tilt: 5,
  },
  {
    index: "3 / 5",
    title: "Liberty in North Korea",
    description:
      "The disproportional attention of today's media is paid to the never ending debate between world leaders — this series looks the other way.",
    image: workKorea,
    bg: "oklch(0.91 0.02 80)",
    tilt: -4,
  },
  {
    index: "4 / 5",
    title: "Cube",
    description:
      "Walking to work, dancing in the club, riding your bike: we are constantly moving and producing energy. What if we could use it?",
    image: workCube,
    bg: "oklch(0.855 0.062 15)",
    tilt: 6,
  },
  {
    index: "5 / 5",
    title: "Chungi Yoo",
    description:
      "Branding for yourself is by far the most difficult thing to do. You tend to critique and procrastinate endlessly.",
    image: workBranding,
    bg: "oklch(0.955 0.014 85)",
    tilt: -5,
  },
];

function Hero() {
  const y = useScrollY();
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 md:px-16">
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[36rem] w-[36rem] rounded-full bg-sun/60 blur-[10px]"
        style={{ transform: `translateY(${y * -0.15}px)` }}
      />
      <div className="relative mx-auto w-full max-w-6xl pt-28 text-center">
        <p className="eyebrow text-ink/60">Welcome to the playground of</p>
        <h1 className="mt-6 text-[19vw] leading-[0.78] md:text-[13vw]">
          <span className="block italic">chungi</span>
          <span className="block">yoo</span>
        </h1>
        <p className="display mt-8 text-2xl italic md:text-4xl">Art Director &amp; Illustrator</p>
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-ink/70">
          Hi! I&rsquo;m Chung-Yun Yoo, art director and illustrator from Germany. But you can call me Chungi.
        </p>
        <a
          href="#about"
          className="mt-12 inline-block border-b border-ink pb-1 eyebrow transition-opacity hover:opacity-60"
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
          className="w-64 shrink-0 rounded-full object-cover md:w-96"
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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center">
        <p className="eyebrow text-ink/60">Say a simple hello</p>
        <h2 className="max-w-4xl text-5xl md:text-8xl">
          Let&rsquo;s collaborate &amp; <span className="italic">tell your story.</span>
        </h2>
        <a
          href="mailto:hello@chungiyoo.com"
          className="flex h-40 w-40 items-center justify-center rounded-full bg-cream text-center eyebrow transition-transform duration-500 hover:scale-110 md:h-48 md:w-48"
        >
          Contact
          <br />
          me
        </a>
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
      <About />
      <Marquee text="Let's make your own story" className="bg-cream" />
      <Quote />
      <section id="works" className="px-5 pb-8 text-center md:px-16">
        <h2 className="text-5xl md:text-8xl">
          Some of my <span className="italic">selected works</span>
        </h2>
      </section>
      <div id="illustrations">
        {WORKS.map((work, i) => (
          <WorkCard key={work.title} work={work} flip={i % 2 === 1} />
        ))}
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
