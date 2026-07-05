import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osdigitalagency.com";
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  title: "שיווק דיגיטלי באחריות מלאה לעסקים בישראל | OS Digital",
  description:
    "OS Digital — קידום ממומן, ניהול סושיאל, בניית אתרים ושיווק 360 לעסקים קטנים ובינוניים. יעדים מדידים מראש, שקיפות מלאה ואחריות לתוצאות. בדקו התאמה עכשיו.",
  keywords: [
    "קידום ממומן",
    "פרסום ממומן",
    "שיווק דיגיטלי",
    "פרסום בפייסבוק",
    "פרסום בגוגל",
    "פרסום באינסטגרם",
    "קמפיינים ממומנים",
    "ניהול סושיאל",
    "בניית אתרים",
    "דפי נחיתה",
    "סוכנות פרסום",
    "OS Digital",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "שיווק דיגיטלי באחריות מלאה לעסקים בישראל | OS Digital",
    description:
      "קידום ממומן, ניהול סושיאל, בניית אתרים ושיווק 360 — עם יעדים מדידים מראש ואחריות לתוצאות. בדקו התאמה עכשיו.",
    url: "/",
    siteName: "OS Digital",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OS Digital — קידום ממומן לעסקים קטנים ובינוניים בישראל",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שיווק דיגיטלי באחריות מלאה לעסקים בישראל | OS Digital",
    description:
      "קידום ממומן, סושיאל, אתרים ושיווק 360 — עם אחריות לתוצאות. בדקו התאמה עכשיו.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#080B14",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className={heebo.className}>
        {children}

        {/* Meta Pixel */}
        {pixelId && (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {/* Google Analytics (GA4) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { send_page_view: true });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
