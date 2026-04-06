"use client";

import { motion } from "framer-motion";

const META_BLUE = "#1877F2";

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
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{ backgroundColor: `${META_BLUE}08` }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className="mb-4 inline-block text-sm font-medium tracking-widest uppercase"
            style={{ color: META_BLUE }}
          >
            תהליך העבודה
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            איך תראה העבודה שלנו ביחד
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex md:flex-1 md:items-center">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="group relative flex-1 overflow-hidden rounded-2xl border p-6 transition-all duration-500"
                style={{
                  backgroundColor: "#0F1329",
                  borderColor: `${META_BLUE}22`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${META_BLUE}66`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${META_BLUE}18`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${META_BLUE}22`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Top gradient accent */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${META_BLUE}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                {/* Step number badge */}
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${META_BLUE}, #0668E1)` }}
                >
                  {step.number}
                </div>

                <h3 className="mb-3 text-base font-bold leading-snug md:text-lg">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow connector — shown between cards on desktop */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                  className="hidden md:flex items-center justify-center px-2"
                  aria-hidden
                >
                  {/* RTL: arrow points left */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke={META_BLUE}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.7"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
