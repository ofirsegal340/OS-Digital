"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  Rocket,
  BarChart3,
  Repeat,
  ArrowDown,
  ArrowLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const steps: {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: 1,
    title: "היכרות ואסטרטגיה",
    description: "מכירים את העסק, מגדירים יעדים וקהל, חוקרים מתחרים",
    icon: Search,
  },
  {
    number: 2,
    title: "תכנון ויצירת קמפיין",
    description: "מסרים, תקציב ובחירת הערוצים הנכונים לעסק שלך",
    icon: Target,
  },
  {
    number: 3,
    title: "הפקה והקמה",
    description: "קמפיין באוויר תוך 72 שעות — כולל דף נחיתה ומעקב המרות",
    icon: Rocket,
  },
  {
    number: 4,
    title: "ניהול ואופטימיזציה",
    description: "ניטור שוטף, A/B testing וניהול תקציב חכם",
    icon: BarChart3,
  },
  {
    number: 5,
    title: "דיווח ושיפור",
    description: "דוח ברור כל שבוע, ניתוח ROI והמלצות להמשך",
    icon: Repeat,
  },
];

export default function ProcessSection() {
  const scrollToForm = () => {
    trackEvent("CTAClick", {
      button_name: "process_cta",
      button_text: "מוכן להתחיל? לבדיקת התאמה",
      location: "process_section",
    });
    const el = document.getElementById("contact");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="process" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-purple/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-2xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="font-display mb-4 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            03 / PROCESS
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            ככה זה עובד — צעד אחר צעד
          </h2>
        </motion.div>

        {/* Numbered pill rows with connecting arrows */}
        <div className="flex flex-col items-center">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex w-full flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="glass-card flex w-full items-center gap-4 rounded-2xl px-5 py-4 sm:rounded-full sm:px-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-cta text-lg font-display font-bold text-bg-dark shadow-lg shadow-primary-blue/20">
                    {step.number}
                  </div>
                  <Icon
                    className="hidden h-5 w-5 shrink-0 text-primary-blue/80 sm:block"
                    strokeWidth={1.5}
                  />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                    className="py-1.5"
                  >
                    <ArrowDown className="h-5 w-5 text-primary-blue/60" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process-end CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={scrollToForm}
            className="btn-shine group flex items-center gap-2.5 rounded-full bg-gradient-cta px-8 py-4 text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-blue/25"
          >
            מוכן להתחיל? לבדיקת התאמה
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
