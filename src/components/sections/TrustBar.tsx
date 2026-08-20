import { Building2, MapPin, Sparkles, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

const items = [
  { icon: Star, label: "Google Rating", value: "5.0 ★" },
  { icon: Sparkles, label: "Google Reviews", value: `${SITE.reviewCount}+` },
  { icon: Building2, label: "Gym Facility", value: "2 Floors" },
  { icon: MapPin, label: "Location", value: "New Ranip" },
];

export function TrustBar() {
  return (
    <section aria-label="At a glance" className="border-y border-border bg-charcoal">
      <div className="section-shell grid grid-cols-2 gap-px py-2 md:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <div className="flex items-center gap-4 px-2 py-7">
              <item.icon className="size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-display text-2xl uppercase leading-none text-foreground">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
