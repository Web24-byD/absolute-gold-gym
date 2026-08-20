import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/gym-entrance.jpg";
import { HeroScene } from "@/components/three/LazyScene";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Entrance of Absolute Fitness Gym in New Ranip, Ahmedabad"
        width={1600}
        height={1104}
        className="absolute inset-0 size-full object-cover opacity-55"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_10%,transparent,var(--ink)_78%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 opacity-70">
        <HeroScene />
      </div>

      <div className="section-shell relative pb-20 pt-32 md:pb-28">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          New Ranip · Ahmedabad
        </motion.p>

        <motion.h1
          className="mt-5 max-w-4xl text-[clamp(3rem,11vw,8.5rem)] font-display uppercase"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Train hard.
          <br />
          Live strong.
          <br />
          <span className="text-gold-gradient">Become absolute.</span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          A premium fitness experience built around quality equipment, cleanliness, comfort and a
          serious training environment.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.85 }}
        >
          <a href="#contact" className="btn-base btn-gold group" data-cursor="Join">
            Join Absolute
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#facilities" className="btn-base btn-outline-gold group" data-cursor="Explore">
            Explore the gym
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
