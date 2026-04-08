import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className={inter.className}>
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
