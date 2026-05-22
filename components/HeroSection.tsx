"use client";

import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "972584594488";

  const scrollToForm = () => {
    trackEvent("CTAClick", {
      button_name: "hero_cta",
      button_text: "השאירו פרטים לשיחת ייעוץ חינם",
      location: "hero_section",
    });
    const el = document.getElementById("contact");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 sm:px-6 pt-20">
      {/* Background glow effects — anchor blob + single slow ring */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[360px] w-[360px] md:h-[620px] md:w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.10] blur-[150px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="hero-ring absolute top-1/2 left-1/2 h-[560px] w-[560px] md:h-[820px] md:w-[820px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Dot grid texture overlay */}
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 md:mb-8 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/[0.08] px-5 py-2.5 text-[11px] md:text-xs font-medium tracking-widest text-primary-blue uppercase shadow-lg shadow-primary-blue/[0.08]"
        >
          סוכנות קידום ממומן לעסקים קטנים ובינוניים
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="font-display mb-5 md:mb-7 text-4xl font-medium leading-[1.15] tracking-tight md:text-6xl lg:text-7xl"
        >
          קידום ממומן שמפסיק לבזבז
          <br />
          ומתחיל להביא{" "}
          <span className="text-gradient">תוצאות.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mx-auto mb-8 md:mb-12 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg"
        >
          קמפיינים ממומנים שמביאים לקוחות מדויקים לעסק שלך — בפייסבוק, אינסטגרם, גוגל,
          טיקטוק, לינקדאין וטאבולה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={scrollToForm}
            className="btn-shine group w-full sm:w-auto rounded-full bg-gradient-cta px-8 py-4 text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-blue/25"
          >
            השאירו פרטים לשיחת ייעוץ חינם
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("CTAClick", {
                button_name: "hero_whatsapp",
                button_text: "דברו איתנו בוואטסאפ",
                location: "hero_section",
              })
            }
            className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-8 py-4 text-sm font-medium text-whatsapp transition-all duration-300 hover:scale-105 hover:bg-whatsapp/20 hover:shadow-lg hover:shadow-whatsapp/10"
          >
            <MessageCircle size={18} />
            דברו איתנו בוואטסאפ
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mt-14 hidden flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 md:flex"
          aria-hidden="true"
        >
          <span>גלילה</span>
          <ChevronDown className="h-4 w-4 animate-scroll-cue text-primary-blue/70" />
        </motion.div>
      </div>
    </section>
  );
}
