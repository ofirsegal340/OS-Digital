import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

// Simple in-memory rate limiter (resets on cold start — sufficient for basic protection)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (recent.length >= RATE_LIMIT_MAX) return true;

  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check — if filled, it's a bot
    if (body.website) {
      // Return 200 so bots think it worked
      return NextResponse.json({ success: true });
    }

    // Validate
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (!MAKE_WEBHOOK_URL) {
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const { fullName, email, phone, businessName, message } = parsed.data;

    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullName,
        email,
        phone,
        businessName,
        message: message || "",
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to submit" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
