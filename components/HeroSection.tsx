"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
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
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-[400px] w-[400px] md:h-[600px] md:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.12] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-primary-purple/[0.12] blur-[150px]" />

        {/* Animated floating orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 h-[150px] w-[150px] md:h-[250px] md:w-[250px] rounded-full bg-primary-blue/[0.06] blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 h-[120px] w-[120px] md:h-[200px] md:w-[200px] rounded-full bg-primary-purple/[0.07] blur-[80px]"
        />

        {/* Large decorative glowing rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="hero-ring absolute top-1/2 left-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="hero-ring absolute top-1/2 left-1/2 h-[650px] w-[650px] md:h-[900px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-50"
          style={{ borderColor: "rgba(180, 79, 255, 0.1)" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
          className="mb-5 md:mb-7 text-3xl font-bold leading-[1.2] md:text-5xl lg:text-6xl"
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
      </div>
    </section>
  );
}
