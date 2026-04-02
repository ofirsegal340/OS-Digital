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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[200px] w-[300px] md:h-[300px] md:w-[600px] -translate-x-1/2 rounded-full bg-primary-purple/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
            השירותים שלנו
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            מה אנחנו עושים
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="glass-card group relative overflow-hidden p-7 transition-all duration-500 hover:border-primary-blue/20 hover:bg-bg-card-hover/80 hover:shadow-xl hover:shadow-primary-blue/[0.05]"
            >
              {/* Card hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10">
                  <service.icon className="h-6 w-6 text-primary-blue" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
