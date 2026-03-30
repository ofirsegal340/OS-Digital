import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

const WEB3FORMS_KEY = "37cf1005-e1e9-4b16-86a2-84f25b972e7d";

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

    const { fullName, email, phone, businessName, message } = parsed.data;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `ליד חדש מהאתר — ${businessName}`,
        from_name: "OS Digital Landing Page",
        "שם מלא": fullName,
        "מייל": email,
        "טלפון": phone,
        "שם העסק": businessName,
        "הודעה": message || "—",
      }),
    });

    if (!res.ok) {
      console.error("Web3Forms error:", res.status);
      return NextResponse.json(
        { error: "Failed to submit" },
        { status: 502 }
      );
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
