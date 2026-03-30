import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "שם חובה"),
  email: z.string().email("כתובת מייל לא תקינה"),
  phone: z.string().regex(/^05\d{8}$/, "מספר ישראלי בלבד"),
  businessName: z.string().min(1, "שם העסק חובה"),
  budget: z.enum(["under_2k", "2k_5k", "5k_15k", "above_15k"], {
    message: "יש לבחור תקציב",
  }),
  message: z.string().max(500).optional(),
  marketingConsent: z.literal(true, {
    message: "יש לאשר קבלת תוכן שיווקי",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const budgetOptions = [
  { value: "under_2k", label: "עד ₪2,000" },
  { value: "2k_5k", label: "₪2,000 – ₪5,000" },
  { value: "5k_15k", label: "₪5,000 – ₪15,000" },
  { value: "above_15k", label: "₪15,000+" },
] as const;
