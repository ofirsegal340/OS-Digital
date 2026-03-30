"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function HeroSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "972584594488";

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.07] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary-purple/[0.07] blur-[120px]" />
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
          className="mb-8 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/[0.08] px-5 py-2 text-xs font-medium tracking-widest text-primary-blue uppercase"
        >
          סוכנות קידום ממומן לעסקים קטנים ובינוניים
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mb-7 text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl"
        >
          מפסיקים לבזבז תקציב.
          <br />
          מתחילים לראות{" "}
          <span className="text-gradient">תוצאות.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
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
            className="group rounded-full bg-gradient-cta px-8 py-4 text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-blue/20"
          >
            השאירו פרטים לשיחת ייעוץ חינם
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-8 py-4 text-sm font-medium text-whatsapp transition-all duration-300 hover:scale-105 hover:bg-whatsapp/20 hover:shadow-lg hover:shadow-whatsapp/10"
          >
            <MessageCircle size={18} />
            דברו איתנו בוואטסאפ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
