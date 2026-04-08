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
      className="glass-card group relative overflow-hidden p-6 sm:p-8 text-center transition-all duration-500 hover:border-primary-blue/15 hover:shadow-lg hover:shadow-primary-blue/[0.06]"
    >
      {/* Top border gradient */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent" />

      <p className="mb-4 text-4xl font-extrabold text-gradient md:text-5xl lg:text-6xl tracking-tight">
        {displayed || value}
      </p>
      <p className="text-sm sm:text-base leading-relaxed text-text-muted">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Large gradient background band */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/[0.03] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[400px] md:h-[500px] md:w-[700px] rounded-full bg-primary-blue/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-[200px] w-[300px] md:h-[400px] md:w-[500px] rounded-full bg-primary-purple/[0.05] blur-[120px]" />

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
          <h2 className="text-3xl font-bold text-gradient md:text-4xl">
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
