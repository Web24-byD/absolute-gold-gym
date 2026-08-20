import { Reveal } from "@/components/Reveal";

const blocks = [
  {
    title: "Clean Training Areas",
    copy: "Organized workout spaces designed for a comfortable training experience.",
  },
  {
    title: "Well-Maintained Equipment",
    copy: "Equipment areas presented in a clean and organized environment.",
  },
  {
    title: "Comfortable Environment",
    copy: "A space where members can focus on training without unnecessary distractions.",
  },
];

export function Hygiene() {
  return (
    <section aria-labelledby="hygiene-heading" className="bg-light py-24 text-light-foreground md:py-32">
      <div className="section-shell">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">Hygiene</p>
            <h2
              id="hygiene-heading"
              className="text-[clamp(2.2rem,5.5vw,4.4rem)] font-display uppercase text-light-foreground"
            >
              Clean space. Clear mind.
              <br />
              Better training.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 leading-relaxed text-light-foreground/70">
              A gym should feel comfortable from the moment you walk in. Absolute Fitness Gym places
              strong emphasis on maintaining a clean, organized and hygienic training environment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border-t border-light-foreground/15 md:grid-cols-3">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="h-full border-light-foreground/15 py-9 md:border-r md:pr-8 md:last:border-r-0">
                <span className="font-display text-xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-2xl uppercase text-light-foreground">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-light-foreground/70">{b.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
