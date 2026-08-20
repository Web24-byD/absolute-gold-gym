import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobileViewport, useReducedMotion } from "@/hooks/use-reduced-motion";

const ways = [
  { n: "01", title: "Strength", copy: "Build strength and muscle through resistance training." },
  { n: "02", title: "Cardio", copy: "Improve endurance and cardiovascular fitness." },
  { n: "03", title: "Conditioning", copy: "Push your work capacity and fitness level." },
  {
    n: "04",
    title: "General Fitness",
    copy: "Build a consistent, sustainable training routine.",
  },
];

function Card({ n, title, copy }: (typeof ways)[number]) {
  return (
    <article className="card-lift flex h-72 w-[80vw] shrink-0 flex-col justify-between rounded-sm border border-border bg-graphite/60 p-8 sm:w-[22rem]">
      <span className="font-display text-2xl text-muted-foreground/60">{n}</span>
      <div>
        <h3 className="text-4xl uppercase text-gold-gradient">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
      </div>
    </article>
  );
}

export function Experience() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mobile = useIsMobileViewport(1023);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-30%"]);

  const heading = (
    <div className="max-w-xl">
      <p className="eyebrow mb-4">The experience</p>
      <h2 className="text-[clamp(2.2rem,6vw,4.8rem)] font-display uppercase">
        One gym.
        <br />
        <span className="text-gold-gradient">Multiple ways to train.</span>
      </h2>
    </div>
  );

  if (mobile || reduced) {
    return (
      <section id="experience" className="bg-charcoal py-24">
        <div className="section-shell">{heading}</div>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
          {ways.map((w) => (
            <div key={w.n} className="snap-start">
              <Card {...w} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="experience" ref={wrap} className="relative h-[130vh] bg-charcoal">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="section-shell">{heading}</div>
        <motion.div style={{ x }} className="mt-12 flex gap-6 pl-10 will-change-transform">
          {ways.map((w) => (
            <Card key={w.n} {...w} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
