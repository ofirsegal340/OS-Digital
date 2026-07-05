"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ObjectionSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.05] blur-[110px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display mb-8 text-3xl font-medium tracking-tight md:text-4xl"
        >
          אתה בטח <span className="text-gradient">חושב לעצמך</span> עכשיו:
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="glass-card grid-lines relative mx-auto mb-8 max-w-xl p-8 md:p-10"
        >
          <Quote
            className="absolute top-4 right-4 h-8 w-8 text-primary-blue/25"
            aria-hidden="true"
          />
          <p className="text-lg italic leading-relaxed text-white/90 md:text-xl">
            ״עוד סוכנות שתשרוף לי תקציב ותיעלם עם תירוצים...״
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          ואתה צודק שאתה חושב ככה. בדיוק בגלל זה אצלי הכל הפוך: יעדים כתובים
          בחוזה לפני ששילמת שקל, דוח כל שבוע, ואם לא הגענו ליעדים — אני ממשיך
          לעבוד בלי דמי ניהול.{" "}
          <span className="font-semibold text-white">
            כשהסיכון עליי, אני לא יכול להרשות לעצמי לשרוף לך תקציב.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
