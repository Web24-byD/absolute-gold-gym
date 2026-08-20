import { MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-80 grid grid-cols-2 gap-px border-t border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-[color-mix(in_oklab,var(--ink)_92%,transparent)] backdrop-blur-xl md:hidden">
      <a
        href={SITE.phoneHref}
        className="flex min-h-14 items-center justify-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink"
        style={{ background: "var(--gold)" }}
      >
        <Phone className="size-4" aria-hidden="true" />
        Call Now
      </a>
      <a
        href={SITE.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-bright"
      >
        <MapPin className="size-4" aria-hidden="true" />
        Directions
      </a>
    </div>
  );
}
