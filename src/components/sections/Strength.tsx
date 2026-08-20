import { Reveal } from "@/components/Reveal";
import { StrengthScene } from "@/components/three/LazyScene";

const words = ["Strength", "Discipline", "Consistency", "Progress"];

export function Strength() {
  return (
    <section
      aria-labelledby="strength-heading"
      className="relative overflow-hidden border-y border-border bg-ink py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--gold)_10%,transparent),transparent)]"
      />
      <div className="section-shell relative">
        <div className="relative mx-auto flex max-w-4xl flex-col items-center">
          <div className="relative h-[46vh] w-full min-h-72 md:h-[60vh]">
            <StrengthScene />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Reveal>
                <h2
                  id="strength-heading"
                  className="text-center text-[clamp(2.2rem,7vw,5.5rem)] font-display uppercase"
                >
                  Your strength.
                  <br />
                  <span className="text-gold-gradient">Your standard.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {words.map((w, i) => (
              <Reveal key={w} delay={i * 0.08}>
                <li className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  {w}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
