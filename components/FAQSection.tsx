"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "מה זה קידום ממומן ולמה העסק שלי צריך את זה?",
    answer:
      "קידום ממומן הוא פרסום בתשלום בפלטפורמות כמו פייסבוק, אינסטגרם, גוגל, טיקטוק ועוד. במקום לחכות שלקוחות ימצאו אתכם — אתם מגיעים אליהם בדיוק ברגע שהם מחפשים את מה שיש לכם להציע. זו הדרך המהירה והמדויקת ביותר להביא לקוחות חדשים.",
  },
  {
    question: "אתם עושים רק קידום ממומן?",
    answer:
      "קידום ממומן הוא השירות המרכזי, אבל סביבו יש עוד שלושה שירותים שמשלימים את התמונה: ניהול סושיאל, בניית אתרים ודפי נחיתה, ושיווק 360 — אסטרטגיה, מיתוג וקריאייטיב. אפשר לקחת רק קידום ממומן, ואפשר לבנות חבילה שמכסה את כל השיווק של העסק תחת קורת גג אחת.",
  },
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer:
      "תלוי בתחום, בתקציב ובמטרות. בדרך כלל אפשר לראות סימנים ראשונים תוך מספר ימים, אבל ביצועים יציבים ואופטימיזציה אמיתית נבנים לאורך 2-4 שבועות לפחות. אני לא מבטיח 'קסמים' ביום-יומיים — אני בונה מערכת פרסום שמייצרת תוצאות אמיתיות לאורך זמן.",
  },
  {
    question: "מה כולל השירות שלכם?",
    answer:
      "השירות כולל הכל מקצה לקצה — אסטרטגיה, הקמת קמפיינים, כתיבת קופי, עיצוב מודעות, טירגוט קהלים, אופטימיזציה שוטפת ודוחות ביצועים שקופים. ולפי הצורך גם ניהול סושיאל, בניית דפי נחיתה ושירותי מיתוג. אתם לא צריכים להבין בפרסום — אנחנו מטפלים בהכל.",
  },
  {
    question: "אני צריך גם דף נחיתה — זה חלק מהשירות?",
    answer:
      "כן. קמפיין מעולה שמוביל לדף גרוע שורף כסף, ולכן בניית דפי נחיתה היא חלק מהשירות. אנחנו בונים דפים מהירים וממוקדי המרה, מחוברים למעקב מלא — כדי שכל קליק יקבל את הסיכוי הכי טוב להפוך לפנייה.",
  },
  {
    question: "מה זה שיווק 360 ולמי זה מתאים?",
    answer:
      "שיווק 360 הוא כל מה שסוכנות מסורתית נותנת — אסטרטגיה שיווקית, מיתוג, שפה עיצובית וקריאייטיב — משולב עם הצד הדיגיטלי. זה מתאים לעסקים שרוצים גורם אחד שמסתכל על כל התמונה, במקום לתאם בין ספק לספק.",
  },
  {
    question: "באילו פלטפורמות אתם עובדים?",
    answer:
      "אנחנו מנהלים קמפיינים בכל הפלטפורמות המובילות — Facebook Ads, Instagram Ads, Google Ads, TikTok Ads, LinkedIn Ads ו-Taboola/Outbrain. נבחר יחד את הפלטפורמה המתאימה ביותר לעסק שלכם.",
  },
  {
    question: "מה התקציב המינימלי לפרסום?",
    answer:
      "אין 'מחירון' אחיד — התקציב נקבע לפי גודל העסק, התחום והמטרות. אבל חשוב להיות כנים: תקציב נמוך מדי פשוט לא יכול לייצר תוצאות משמעותיות, ולא נכון להבטיח תוצאות מיידיות על סכומים סמליים. בשיחת הייעוץ נגדיר יחד תקציב ריאלי שמתאים לעסק ולמטרות שלכם.",
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

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-display mb-4 inline-block text-xs tracking-[0.4em] text-primary-blue/60">
            07 / FAQ
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight text-gradient md:text-5xl">
            שאלות נפוצות
          </h2>
        </motion.div>

        <div className="space-y-3 md:grid md:grid-cols-2 md:items-start md:gap-4 md:space-y-0">
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
                  <span className="text-base font-medium leading-relaxed">
                    {faq.question}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-primary-blue transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
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
                    <p className="text-base leading-relaxed text-text-muted">
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
