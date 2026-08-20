import { Suspense, lazy } from "react";
import { useHydrated, useIsMobileViewport, useReducedMotion } from "@/hooks/use-reduced-motion";

const ParticleScene = lazy(() => import("./ParticleScene"));
const DumbbellScene = lazy(() => import("./DumbbellScene"));

/** Gold particle field + rotating plate for the hero. Skipped when motion is reduced. */
export function HeroScene() {
  const hydrated = useHydrated();
  const reduced = useReducedMotion();
  const mobile = useIsMobileViewport();
  if (!hydrated || reduced) return null;
  return (
    <Suspense fallback={null}>
      <ParticleScene count={mobile ? 260 : 900} />
    </Suspense>
  );
}

/** Interactive metallic dumbbell. Falls back to nothing under reduced motion. */
export function StrengthScene() {
  const hydrated = useHydrated();
  const reduced = useReducedMotion();
  const mobile = useIsMobileViewport();
  if (!hydrated || reduced) return null;
  return (
    <Suspense fallback={null}>
      <DumbbellScene simple={mobile} />
    </Suspense>
  );
}
