import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="OS Digital — סוכנות שיווק דיגיטלי"
                width={80}
                height={28}
                className="h-7 w-auto opacity-70"
                loading="lazy"
              />
              <span className="text-base font-semibold tracking-tight">
                OS <span className="text-primary-blue">Digital</span>
              </span>
            </div>
            <p className="text-sm text-text-muted">
              קידום ממומן שמביא תוצאות לעסקים קטנים ובינוניים
            </p>
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <a
              href="https://instagram.com/os__digital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-text-muted transition-all duration-300 hover:border-white/15 hover:text-white"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @os__digital
            </a>
            <span className="text-xs text-text-muted/70">
              &copy; {new Date().getFullYear()} OS Digital. כל הזכויות שמורות.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
