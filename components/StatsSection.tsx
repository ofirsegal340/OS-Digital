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
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card relative overflow-hidden p-5 sm:p-8 text-center"
    >
      {/* Subtle top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent" />

      <p className="mb-3 text-3xl font-bold text-gradient md:text-5xl">
        {displayed || value}
      </p>
      <p className="text-sm leading-relaxed text-text-muted">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[200px] w-[250px] md:h-[300px] md:w-[400px] rounded-full bg-primary-blue/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
            למה אנחנו
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
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
