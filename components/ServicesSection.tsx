"use client";

import { motion } from "framer-motion";
import { Megaphone, Share2, MonitorSmartphone, Compass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTilt } from "@/lib/use-tilt";

const services: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  flagship?: boolean;
}[] = [
  {
    icon: Megaphone,
    number: "01",
    title: "קידום ממומן",
    description:
      "קמפיינים בפייסבוק, אינסטגרם, גוגל, טיקטוק ולינקדאין — עם יעדים מוגדרים מראש ואחריות לתוצאות",
    flagship: true,
  },
  {
    icon: Share2,
    number: "02",
    title: "ניהול סושיאל",
    description:
      "נוכחות עקבית ותוכן שבונה אמון — כדי שהקמפיינים ינחתו על עמוד שמוכר",
  },
  {
    icon: MonitorSmartphone,
    number: "03",
    title: "בניית אתרים ודפי נחיתה",
    description:
      "דפים מהירים שנבנים בשביל דבר אחד: להפוך גולשים לפניות",
  },
  {
    icon: Compass,
    number: "04",
    title: "שיווק 360",
    description:
      "אסטרטגיה, מיתוג וקריאייטיב — כל מה שסוכנות מסורתית נותנת, תחת קורת גג אחת",
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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, handlers } = useTilt<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={ref}
        {...handlers}
        className={`glass-card-elevated group relative h-full overflow-hidden p-7 will-change-transform ${
          service.flagship
            ? "border-primary-blue/30 hover:border-primary-blue/50"
            : "hover:border-primary-blue/25"
        }`}
      >
        {/* Top accent line — thickens on hover */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-blue/40 via-primary-purple/30 to-transparent transition-all duration-500 group-hover:h-[3px] group-hover:via-primary-purple/50" />

        {/* Card hover glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-blue/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Ghost numeral */}
        <span
          className="ghost-number pointer-events-none absolute -top-2 left-3 select-none"
          aria-hidden="true"
        >
          {service.number}
        </span>

        <div className="relative z-10">
          {service.flagship && (
            <span className="mb-4 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/15 px-3 py-1 text-xs font-medium text-primary-blue">
              השירות המרכזי
            </span>
          )}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-blue/15 to-primary-purple/10 ring-1 ring-white/[0.06] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary-blue/10">
            <Icon className="h-6 w-6 text-primary-blue" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
          <p className="text-base leading-relaxed text-text-muted">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

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
          <span className="font-display mb-4 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            01 / SERVICES
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            במה אני יכול לעזור לך
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
            קידום ממומן הוא הלב של מה שאני עושה — וסביבו כל מה שעסק צריך כדי
            שהפרסום באמת יעבוד
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
