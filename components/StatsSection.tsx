"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTilt } from "@/lib/use-tilt";

const stats = [
  { value: "100%", label: "שקיפות מלאה — רואים בדיוק לאן הולך כל שקל" },
  { value: "6+", label: "פלטפורמות פרסום בניהול אחד מרוכז" },
  { value: "72h", label: "זמן מהחתימה להשקת הקמפיין הראשון" },
  { value: "אפס", label: "עמלות נסתרות — מה שמוסכם זה מה שמשלמים" },
];

function CountUpStat({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("");
  const { ref: tiltRef, handlers } = useTilt<HTMLDivElement>();

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) {
      setDisplayed(value);
      return;
    }

    const target = parseInt(numericMatch[1]);
    const suffix = value.slice(numericMatch[1].length);
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += Math.ceil(target / steps);
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setDisplayed(`${current}${suffix}`);
    }, stepTime);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={tiltRef}
        {...handlers}
        className="glass-card-elevated group relative overflow-hidden p-6 sm:p-8 text-center will-change-transform"
      >
        {/* Top border gradient */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent transition-all duration-500 group-hover:h-[3px] group-hover:via-primary-blue/60" />

        <p className="font-display mb-4 text-5xl font-bold text-gradient md:text-6xl lg:text-7xl tracking-tight">
          {displayed || value}
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-text-muted">{label}</p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Single anchoring blob (aurora handles the rest globally) */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[280px] w-[380px] md:h-[420px] md:w-[600px] rounded-full bg-primary-blue/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-display mb-2 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            03 / WHY US
          </span>
          <div className="mb-4 mt-2 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
            למה אנחנו
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            למה OS Digital
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <CountUpStat key={stat.value} index={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
