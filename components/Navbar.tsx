"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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
        <Image
          src="/logo.png"
          alt="OS Digital"
          width={120}
          height={40}
          className="h-10 w-auto"
          priority
        />

        <button
          onClick={scrollToForm}
          className="rounded-full bg-gradient-cta px-6 py-2.5 text-sm font-medium text-bg-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-blue/25"
        >
          השאירו פרטים
        </button>
      </div>
    </nav>
  );
}
