import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OS Digital — סוכנות קידום ממומן",
  description:
    "קמפיינים ממומנים שמביאים לקוחות אמיתיים — בפייסבוק, אינסטגרם, גוגל, טיקטוק, לינקדאין וטאבולה.",
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
