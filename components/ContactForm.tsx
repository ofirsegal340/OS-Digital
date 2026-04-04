"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  Check,
} from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "972584594488";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const marketingChecked = watch("marketingConsent");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    const { marketingConsent: _, ...fields } = data;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(
        "https://hook.eu2.make.com/ssqnvh4vnfmtf5fn4mbukz2kyy837nvy",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fields.fullName,
            email: fields.email,
            phone: fields.phone,
            businessName: fields.businessName,
            message: fields.message || "",
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      reset();
    } catch {
      clearTimeout(timeout);
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/[0.08] bg-bg-card/80 px-4 py-3 text-base text-white placeholder:text-text-muted/60 transition-all duration-300 focus:border-primary-blue/40 focus:outline-none focus:ring-2 focus:ring-primary-blue/10 focus:bg-bg-card";

  const labelClasses = "mb-1.5 block text-sm font-medium text-white/80";

  return (
    <section
      id="contact"
      className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-8 md:mb-10 text-center">
            <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
              צרו קשר
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">בואו נדבר</h2>
            <p className="text-sm text-text-muted">
              השאירו פרטים ונחזור אליכם תוך 24 שעות
            </p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 md:p-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
              <p className="text-lg md:text-xl font-semibold">
                הפרטים נשלחו בהצלחה!
              </p>
              <p className="mt-3 text-sm text-text-muted">
                תודה! ניצור אתכם קשר בהקדם האפשרי
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-primary-blue underline underline-offset-4 transition-colors hover:text-white"
              >
                שליחת פנייה נוספת
              </button>
            </motion.div>
          ) : (
            <div className="glass-card overflow-hidden p-5 sm:p-8 md:p-10">
              {/* Top gradient border */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-5"
                noValidate
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className={labelClasses}>
                    שם מלא
                  </label>
                  <input
                    {...register("fullName")}
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="הכניסו את שמכם המלא"
                    className={inputClasses}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    טלפון
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                    className={`${inputClasses} text-left`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    כתובת מייל
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="example@email.com"
                    dir="ltr"
                    className={`${inputClasses} text-left`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className={labelClasses}>
                    שם העסק
                  </label>
                  <input
                    {...register("businessName")}
                    id="businessName"
                    type="text"
                    autoComplete="organization"
                    placeholder="הכניסו את שם העסק"
                    className={inputClasses}
                  />
                  {errors.businessName && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    הודעה{" "}
                    <span className="font-normal text-text-muted">
                      (אופציונלי)
                    </span>
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    placeholder="ספרו לנו קצת על העסק ומה אתם מחפשים"
                    rows={3}
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Marketing Consent */}
                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        {...register("marketingConsent")}
                        type="checkbox"
                        className="peer sr-only"
                      />
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-white/20 bg-bg-card/80 transition-all peer-checked:border-primary-blue peer-checked:bg-primary-blue peer-focus-visible:ring-2 peer-focus-visible:ring-primary-blue/30">
                        {marketingChecked && (
                          <Check className="h-3.5 w-3.5 text-bg-dark" strokeWidth={3} />
                        )}
                      </div>
                    </div>
                    <span className="text-xs leading-relaxed text-text-muted">
                      אני מאשר/ת קבלת תוכן שיווקי מ-OS Digital. ניתן להסיר את
                      עצמך בכל עת.
                    </span>
                  </label>
                  {errors.marketingConsent && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.marketingConsent.message}
                    </p>
                  )}
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/[0.08] px-4 py-3">
                    <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                    <p className="text-sm text-red-400">
                      שגיאה בשליחה — בדקו את החיבור לאינטרנט ונסו שוב
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-cta py-3.5 text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-blue/20 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {status === "loading"
                      ? "שולח..."
                      : "שלחו — ניצור קשר תוך 24 שעות"}
                  </button>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border border-whatsapp/20 bg-whatsapp/10 py-3.5 text-sm font-medium text-whatsapp transition-all duration-300 hover:scale-[1.02] hover:bg-whatsapp/15 hover:shadow-lg hover:shadow-whatsapp/10"
                  >
                    <MessageCircle className="h-4 w-4" />
                    דברו איתנו בוואטסאפ
                  </a>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
