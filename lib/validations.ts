import { z } from "zod";

// Server-side schema — only data fields
export const contactSchema = z.object({
  fullName: z.string().min(2, "שם חובה"),
  email: z.string().email("כתובת מייל לא תקינה"),
  phone: z.string().regex(/^05\d{8}$/, "מספר ישראלי בלבד"),
  businessName: z.string().min(1, "שם העסק חובה"),
  message: z.string().max(500).optional(),
});

// Client-side schema — includes marketing consent checkbox
export const contactFormSchema = contactSchema.extend({
  marketingConsent: z.literal(true, {
    message: "יש לאשר קבלת תוכן שיווקי",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
