"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { WORKS } from "@/lib/content";

const GAP = 24; // matches gap-6 on the track

export default function Works() {
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    // A pixel of slack — scrollLeft can land fractionally short of the end.
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + GAP : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrow =
    "flex size-[55px] items-center justify-center rounded-lg border border-brand text-brand transition hover:bg-brand hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand";

  return (
    <section id="works" className="bg-white py-[30px]">
      <div className="container-site">
        <div className="flex items-center justify-between">
          <h2 className="text-[32px] font-semibold text-ink sm:text-[48px]">
            Selected Works
          </h2>
          <div className="hidden items-center gap-6 sm:flex">
            <button
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Previous projects"
              className={arrow}
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Next projects"
              className={arrow}
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Track — scrolls horizontally and bleeds off the right of the screen. */}
      <div
        ref={track}
        onScroll={sync}
        className="scroller-bleed mt-9 flex snap-x gap-6 overflow-x-auto"
      >
        {WORKS.map((w) => (
          <Link
            key={w.title}
            href={w.href}
            className="group flex w-[300px] shrink-0 snap-start flex-col gap-5 sm:w-[340px] lg:w-[397px]"
          >
            <div className="aspect-[396/354] w-full overflow-hidden rounded-lg bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.image}
                alt={w.title}
                className="size-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <p className="truncate text-[16px] font-medium leading-5 text-muted">
              {w.title}
            </p>
          </Link>
        ))}
      </div>

      <div className="container-site mt-12">
        <SecondaryButton href="/works">View all projects</SecondaryButton>
      </div>
    </section>
  );
}
