"use client";

import { useEffect, useRef } from "react";

type Props = {
  mp4: string;
  webm?: string;
  poster?: string;
  className?: string;
};

/**
 * Silent looping case-study clip. Nothing downloads until the section scrolls
 * into view, and playback pauses again once it leaves.
 */
export default function CaseVideo({ mp4, webm, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced-motion visitors keep the poster frame — no download, no movement.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // play() rejects if the browser blocks autoplay; the poster stays up.
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
