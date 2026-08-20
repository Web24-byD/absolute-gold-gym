import { NAV_LINKS, SITE } from "@/lib/site";

const footerLinks = NAV_LINKS.filter((l) => l.label !== "Experience");

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink pb-28 pt-16 md:pb-12">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl uppercase tracking-[0.14em] text-gold-gradient">
            Absolute
          </p>
          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground">
            Fitness Gym
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-muted-foreground md:text-right">
          <p>{SITE.area}</p>
          <a href={SITE.phoneHref} className="link-underline mt-1 inline-block text-foreground">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="hairline my-10" />

      <div className="section-shell text-center text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        © 2026 {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
