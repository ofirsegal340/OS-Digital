import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osdigitalagency.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "קידום ממומן לעסקים קטנים ובינוניים בישראל | OS Digital",
  description:
    "סוכנות OS Digital מנהלת קמפיינים ממומנים בפייסבוק, גוגל, אינסטגרם וטיקטוק שמביאים לקוחות מדויקים לעסק שלך. צרו קשר עכשיו וקבלו שיחת ייעוץ חינם.",
  keywords: [
    "קידום ממומן",
    "פרסום ממומן",
    "שיווק דיגיטלי",
    "פרסום בפייסבוק",
    "פרסום בגוגל",
    "פרסום באינסטגרם",
    "קמפיינים ממומנים",
    "סוכנות פרסום",
    "OS Digital",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "קידום ממומן לעסקים קטנים ובינוניים בישראל | OS Digital",
    description:
      "קמפיינים ממומנים שמביאים לקוחות מדויקים לעסק שלך — בפייסבוק, גוגל, אינסטגרם וטיקטוק. צרו קשר עכשיו לייעוץ חינם.",
    url: "/",
    siteName: "OS Digital",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "קידום ממומן לעסקים קטנים ובינוניים בישראל | OS Digital",
    description:
      "קמפיינים ממומנים שמביאים לקוחות מדויקים לעסק שלך. צרו קשר עכשיו לייעוץ חינם.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#0A0E1A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
