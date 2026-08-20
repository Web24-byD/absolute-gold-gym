import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    let rx = 0;
    let ry = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${tx - 3}px, ${ty - 3}px, 0)`;
      }
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor]",
      );
      setActive(Boolean(el));
      setLabel(el?.dataset["cursor"] ?? "");
    };

    const loop = () => {
      rx += (tx - rx) * 0.45;
      ry += (ty - ry) * 0.45;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-90 hidden md:block">
      <div ref={dot} className="absolute left-0 top-0 size-1.5 rounded-full bg-gold-bright" />
      <div
        ref={ring}
        className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border transition-[opacity,box-shadow] duration-300"
        style={{
          borderColor: active
            ? "color-mix(in oklab, var(--gold-bright) 90%, transparent)"
            : "color-mix(in oklab, var(--gold) 45%, transparent)",
          boxShadow: active
            ? "0 0 24px -4px color-mix(in oklab, var(--gold) 60%, transparent)"
            : "none",
          scale: active ? "1.35" : "1",
        }}
      >
        {label && (
          <span className="font-display text-[0.55rem] uppercase tracking-[0.2em] text-gold-bright">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
