"use client";

import { motion } from "framer-motion";

export default function CertificateSection() {
  return (
    <section
      id="certificate"
      className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-primary-blue uppercase">
            הסמכה מקצועית
          </span>
          <h2 className="text-3xl font-bold md:text-4xl">
            הסמכות מקצועיות
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-text-muted">
            אנחנו לא רק מדברים — אנחנו מוכיחים את הידע שלנו עם הסמכות מקצועיות.
          </p>
        </motion.div>

        {/* Certificate iframe wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card relative overflow-hidden border-primary-blue/15 shadow-xl shadow-primary-blue/[0.06]"
        >
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-blue/50 to-transparent" />

          <div
            className="w-full"
            style={{ minHeight: "620px" }}
          >
            <iframe
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="100%"
              src="https://learn.eilon.co/certificate-embed/UkiOv5eQsGTXZvEOR2bWVta2UAr2-2/EvBhx6C2pJTwnhX7ziui/kWjRAgXUVafGP1cvspObEgoXz9s1"
              allowFullScreen
              className="block w-full"
              style={{ minHeight: "620px" }}
              title="תעודת הסמכה מקצועית"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
