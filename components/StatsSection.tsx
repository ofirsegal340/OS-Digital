"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  accent,
}: {
  value: string;
  label: string;
  index: number;
  accent: boolean;
}) {
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("");

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center md:px-6"
    >
      <p
        className={`font-display text-5xl font-extrabold leading-none tracking-tighter md:text-7xl ${
          accent ? "text-gradient" : "text-white"
        }`}
      >
        {displayed || value}
      </p>
      <p className="mx-auto mt-4 max-w-[22ch] text-sm leading-relaxed text-text-muted">
        {label}
      </p>
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
          className="mb-12 md:mb-16 text-center"
        >
          <span className="font-display mb-4 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            04 / WHY US
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            למה OS Digital
          </h2>
        </motion.div>

        {/* Editorial stat band: solid extrabold numerals, hairline dividers, one gradient focal point */}
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-x-reverse md:divide-white/[0.08]">
          {stats.map((stat, i) => (
            <CountUpStat key={stat.value} index={i} accent={i === 0} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
