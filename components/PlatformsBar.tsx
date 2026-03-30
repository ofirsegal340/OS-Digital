const platforms = [
  "Facebook Ads",
  "Instagram Ads",
  "Google Ads",
  "TikTok Ads",
  "LinkedIn Ads",
  "Taboola / Outbrain",
];

export default function PlatformsBar() {
  const items = [...platforms, ...platforms, ...platforms];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-bg-card/50 py-6">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-dark to-transparent" />

      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {items.map((name, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-medium text-text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-blue/50" />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
