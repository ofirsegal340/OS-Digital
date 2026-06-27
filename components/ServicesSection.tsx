"use client";

import { motion } from "framer-motion";
import { Megaphone, Target, BarChart3, Paintbrush } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Megaphone,
    title: "קמפיינים ממומנים",
    description:
      "בנייה, ניהול ואופטימיזציה של קמפיינים שמביאים פניות ומכירות",
  },
  {
    icon: Target,
    title: "פרסום מדויק",
    description:
      "טירגוט חד לקהלים הנכונים — פחות בזבוז, יותר לקוחות",
  },
  {
    icon: BarChart3,
    title: "ניתוח וביצועים",
    description:
      "דוחות שקופים, מעקב ROAS וקבלת החלטות על בסיס נתונים",
  },
  {
    icon: Paintbrush,
    title: "קריאייטיב ותוכן",
    description:
      "קופי ועיצוב מודעות שמושכים תשומת לב ומניעים לפעולה",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[200px] w-[300px] md:h-[300px] md:w-[600px] -translate-x-1/2 rounded-full bg-primary-purple/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="font-display mb-4 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            01 / SERVICES
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            מה אנחנו עושים
          </h2>
        </motion.div>

        {/* Editorial numbered rows: extreme weight + scale contrast, no glass cards */}
        <div>
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLast = i === services.length - 1;
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={rowVariants}
                className={`group grid grid-cols-[auto_1fr] items-baseline gap-5 border-t border-white/[0.08] py-8 transition-colors duration-500 hover:border-primary-blue/30 sm:gap-10 md:py-11 ${
                  isLast ? "border-b" : ""
                }`}
              >
                <span className="font-display select-none text-5xl font-light leading-none tabular-nums text-white/15 transition-colors duration-500 group-hover:text-primary-blue/40 sm:text-7xl">
                  0{i + 1}
                </span>
                <div>
                  <div className="mb-2.5 flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-primary-blue" aria-hidden="true" />
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
