"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "מה זה קידום ממומן ולמה העסק שלי צריך את זה?",
    answer:
      "קידום ממומן הוא פרסום בתשלום בפלטפורמות כמו פייסבוק, אינסטגרם, גוגל, טיקטוק ועוד. במקום לחכות שלקוחות ימצאו אתכם — אתם מגיעים אליהם בדיוק ברגע שהם מחפשים את מה שיש לכם להציע. זו הדרך המהירה והמדויקת ביותר להביא לקוחות חדשים.",
  },
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer:
      "בדרך כלל תוצאות ראשוניות מתחילות להגיע כבר ב-72 השעות הראשונות מהשקת הקמפיין. אופטימיזציה מלאה וביצועים יציבים נבנים לאורך 2-4 שבועות ראשונים.",
  },
  {
    question: "מה כולל השירות שלכם?",
    answer:
      "השירות כולל הכל מקצה לקצה — אסטרטגיה, הקמת קמפיינים, כתיבת קופי, עיצוב מודעות, טירגוט קהלים, אופטימיזציה שוטפת ודוחות ביצועים שקופים. אתם לא צריכים להבין בפרסום — אנחנו מטפלים בהכל.",
  },
  {
    question: "באילו פלטפורמות אתם עובדים?",
    answer:
      "אנחנו מנהלים קמפיינים בכל הפלטפורמות המובילות — Facebook Ads, Instagram Ads, Google Ads, TikTok Ads, LinkedIn Ads ו-Taboola/Outbrain. נבחר יחד את הפלטפורמה המתאימה ביותר לעסק שלכם.",
  },
  {
    question: "מה התקציב המינימלי לפרסום?",
    answer:
      "אין תקציב מינימלי קבוע — אנחנו מתאימים את התקציב לגודל העסק ולמטרות שלכם. גם עם תקציבים צנועים אפשר לייצר תוצאות משמעותיות כשיודעים מה עושים.",
  },
  {
    question: "יש התחייבות לתקופה?",
    answer:
      "אין חוזה ואין התחייבות ארוכת טווח. אנחנו מאמינים שהתוצאות הן מה שמחזיק לקוחות — לא חוזים. עם זאת, אנחנו ממליצים על מינימום 3 חודשים כדי לאפשר אופטימיזציה מלאה.",
  },
  {
    question: "איך אני יודע שהפרסום עובד?",
    answer:
      "תקבלו דוחות שקופים עם כל המספרים — כמה הוצאתם, כמה פניות נכנסו, מה העלות לליד, ומה ה-ROAS. שקיפות מלאה של 100% — רואים בדיוק לאן הולך כל שקל.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-[200px] w-[250px] md:h-[300px] md:w-[400px] rounded-full bg-primary-purple/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            שאלות נפוצות
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggle(index)}
                className={`glass-card w-full px-4 sm:px-7 py-4 sm:py-5 text-right transition-all duration-300 ${
                  openIndex === index
                    ? "border-primary-blue/20 bg-bg-card-hover/80"
                    : "hover:border-white/[0.12] hover:bg-bg-card-hover/50"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium leading-relaxed md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary-blue transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? "mt-4 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
