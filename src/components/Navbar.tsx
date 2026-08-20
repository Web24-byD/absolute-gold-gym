import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-80 transition-all duration-500 ${
        scrolled
          ? "border-b border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-[color-mix(in_oklab,var(--ink)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="section-shell flex h-18 items-center justify-between gap-4">
        <a href="#home" className="group flex flex-col leading-none" aria-label="Absolute Fitness Gym — home">
          <span className="font-display text-xl uppercase tracking-[0.14em] text-gold-gradient sm:text-2xl">
            Absolute
          </span>
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.42em] text-muted-foreground">
            Fitness Gym
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-base btn-gold hidden sm:inline-flex">
            Join Now
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] text-gold lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-90 bg-ink/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-18 items-center justify-between px-5">
              <span className="font-display text-xl uppercase tracking-[0.14em] text-gold-gradient">
                Absolute
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] text-gold"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 pt-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="border-b border-border/60 py-4 font-display text-3xl uppercase text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={SITE.phoneHref}
                onClick={() => setOpen(false)}
                className="btn-base btn-gold mt-8"
              >
                Call {SITE.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
