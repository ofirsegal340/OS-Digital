"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import FitCheckCompact from "@/components/FitCheckCompact";

const notForYou = [
  "מי שמחפש קסם בן-לילה בלי תקציב מדיה אמיתי",
  "מי שרוצה “לזרוק את זה על מישהו” ולא להיות שותף להחלטות",
  "מי שלא מוכן לעבוד עם יעדים וחוזה מסודר",
];

const forYou = [
  "בעל עסק עם מוצר או שירות שעובד — שרוצה יותר פניות",
  "מי שמוכן להשקיע תקציב פרסום רציני ולמדוד כל שקל",
  "מי שמחפש שותף אחראי, לא ספק חשבוניות",
];

export default function QualificationSection() {
  return (
    <section id="fit" className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center md:mb-14"
        >
          <span className="font-display mb-2 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            04 / WHO IT&apos;S FOR
          </span>
          <h2 className="font-display mt-2 text-3xl font-medium tracking-tight md:text-5xl">
            בכנות? זה <span className="text-negative">לא מתאים לכולם</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="glass-card border-negative/20 p-6 md:p-8"
          >
            <h3 className="mb-5 text-lg font-bold text-negative md:text-xl">
              למי זה לא מתאים
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-negative" />
                  <span className="text-base leading-relaxed text-text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="glass-card-elevated border-primary-blue/25 p-6 md:p-8"
          >
            <h3 className="mb-5 text-lg font-bold text-primary-blue md:text-xl">
              ולמי זה כן
            </h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-blue" />
                  <span className="text-base leading-relaxed text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-10 mb-6 text-center text-base text-text-muted md:text-lg"
        >
          זיהית את עצמך בצד של ה-✓? בוא נבדוק התאמה
        </motion.p>
      </div>

      <div id="fit-check-2">
        <FitCheckCompact location="after_qualification" heading="זיהית את עצמך? בוא נבדוק התאמה" />
      </div>
    </section>
  );
}
