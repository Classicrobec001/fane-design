"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Our Works", href: "/works" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-nav">
      <nav className="container-site flex h-[79px] items-center justify-between">
        {/* Logo — replace /assets/logo.svg with the exported Fane logo */}
        <Link href="/" className="flex items-center" aria-label="Fane home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="Fane Designs & Development"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[16px] font-medium text-ink transition hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/fanedesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] bg-brand px-6 py-[11px] text-[16px] font-medium text-white transition hover:opacity-90"
          >
            Book Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="container-site flex flex-col gap-4 py-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[16px] font-medium text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://calendly.com/fanedesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] bg-brand px-6 py-3 text-center text-[16px] font-medium text-white"
            >
              Book Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
