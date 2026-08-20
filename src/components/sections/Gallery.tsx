import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import cardioImg from "@/assets/gym-cardio.jpg";
import dumbbellImg from "@/assets/gym-dumbbells.jpg";
import entranceImg from "@/assets/gym-entrance.jpg";
import floorImg from "@/assets/gym-floor.jpg";
import machineImg from "@/assets/gym-machines.jpg";
import { Reveal, SectionHeading } from "@/components/Reveal";

const shots = [
  { img: entranceImg, alt: "Entrance and branding wall at Absolute Fitness Gym", label: "Entrance", span: "md:col-span-2 md:row-span-1" },
  { img: dumbbellImg, alt: "Dumbbell and free-weight area", label: "Free Weights", span: "md:row-span-2" },
  { img: cardioImg, alt: "Cardio zone with treadmills", label: "Cardio Zone", span: "" },
  { img: machineImg, alt: "Strength machine area", label: "Machines", span: "md:row-span-2" },
  { img: floorImg, alt: "Open training floor", label: "Training Floor", span: "md:col-span-2" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % shots.length)),
    [],
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  const current = open === null ? null : shots[open]!;

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Inside the gym" align="center">
            See the <span className="text-gold-gradient">difference</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className={s.span}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                data-cursor="View"
                className="group relative size-full overflow-hidden rounded-sm border border-border text-left card-lift"
                aria-label={`Open ${s.label} photo`}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/85 via-transparent to-transparent"
                />
                <span className="absolute bottom-5 left-5 font-display text-xl uppercase tracking-wide text-foreground">
                  {s.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${current.label} photo`}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink/97 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              key={current.label}
              src={current.img}
              alt={current.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-sm object-contain"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              {current.label}
            </p>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close photo"
              className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border text-gold hover:bg-gold hover:text-ink"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-border text-gold hover:bg-gold hover:text-ink"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 inline-flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-border text-gold hover:bg-gold hover:text-ink"
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
