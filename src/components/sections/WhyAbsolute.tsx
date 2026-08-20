import { Activity, Dumbbell, Focus, Gem, HeartPulse, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

const features = [
  {
    n: "01",
    title: "Clean & Hygienic",
    icon: Sparkles,
    copy: "A clean training environment helps you focus on what matters — your workout.",
  },
  {
    n: "02",
    title: "Quality Equipment",
    icon: Dumbbell,
    copy: "Train with a wide range of strength and cardio equipment designed for varied training needs.",
  },
  {
    n: "03",
    title: "Serious Training Environment",
    icon: Focus,
    copy: "A focused atmosphere for people who come to train, improve and stay consistent.",
  },
  {
    n: "04",
    title: "Cardio Zone",
    icon: HeartPulse,
    copy: "Dedicated cardio equipment for conditioning, endurance and daily movement.",
  },
  {
    n: "05",
    title: "Strength Training",
    icon: Activity,
    copy: "Build strength with dedicated resistance-training equipment and free weights.",
  },
  {
    n: "06",
    title: "Premium Experience",
    icon: Gem,
    copy: "From the environment to the equipment, every detail is designed to make your training experience better.",
  },
];

export function WhyAbsolute() {
  return (
    <section id="facilities" className="relative bg-charcoal py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Why train here" align="center">
            Why <span className="text-gold-gradient">Absolute?</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.06}>
              <article className="card-lift group h-full rounded-sm border border-border bg-graphite/60 p-7">
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-12 items-center justify-center rounded-sm border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] bg-ink/60 transition-colors group-hover:border-gold"
                  >
                    <f.icon className="size-5 text-gold" />
                  </span>
                  <span className="font-display text-2xl text-muted-foreground/60">{f.n}</span>
                </div>
                <h3 className="mt-7 text-2xl uppercase text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
