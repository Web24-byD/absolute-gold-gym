import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import cardioImg from "@/assets/gym-cardio.jpg";
import dumbbellImg from "@/assets/gym-dumbbells.jpg";
import floorImg from "@/assets/gym-floor.jpg";
import machineImg from "@/assets/gym-machines.jpg";
import { Reveal, SectionHeading } from "@/components/Reveal";

const cards = [
  {
    category: "Free Weights",
    title: "Dumbbell Area",
    img: dumbbellImg,
    alt: "Racks of dumbbells in the free-weight area at Absolute Fitness Gym",
    copy: "Racked free weights for pressing, pulling and accessory work.",
  },
  {
    category: "Strength Machines",
    title: "Machine Zone",
    img: machineImg,
    alt: "Strength training machines including cable station and leg press",
    copy: "Guided resistance machines for controlled, progressive training.",
  },
  {
    category: "Cardio",
    title: "Cardio Deck",
    img: cardioImg,
    alt: "Row of treadmills in the cardio zone at Absolute Fitness Gym",
    copy: "Treadmills and cardio equipment for endurance and conditioning.",
  },
  {
    category: "Functional Training",
    title: "Open Floor",
    img: floorImg,
    alt: "Open functional training floor with turf lane and benches",
    copy: "Open floor space for functional and full-body movement work.",
  },
];

export function Equipment() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="equipment" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="Equipment">
              Built for
              <br />
              <span className="text-gold-gradient">every workout.</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Scroll equipment left"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-gold transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Scroll equipment right"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-gold transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-10"
      >
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="card-lift group relative w-[80vw] shrink-0 snap-start overflow-hidden rounded-sm border border-border bg-charcoal sm:w-[46vw] lg:w-[26rem]"
            style={{ perspective: "1000px" }}
          >
            <div className="overflow-hidden">
              <img
                src={c.img}
                alt={c.alt}
                loading={i > 1 ? "lazy" : undefined}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="eyebrow translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {c.category}
              </p>
              <h3 className="mt-2 text-3xl uppercase text-foreground">{c.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{c.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
