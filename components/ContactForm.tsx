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
} from "lucide-react";
import {
  contactSchema,
  type ContactFormData,
  budgetOptions,
} from "@/lib/validations";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-white/[0.08] bg-bg-card/80 px-5 py-3.5 text-sm text-white placeholder:text-text-muted transition-all duration-300 focus:border-primary-blue/40 focus:outline-none focus:ring-2 focus:ring-primary-blue/10 focus:bg-bg-card";

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
              צרו קשר
            </span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              בואו נדבר
            </h2>
            <p className="text-sm text-text-muted">
              השאירו פרטים ונחזור אליכם תוך 24 שעות
            </p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="h-8 w-8 text-green-400" />
              </div>
              <p className="text-xl font-semibold">הפרטים נשלחו בהצלחה!</p>
              <p className="mt-3 text-sm text-text-muted">
                ניצור אתכם קשר בהקדם
              </p>
            </motion.div>
          ) : (
            <div className="glass-card overflow-hidden p-8 md:p-10">
              {/* Top gradient border */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <input
                    {...register("fullName")}
                    placeholder="שם מלא"
                    className={inputClasses}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="כתובת מייל"
                    dir="ltr"
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="טלפון (05X-XXXXXXX)"
                    dir="ltr"
                    className={inputClasses}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("businessName")}
                    placeholder="שם העסק"
                    className={inputClasses}
                  />
                  {errors.businessName && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    {...register("budget")}
                    defaultValue=""
                    className={`${inputClasses} [&>option]:bg-bg-dark`}
                  >
                    <option value="" disabled className="text-text-muted">
                      תקציב חודשי לפרסום
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    placeholder="הודעה (אופציונלי)"
                    rows={3}
                    className={`${inputClasses} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      {...register("marketingConsent")}
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-white/20 bg-bg-card/80 transition-all checked:border-primary-blue checked:bg-primary-blue"
                    />
                    <span className="text-xs leading-relaxed text-text-muted">
                      אני מאשר/ת קבלת תוכן שיווקי מ-OS Digital. ניתן להסיר
                      את עצמך בכל עת.
                    </span>
                  </label>
                  {errors.marketingConsent && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.marketingConsent.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/[0.08] px-5 py-3.5">
                    <XCircle className="h-4 w-4 text-red-400" />
                    <p className="text-sm text-red-400">
                      שגיאה בשליחה — נסו שוב
                    </p>
                  </div>
                )}

                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-cta py-4 text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-blue/20 disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
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
                    className="flex w-full items-center justify-center gap-2.5 rounded-full border border-whatsapp/20 bg-whatsapp/10 py-4 text-sm font-medium text-whatsapp transition-all duration-300 hover:scale-[1.02] hover:bg-whatsapp/15 hover:shadow-lg hover:shadow-whatsapp/10"
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
