"use client";

import { motion } from "framer-motion";
import { Search, Target, Rocket, BarChart3, Repeat } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTilt } from "@/lib/use-tilt";

const steps: {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: 1,
    title: "היכרות ואסטרטגיה",
    description:
      "הכרת העסק, הגדרת מטרות (KPIs), קהל יעד ומחקר מתחרים.",
    icon: Search,
  },
  {
    number: 2,
    title: "תכנון ויצירת קמפיין",
    description:
      "פיתוח מסרים שיווקיים, תקציב, בחירת ערוצים (גוגל, פייסבוק, אינסטגרם).",
    icon: Target,
  },
  {
    number: 3,
    title: "הפקה והקמה",
    description:
      "הגדרת קמפיינים בפלטפורמות (Google Ads, Meta, LinkedIn), דף נחיתה ומעקב המרות.",
    icon: Rocket,
  },
  {
    number: 4,
    title: "ניהול ואופטימיזציה",
    description:
      "ניטור שוטף, שיפור ביצועים (A/B testing), עדכון הגדרות וניהול תקציב.",
    icon: BarChart3,
  },
  {
    number: 5,
    title: "דיווח ושיפור",
    description:
      "הפקת דוחות תקופתיים (שבועיים/חודשיים), ניתוח תוצאות (ROI) והמלצות להמשך.",
    icon: Repeat,
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const { ref, handlers } = useTilt<HTMLDivElement>();
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="group relative flex gap-5 md:flex-1 md:flex-col md:gap-0"
    >
      {/* Step number badge */}
      <div className="relative z-10 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-gradient-cta text-2xl font-display font-bold text-bg-dark shadow-lg shadow-primary-blue/20 ring-4 ring-bg-dark md:mx-auto md:mb-6">
        {step.number}
      </div>

      {/* Card */}
      <div
        ref={ref}
        {...handlers}
        className="glass-card-elevated relative flex-1 overflow-hidden p-5 md:p-6 will-change-transform md:text-center"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-blue/40 via-primary-purple/20 to-transparent transition-all duration-500 group-hover:h-[3px]" />
        <div className="mb-3 flex items-center gap-3 md:flex-col md:gap-2">
          <Icon className="h-5 w-5 text-primary-blue/80" strokeWidth={1.5} />
          <h3 className="text-base font-semibold leading-snug md:text-lg">
            {step.title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-text-muted">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-purple/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-display mb-2 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            02 / PROCESS
          </span>
          <div className="mb-4 mt-2 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
            תהליך העבודה
          </div>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            איך תראה העבודה שלנו ביחד
          </h2>
        </motion.div>

        {/* Steps — timeline layout */}
        <div className="relative">
          {/* Connecting line — desktop horizontal (dashed) */}
          <svg
            className="pointer-events-none absolute top-[38px] right-[5%] left-[5%] hidden h-[2px] w-[90%] md:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="process-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,212,255,0)" />
                <stop offset="20%" stopColor="rgba(0,212,255,0.45)" />
                <stop offset="80%" stopColor="rgba(180,79,255,0.35)" />
                <stop offset="100%" stopColor="rgba(180,79,255,0)" />
              </linearGradient>
            </defs>
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="url(#process-line)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          {/* Connecting line — mobile vertical */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 right-[30px] w-[2px] md:hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,212,255,0) 0%, rgba(0,212,255,0.35) 20%, rgba(180,79,255,0.25) 80%, rgba(180,79,255,0) 100%)",
            }}
          />

          <div className="flex flex-col gap-8 md:flex-row md:gap-5">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
