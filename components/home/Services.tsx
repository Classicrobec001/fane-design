"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/content";

export default function Services() {
  // Starts as a clean list of six; rows open on hover (or tap/focus).
  const [open, setOpen] = useState<string>("");

  return (
    <section id="services" className="bg-white py-[69px]">
      <div className="container-site">
        <SectionHeading
          eyebrow="Services We Do Best"
          title="We fill the design & development gap, quickly."
        />
      </div>

      <div className="mt-20 w-full border-t border-muted">
        {SERVICES.map((s) => {
          const isOpen = open === s.slug;
          return (
            <div
              key={s.slug}
              // Hover opens the row on pointer devices; the panel lives inside this
              // wrapper so moving into it doesn't collapse the row.
              onMouseEnter={() => setOpen(s.slug)}
              className="border-b border-muted"
            >
              {/* Row header — click/focus also toggles, for touch + keyboard */}
              <button
                onClick={() => setOpen(isOpen ? "" : s.slug)}
                onFocus={() => setOpen(s.slug)}
                aria-expanded={isOpen}
                className="w-full text-left"
              >
                <div className="container-site flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-24">
                  <div className="flex items-center gap-10 md:w-[317px] md:shrink-0">
                    <span className="text-[16px] font-medium text-muted">{s.no}</span>
                    <h3 className="text-[20px] font-medium text-ink sm:text-[24px]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="max-w-[684px] text-[16px] font-medium leading-6 text-muted">
                    {s.desc}
                  </p>
                </div>
              </button>

              {/* Expanded panel — gallery + CTA */}
              {isOpen && (
                <div className="container-site pb-12">
                  {s.gallery && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      {s.gallery.map((src, i) => (
                        <div
                          key={i}
                          className="aspect-[404/354] w-full overflow-hidden rounded-lg bg-neutral-100"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt={`${s.title} sample ${i + 1}`}
                            className="size-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={s.href}
                    target={s.action === "request" ? "_blank" : undefined}
                    rel={s.action === "request" ? "noopener noreferrer" : undefined}
                    className="mt-9 inline-flex items-center gap-4 rounded-[10px] border border-brand bg-white px-[25px] py-[16px] text-[16px] font-medium uppercase text-brand transition hover:bg-brand hover:text-white"
                  >
                    {s.cta}
                    <ArrowRight className="size-6" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
