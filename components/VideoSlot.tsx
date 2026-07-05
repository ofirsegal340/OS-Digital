"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Flip to true to preview the styled frame before a video URL exists
const SHOW_PLACEHOLDER = false;

export default function VideoSlot() {
  const vslUrl = process.env.NEXT_PUBLIC_VSL_URL || "";

  if (!vslUrl && !SHOW_PLACEHOLDER) return null;

  const isNativeVideo = /\.(mp4|webm)(\?.*)?$/i.test(vslUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      className="mx-auto mb-8 w-full max-w-2xl md:mb-12"
    >
      <p className="mb-3 text-sm font-medium text-primary-blue">
        צפה עכשיו — 3 דקות שיחסכו לך חודשים של ניסוי וטעייה
      </p>
      <div className="glow-border">
        <div className="relative aspect-video overflow-hidden">
          {!vslUrl ? (
            <div className="flex h-full w-full items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-cta">
                <Play className="mr-1 h-7 w-7 text-bg-dark" fill="currentColor" />
              </span>
            </div>
          ) : isNativeVideo ? (
            <video
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            >
              <source src={vslUrl} />
            </video>
          ) : (
            <iframe
              src={vslUrl}
              title="סרטון היכרות — OS Digital"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
