import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="OS Digital — סוכנות שיווק דיגיטלי"
            width={80}
            height={28}
            className="h-7 w-auto opacity-60"
            loading="lazy"
          />
          <span className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()}
          </span>
        </div>

        <a
          href="https://instagram.com/os__digital"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-white"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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
      </div>
    </footer>
  );
}
