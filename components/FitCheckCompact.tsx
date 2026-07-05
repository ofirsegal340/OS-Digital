"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, XCircle, Check } from "lucide-react";
import {
  compactLeadFormSchema,
  type CompactLeadFormData,
} from "@/lib/validations";
import { trackEvent, trackPixelEvent } from "@/lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FitCheckCompactProps {
  location: string;
  heading?: string;
}

export default function FitCheckCompact({
  location,
  heading = "רוצה לבדוק אם אנחנו מתאימים?",
}: FitCheckCompactProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [honeypot, setHoneypot] = useState("");
  const hasTrackedLead = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CompactLeadFormData>({
    resolver: zodResolver(compactLeadFormSchema),
  });

  const marketingChecked = watch("marketingConsent");
  const phoneValue = watch("phone");

  const onSubmit = async (data: CompactLeadFormData) => {
    if (honeypot) return;

    setStatus("loading");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant: "compact",
          fullName: data.fullName,
          phone: data.phone,
          location,
          website: honeypot,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      reset();

      if (!hasTrackedLead.current) {
        hasTrackedLead.current = true;
        trackPixelEvent("Lead", { form_name: "fit_check_compact" });
        trackEvent("Lead", {
          form_name: "fit_check_compact",
          location,
          page: window.location.pathname,
        });
      }
    } catch {
      clearTimeout(timeout);
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-2xl px-4 sm:px-6"
    >
      <div className="glow-border">
        <div className="relative overflow-hidden p-6 sm:p-8 text-center">
          {status === "success" ? (
            <div className="py-4">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
              <p className="text-lg font-semibold">הפרטים התקבלו!</p>
              <p className="mt-2 text-sm text-text-muted">
                אני חוזר אליך תוך 24 שעות עם תשובה כנה
              </p>
            </div>
          ) : (
            <>
              <p className="mb-1 text-lg font-semibold md:text-xl">{heading}</p>
              <p className="mb-5 text-xs text-text-muted">
                (אני לא עובד עם כל אחד — בודקים התאמה קודם)
              </p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Honeypot — hidden from real users, bots fill it */}
                <div aria-hidden="true" className="absolute -left-[9999px]">
                  <label htmlFor={`website-${location}`}>Website</label>
                  <input
                    id={`website-${location}`}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1 text-right">
                    <input
                      {...register("fullName")}
                      type="text"
                      autoComplete="name"
                      placeholder="איך קוראים לך?"
                      aria-label="שם מלא"
                      className="input-pill"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 pr-4 text-sm text-negative">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1 text-right">
                    <input
                      {...register("phone")}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="מה המספר שלך?"
                      aria-label="טלפון"
                      dir={phoneValue ? "ltr" : "rtl"}
                      className={`input-pill ${phoneValue ? "text-left" : "text-right"}`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 pr-4 text-sm text-negative">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <label className="mt-4 flex cursor-pointer items-start justify-center gap-2.5 text-right">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      {...register("marketingConsent")}
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <div className="flex h-5 w-5 items-center justify-center rounded border border-white/20 bg-bg-card/80 transition-all peer-checked:border-primary-blue peer-checked:bg-primary-blue peer-focus-visible:ring-2 peer-focus-visible:ring-primary-blue/30">
                      {marketingChecked && (
                        <Check
                          className="h-3.5 w-3.5 text-bg-dark"
                          strokeWidth={3}
                        />
                      )}
                    </div>
                  </div>
                  <span className="text-xs leading-relaxed text-text-muted">
                    אני מאשר/ת קבלת תוכן שיווקי מ-OS Digital. ניתן להסיר את
                    עצמך בכל עת.
                  </span>
                </label>
                {errors.marketingConsent && (
                  <p className="mt-1.5 text-sm text-negative">
                    {errors.marketingConsent.message}
                  </p>
                )}

                {status === "error" && (
                  <div className="mt-4 flex items-center justify-center gap-2.5 rounded-xl border border-negative/20 bg-negative-dim px-4 py-3">
                    <XCircle className="h-4 w-4 shrink-0 text-negative" />
                    <p className="text-sm text-negative">
                      שגיאה בשליחה — נסו שוב
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-shine mt-5 flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-cta py-3.5 text-sm font-semibold text-bg-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-blue/20 disabled:opacity-60 disabled:hover:scale-100"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : null}
                  {status === "loading" ? "שולח..." : "לבדיקת התאמה"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
