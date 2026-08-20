import { MapPin, Navigation } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export function Location() {
  return (
    <section id="location" className="border-t border-border bg-charcoal py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <SectionHeading eyebrow="Location">
              Find <span className="text-gold-gradient">Absolute Fitness</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <address className="mt-8 not-italic leading-relaxed text-muted-foreground">
              {SITE.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-gold"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </a>
             
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              New Ranip, Ahmedabad
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Map showing Absolute Fitness Gym in New Ranip, Ahmedabad"
              src={SITE.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full grayscale-[0.35] md:h-96"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
