type Platform = {
  name: string;
  // Simple monochrome path that fills with currentColor
  path: string;
  viewBox?: string;
};

// Lightweight monochrome brand glyphs — drawn with currentColor so the existing
// text color flows through them. Approximations of the brand marks, not the
// official assets — used here as small marquee identifiers only.
const platforms: Platform[] = [
  {
    name: "Facebook Ads",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H8v-2.89h2.44V9.84c0-2.42 1.44-3.76 3.65-3.76 1.06 0 2.16.19 2.16.19v2.38h-1.22c-1.2 0-1.57.74-1.57 1.5V12h2.68l-.43 2.89h-2.25v6.99A10 10 0 0 0 22 12Z",
  },
  {
    name: "Instagram Ads",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.22.06 1.27.07 1.65.07 4.86 0 3.2-.01 3.58-.07 4.85-.06 1.16-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.22.41-1.27.06-1.65.07-4.86.07s-3.58-.01-4.86-.07c-1.16-.06-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.35-1.06-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.06-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04-.2-.51-.44-.88-.83-1.27a3.4 3.4 0 0 0-1.27-.83c-.39-.15-.97-.33-2.04-.38C15.5 3.97 15.15 3.96 12 3.96Zm0 3.07a4.97 4.97 0 1 1 0 9.94 4.97 4.97 0 0 1 0-9.94Zm0 1.8a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34Zm5.17-2c0 .65-.52 1.16-1.16 1.16-.64 0-1.16-.51-1.16-1.16 0-.64.52-1.16 1.16-1.16.64 0 1.16.52 1.16 1.16Z",
  },
  {
    name: "Google Ads",
    path: "M21.35 11.1H12v2.95h5.36c-.23 1.4-1.65 4.09-5.36 4.09-3.23 0-5.86-2.67-5.86-5.94s2.63-5.94 5.86-5.94c1.84 0 3.07.78 3.77 1.45l2.57-2.47C16.71 3.86 14.55 3 12 3 6.97 3 2.9 7.04 2.9 12s4.07 9 9.1 9c5.26 0 8.74-3.7 8.74-8.9 0-.6-.06-1.05-.14-1.5h-.25Z",
  },
  {
    name: "TikTok Ads",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.81a8.16 8.16 0 0 0 4.77 1.52V6.89a4.86 4.86 0 0 1-1.84-.2Z",
  },
  {
    name: "LinkedIn Ads",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z",
    viewBox: "0 0 24 24",
  },
  {
    name: "Taboola / Outbrain",
    path: "M3 5h18v2H3V5Zm0 6h18v2H3v-2Zm0 6h18v2H3v-2Z",
  },
];

export default function PlatformsBar() {
  const items = [...platforms, ...platforms, ...platforms];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-bg-card/40 py-5 sm:py-7">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-dark to-transparent" />

      <div className="flex animate-marquee gap-10 sm:gap-16 whitespace-nowrap">
        {items.map(({ name, path, viewBox }, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-medium text-white/45"
          >
            <svg
              className="h-[18px] w-[18px] text-primary-blue/60"
              viewBox={viewBox || "0 0 24 24"}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={path} />
            </svg>
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
