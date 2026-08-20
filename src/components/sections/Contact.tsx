import { MapPin, Phone, Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading eyebrow="Contact" align="center">
            Talk to <span className="text-gold-gradient">Absolute</span>
          </SectionHeading>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass-panel h-full rounded-sm p-9">
              <p className="font-display text-3xl uppercase text-foreground">{SITE.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{SITE.area}</p>
              <address className="mt-6 not-italic text-sm leading-relaxed text-muted-foreground">
                {SITE.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <a
                href={SITE.phoneHref}
                className="link-underline mt-6 inline-block font-display text-2xl uppercase text-gold-bright"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-3">
              <a href={SITE.phoneHref} className="btn-base btn-gold w-full">
                <Phone className="size-4" aria-hidden="true" />
                Call
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline-gold w-full"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Google Maps
              </a>
              <a
                href={SITE.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-outline-gold w-full"
              >
                <Star className="size-4" aria-hidden="true" />
                Google Reviews
              </a>
              <p className="mt-auto pt-6 text-xs leading-relaxed text-muted-foreground">
                Walk in during gym hours or call ahead to ask about membership. Enquiries are handled
                over the phone.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
