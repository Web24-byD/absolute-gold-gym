import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1250);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <motion.span
            className="font-display text-[clamp(2.5rem,9vw,5.5rem)] uppercase tracking-[0.2em] text-gold-gradient"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Absolute
          </motion.span>
          <motion.span
            className="my-3 block h-px w-0 bg-gold"
            animate={{ width: "min(60vw, 22rem)" }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="text-[0.7rem] font-semibold uppercase tracking-[0.5em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.75 }}
          >
            Fitness Gym
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
