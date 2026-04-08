"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ראשי", href: "#hero" },
  { label: "שירותים", href: "#services" },
  { label: "למה אנחנו", href: "#stats" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "צרו קשר", href: "#contact" },
];

const NAVBAR_HEIGHT = 80;

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-bg-dark/70 py-3 shadow-lg shadow-black/20 backdrop-blur-xl saturate-150"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Nav links (right side in RTL) */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-text-muted transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="btn-shine rounded-full bg-gradient-cta px-6 py-2.5 text-sm font-medium text-bg-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-blue/25"
          >
            השאירו פרטים
          </button>
        </div>

        {/* Mobile hamburger (right side in RTL) */}
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/[0.05] md:hidden"
          aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo + Name (left side in RTL) */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.webp"
            alt="OS Digital — סוכנות קידום ממומן לעסקים"
            width={120}
            height={40}
            className="h-7 sm:h-9 w-auto"
            priority
          />
          <span className="text-base sm:text-lg font-bold tracking-tight">
            OS <span className="text-primary-blue">Digital</span>
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="border-t border-white/[0.06] bg-bg-dark/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="rounded-lg px-4 py-3 text-right text-sm text-text-muted transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 rounded-full bg-gradient-cta py-3 text-center text-sm font-medium text-bg-dark"
            >
              השאירו פרטים
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
