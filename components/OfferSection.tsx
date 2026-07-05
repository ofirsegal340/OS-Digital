"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, GraduationCap, Eye, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTilt } from "@/lib/use-tilt";
import { trackEvent } from "@/lib/analytics";

const deliverables: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}[] = [
  {
    icon: Target,
    number: "01",
    title: "יעדים מדידים — מראש",
    description:
      "לפני שמתחילים, נגדיר יחד יעדים ומדדים ברורים: עלות לליד, כמות פניות ו-ROAS. הכל שחור על גבי לבן, בלי הבטחות באוויר.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "אחריות לתוצאות",
    description:
      "לא הגענו ליעדים שהגדרנו, בזמן שקבענו? אני ממשיך לעבוד על הקמפיין — ב-0₪ דמי ניהול — עד שנגיע אליהם. הסיכון עליי, לא עליך.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "אימוני מכירות לצוות",
    description:
      "פניות זה לא מספיק — צריך לסגור אותן. אני אאמן אותך ואת הצוות איך להפוך לידים ללקוחות משלמים, כדי שכל פנייה תהפוך לכסף.",
  },
  {
    icon: Eye,
    number: "04",
    title: "שקיפות מלאה, אפס הפתעות",
    description:
      "דוח מסודר כל שבוע, בלי עמלות נסתרות, והכל מעוגן בחוזה מסודר שמגן על שני הצדדים. רואים בדיוק לאן הולך כל שקל.",
  },
];

function DeliverableCard({
  item,
  index,
}: {
  item: (typeof deliverables)[number];
  index: number;
}) {
  const { ref, handlers } = useTilt<HTMLDivElement>();
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={ref}
        {...handlers}
        className="glass-card-elevated group relative h-full overflow-hidden p-7 will-change-transform hover:border-primary-blue/25"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-blue/40 via-primary-purple/30 to-transparent transition-all duration-500 group-hover:h-[3px]" />

        {/* Ghost numeral */}
        <span
          className="ghost-number pointer-events-none absolute -top-2 left-3 select-none"
          aria-hidden="true"
        >
          {item.number}
        </span>

        {/* Included tag */}
        <span className="absolute top-5 left-5 z-10 rounded-full border border-primary-blue/30 bg-primary-blue/10 px-3 py-1 text-xs font-medium text-primary-blue">
          כלול
        </span>

        <div className="relative z-10 flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-blue/15 to-primary-purple/10 ring-1 ring-white/[0.06] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary-blue/10">
            <Icon className="h-6 w-6 text-primary-blue" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-base leading-relaxed text-text-muted">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OfferSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "972584594488";

  return (
    <section id="offer" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[260px] w-[400px] md:h-[420px] md:w-[700px] -translate-x-1/2 rounded-full bg-primary-blue/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="font-display mb-4 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            02 / OFFER
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            מה אתה מקבל כשאנחנו עובדים ביחד
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
            לא רשימת מכולת — התחייבות. כל סעיף כאן מעוגן בחוזה.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {deliverables.map((item, i) => (
            <DeliverableCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Honest value punchline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 text-center text-lg font-bold md:text-xl"
        >
          וכל זה במחיר של דמי ניהול בלבד —{" "}
          <span className="text-gradient border-b-2 border-primary-blue/60 pb-0.5">
            הסיכון עליי, לא עליך.
          </span>
        </motion.p>

        {/* WhatsApp only — the compact fit-check form follows right below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("CTAClick", {
                button_name: "offer_whatsapp",
                button_text: "דברו איתי בוואטסאפ",
                location: "offer_section",
              })
            }
            className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-8 py-4 text-sm font-medium text-whatsapp transition-all duration-300 hover:scale-105 hover:bg-whatsapp/20"
          >
            <MessageCircle size={18} />
            דברו איתי בוואטסאפ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
