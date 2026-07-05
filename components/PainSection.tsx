"use client";

import { motion } from "framer-motion";

const lines: { text: string; strong?: boolean }[] = [
  { text: "אתה בטח מכיר את זה..." },
  { text: "שילמת לפרילנסר. אחר כך לסוכנות." },
  { text: "“עוד חודש, התוצאות בדרך.”" },
  { text: "התקציב נשרף — והדוח? אקסל שאף אחד לא מבין." },
  { text: "וכשביקשת הסברים, פתאום כולם עסוקים." },
];

export default function PainSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
      {/* Soft background blob */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-purple/[0.06] blur-[120px]" />
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-2xl text-center">
        {lines.map((line, i) => (
          <motion.p
            key={line.text}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="mb-3 text-lg leading-relaxed text-text-muted md:text-xl"
          >
            {line.text}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: lines.length * 0.08, ease: "easeOut" }}
          className="mt-6 text-xl font-bold leading-relaxed md:text-2xl"
        >
          זו לא בעיה של פרסום.{" "}
          <span className="text-gradient">זו בעיה של אחריות.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: (lines.length + 1) * 0.08,
            ease: "easeOut",
          }}
          className="mt-4 text-lg leading-relaxed text-white/85 md:text-xl"
        >
          ובדיוק בשביל זה בניתי את OS Digital אחרת.
        </motion.p>
      </div>
    </section>
  );
}
