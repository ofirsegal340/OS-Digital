import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const budgetLabels: Record<string, string> = {
  under_2k: "עד ₪2,000",
  "2k_5k": "₪2,000 – ₪5,000",
  "5k_15k": "₪5,000 – ₪15,000",
  above_15k: "₪15,000+",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { fullName, email, phone, businessName, budget, message } =
      parsed.data;

    // Send email notification via Resend
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "OS Digital <leads@osdigitalagency.com>",
      to: "info@osdigitalagency.com",
      subject: `ליד חדש מהאתר — ${businessName}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #0A0E1A; margin-bottom: 24px;">📩 ליד חדש מדף הנחיתה</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">שם מלא</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">מייל</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;" dir="ltr">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">טלפון</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;" dir="ltr">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">שם העסק</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${businessName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">תקציב חודשי</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${budgetLabels[budget] || budget}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold;">הודעה</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${message}</td>
            </tr>`
                : ""
            }
          </table>
          <p style="margin-top: 24px; color: #666; font-size: 13px;">נשלח מדף הנחיתה של OS Digital</p>
        </div>
      `,
    });

    // Optionally forward to Payload CMS if configured
    const endpoint = process.env.PAYLOAD_ENDPOINT;
    if (endpoint) {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      }).catch((err) => console.error("Payload CMS error:", err));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
