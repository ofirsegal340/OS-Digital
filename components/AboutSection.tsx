"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/lib/use-tilt";

/*
  PHOTO: drop your headshot at  public/ofir.webp  (portrait, ~800×1000).
  Then replace the placeholder <div> below with:

    <Image src="/ofir.webp" alt="אופיר סגל — מייסד OS Digital"
      fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />

  and add  import Image from "next/image";  at the top.
*/

export default function AboutSection() {
  const { ref, handlers } = useTilt<HTMLDivElement>();

  return (
    <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-[260px] w-[360px] md:h-[420px] md:w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-purple/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[40%_1fr] md:gap-14">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm md:mx-0"
          >
            {/* Geometric accent blob behind the photo */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="blob-accent absolute -bottom-8 -right-8 -z-10 h-[70%] w-[80%]"
            />
            <div
              ref={ref}
              {...handlers}
              className="glass-card-elevated relative aspect-[4/5] overflow-hidden border-primary-blue/15 shadow-xl shadow-primary-blue/[0.06] will-change-transform"
            >
              <div className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-primary-blue/50 to-transparent" />
              {/* Placeholder — replace with your photo (see comment above) */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary-blue/[0.08] to-primary-purple/[0.06]">
                <span className="font-display text-6xl font-bold text-gradient">OS</span>
                <span className="text-xs tracking-[0.3em] text-text-muted uppercase">
                  הוסיפו תמונה
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="font-display mb-4 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
              05 / ABOUT
            </span>
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
              אם עדיין לא הכרנו —{" "}
              <span className="text-gradient">נעים מאוד, אני אופיר סגל.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted lg:text-lg">
              <p>
                אני אופיר סגל, מייסד <span className="text-white">OS Digital</span>. כבר שנים
                אני חי ונושם קידום ממומן — בונה ומנהל קמפיינים שמביאים לעסקים קטנים ובינוניים
                לקוחות אמיתיים, לא רק &quot;לייקים&quot;.
              </p>
              <p>
                המטרה שלי פשוטה: שכל שקל שתשקיע בפרסום יחזור אליך עם ריבית. אני לא עובד עם מאות
                לקוחות במקביל — אני בוחר לעבוד עם מעט עסקים, ולתת לכל אחד יחס אישי, מקצועי
                ומבוסס נתונים.
              </p>
              <p>
                אני לא אבטיח לך שתכפיל את העסק תוך חודש — מי שמבטיח את זה משקר.{" "}
                <span className="text-white">
                  מה שאני כן מבטיח: יעדים כתובים, עבודה שקופה, ואחריות אישית שלי
                  להגיע אליהם.
                </span>
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
