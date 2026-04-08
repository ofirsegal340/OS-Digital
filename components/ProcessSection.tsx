"use client";

import { motion } from "framer-motion";

const BRAND_BLUE = "#00D4FF";

const steps = [
  {
    number: 1,
    title: "היכרות ואסטרטגיה",
    description:
      "הכרת העסק, הגדרת מטרות (KPIs), קהל יעד ומחקר מתחרים.",
  },
  {
    number: 2,
    title: "תכנון ויצירת קמפיין",
    description:
      "פיתוח מסרים שיווקיים, תקציב, בחירת ערוצים (גוגל, פייסבוק, אינסטגרם).",
  },
  {
    number: 3,
    title: "הפקה והקמה",
    description:
      "הגדרת קמפיינים בפלטפורמות (Google Ads, Meta, LinkedIn), דף נחיתה ומעקב המרות.",
  },
  {
    number: 4,
    title: "ניהול ואופטימיזציה",
    description:
      "ניטור שוטף, שיפור ביצועים (A/B testing), עדכון הגדרות וניהול תקציב.",
  },
  {
    number: 5,
    title: "דיווח ושיפור",
    description:
      "הפקת דוחות תקופתיים (שבועיים/חודשיים), ניתוח תוצאות (ROI) והמלצות להמשך.",
  },
];

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
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
            תהליך העבודה
          </span>
          <h2 className="text-3xl font-bold text-gradient md:text-4xl">
            איך תראה העבודה שלנו ביחד
          </h2>
        </motion.div>

        {/* Steps — timeline layout */}
        <div className="relative">
          {/* Connecting line — desktop horizontal */}
          <div className="pointer-events-none absolute top-[34px] right-[5%] left-[5%] hidden h-[2px] md:block" style={{ background: `linear-gradient(90deg, transparent, ${BRAND_BLUE}40, ${BRAND_BLUE}20, transparent)` }} />

          {/* Connecting line — mobile vertical */}
          <div className="pointer-events-none absolute top-0 bottom-0 right-[26px] w-[2px] md:hidden" style={{ background: `linear-gradient(180deg, transparent, ${BRAND_BLUE}30, ${BRAND_BLUE}30, transparent)` }} />

          <div className="flex flex-col gap-8 md:flex-row md:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="group relative flex gap-5 md:flex-1 md:flex-col md:gap-0"
              >
                {/* Step number badge */}
                <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-gradient-cta text-lg font-bold text-bg-dark shadow-lg shadow-primary-blue/20 ring-4 ring-bg-dark md:mx-auto md:mb-6">
                  {step.number}
                </div>

                {/* Card */}
                <div className="glass-card relative flex-1 overflow-hidden p-5 md:p-6 transition-all duration-500 hover:border-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/[0.05] md:text-center">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-blue/40 via-primary-purple/20 to-transparent" />
                  <h3 className="mb-2 text-base font-bold leading-snug md:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
