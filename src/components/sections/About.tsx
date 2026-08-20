import { Check } from "lucide-react";
import aboutImg from "@/assets/gym-floor.jpg";
import { Reveal, SectionHeading } from "@/components/Reveal";

const points = [
  "Quality training environment",
  "Modern equipment",
  "Clean surroundings",
  "Comfortable workout space",
  "Professional atmosphere",
  "Strength and conditioning",
  "Cardio training",
  "A consistent fitness experience",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-border">
            <img
              src={aboutImg}
              alt="Training floor at Absolute Fitness Gym with benches, racks and weight plates"
              loading="lazy"
              width={1920}
              height={1088}
              className="aspect-4/5 w-full object-cover transition-transform duration-700 hover:scale-[1.03] lg:aspect-3/4"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 to-transparent"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading eyebrow="About Absolute">
              More than a gym.
              <br />
              <span className="text-gold-gradient">It&apos;s your training space.</span>
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
              Absolute Fitness Gym is designed for people who take their fitness seriously — a
              focused, well-kept space across two floors in New Ranip where strength, cardio and
              conditioning all have room to happen.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { v: "5.0★", l: "Google Rating" },
                { v: "46+", l: "Google Reviews" },
                { v: "2 Floors", l: "Gym Facility" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-[clamp(1.6rem,4vw,2.6rem)] uppercase leading-none text-gold-gradient">
                    {s.v}
                  </p>
                  <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
