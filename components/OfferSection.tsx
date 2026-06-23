"use client";

import { motion } from "framer-motion";
import { Target, ShieldCheck, GraduationCap, Eye, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTilt } from "@/lib/use-tilt";
import { trackEvent } from "@/lib/analytics";

const guarantees: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Target,
    title: "יעדים מדידים — מראש",
    description:
      "לפני שמתחילים, נגדיר יחד יעדים ומדדים ברורים: עלות לליד, כמות פניות ו-ROAS. הכל שחור על גבי לבן, בלי הבטחות באוויר.",
  },
  {
    icon: ShieldCheck,
    title: "אחריות לתוצאות",
    description:
      "לא הגענו ליעדים שהגדרנו, בזמן שקבענו? אני ממשיך לעבוד על הקמפיין — בלי דמי ניהול נוספים — עד שנגיע אליהם. הסיכון עליי, לא עליך.",
  },
  {
    icon: GraduationCap,
    title: "אימוני מכירות במתנה",
    description:
      "פניות זה לא מספיק — צריך לסגור אותן. אני אאמן אותך ואת הצוות איך להפוך לידים ללקוחות משלמים, כדי שכל פנייה תהפוך לכסף.",
  },
  {
    icon: Eye,
    title: "שקיפות מלאה, אפס הפתעות",
    description:
      "דוחות ברורים, בלי עמלות נסתרות, והכל מעוגן בחוזה מסודר שמגן על שני הצדדים. רואים בדיוק לאן הולך כל שקל.",
  },
];

function GuaranteeCard({
  item,
  index,
}: {
  item: (typeof guarantees)[number];
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

  const scrollToForm = () => {
    trackEvent("CTAClick", {
      button_name: "offer_cta",
      button_text: "אני רוצה את ההצעה הזו",
      location: "offer_section",
    });
    const el = document.getElementById("contact");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

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
            הצעה שאי אפשר לסרב לה
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
            אני לא מבקש ממך אמון עיוור — אני נותן לך התחייבות. נגדיר יעדים ברורים,
            ואני לוקח אחריות אישית על זה שנגיע אליהם.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {guarantees.map((item, i) => (
            <GuaranteeCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={scrollToForm}
            className="btn-shine group w-full sm:w-auto rounded-full bg-gradient-cta px-8 py-4 text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-blue/25"
          >
            אני רוצה את ההצעה הזו
          </button>
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
