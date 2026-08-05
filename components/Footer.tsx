import Link from "next/link";
import { Globe, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

// TikTok isn't in lucide — minimal inline glyph. Swap for the exported asset if preferred.
function TikTok({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.4c-1.2.1-2.4-.3-3.5-1v6.6c0 3.5-2.8 5.9-6 5.4-2.7-.4-4.5-2.9-4.1-5.7.3-2.3 2.2-4 4.5-4 .3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2V3h3.9Z" />
    </svg>
  );
}

const SOCIALS = [
  { Icon: Instagram, href: "https://www.instagram.com/fane_designs_", label: "Instagram" },
  { Icon: TikTok, href: "https://www.tiktok.com/@fane_designs_dev", label: "TikTok" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/fane-designs/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-site py-20">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Left: logo + location */}
          <div className="flex flex-col gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-white.png"
              alt="Fane Designs & Development"
              className="h-auto w-[200px] self-start sm:w-[240px] lg:w-[273px]"
            />
            <div className="flex items-center gap-6">
              <Globe className="size-14 shrink-0" strokeWidth={1.5} />
              <p className="max-w-[173px] text-[16px] font-medium leading-5">
                Based in the Beautiful Online Worldwide
              </p>
            </div>
          </div>

          {/* Right: email + socials + links */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="mailto:fanedesignz@gmail.com"
                className="inline-flex items-center gap-4 rounded-[10px] bg-white px-[25px] py-[16px] text-[16px] font-medium text-brand transition hover:opacity-90"
              >
                fanedesignz@gmail.com
                <ArrowUpRight className="size-6" />
              </Link>
              <div className="flex items-center gap-6">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition hover:opacity-80"
                  >
                    <Icon className="size-10" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 text-[24px] font-medium">
              <Link href="/" className="leading-10 hover:opacity-80">
                Home
              </Link>
              <Link
                href="https://calendly.com/fanedesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-10 hover:opacity-80"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-16 text-[14px] font-medium text-white/70">
          © 2026 Fane Designs &amp; Development. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
