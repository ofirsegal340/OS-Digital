"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MAX_TILT = 6;
const PERSPECTIVE = 900;
const RESET_TRANSITION = "transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1)";
const ACTIVE_TRANSITION = "transform 120ms cubic-bezier(0.2, 0.7, 0.2, 1)";

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mqHover.matches && !mqMotion.matches);
    update();
    mqHover.addEventListener("change", update);
    mqMotion.addEventListener("change", update);
    return () => {
      mqHover.removeEventListener("change", update);
      mqMotion.removeEventListener("change", update);
    };
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (!enabled || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * MAX_TILT * 2;
      const rotateX = -y * MAX_TILT * 2;
      el.style.transition = ACTIVE_TRANSITION;
      el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`;
    },
    [enabled]
  );

  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.style.transition = RESET_TRANSITION;
    el.style.transform = `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
  }, []);

  return {
    ref,
    enabled,
    handlers: enabled
      ? { onMouseMove: handleMove, onMouseLeave: handleLeave }
      : {},
  };
}
