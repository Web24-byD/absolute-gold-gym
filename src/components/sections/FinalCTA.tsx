import { MapPin, Phone } from "lucide-react";
import ctaImg from "@/assets/gym-machines.jpg";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden py-28 md:py-36">
      <img
        src={ctaImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-ink via-ink/70 to-ink" />
      <div className="section-shell relative text-center">
        <Reveal>
          <h2 id="cta-heading" className="text-[clamp(2.4rem,7vw,6rem)] font-display uppercase">
            Ready to become <span className="text-gold-gradient">absolute?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Your next workout starts here.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            
            
            <a href="#contact" className="btn-base btn-outline-gold">
              Join Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
