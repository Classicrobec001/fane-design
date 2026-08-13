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

// Also absent from lucide — same approach as TikTok above.
function WhatsApp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488" />
    </svg>
  );
}

const SOCIALS = [
  { Icon: Instagram, href: "https://www.instagram.com/fane_designs_", label: "Instagram" },
  { Icon: TikTok, href: "https://www.tiktok.com/@fane_designs_dev", label: "TikTok" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/fane-designs/", label: "LinkedIn" },
  // 0703 002 4503 in international form — wa.me rejects the local leading zero.
  { Icon: WhatsApp, href: "https://wa.me/2347030024503", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-site py-20">
        {/* On phones the wrappers collapse (display:contents) so all four blocks
            become direct flex children and can be ordered: logo, links, email +
            socials, location. From lg they regroup into the two columns. */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Left: logo + location */}
          <div className="contents lg:flex lg:flex-col lg:gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-white.png"
              alt="Fane Designs & Development"
              className="order-1 h-auto w-[200px] self-start sm:w-[240px] lg:order-none lg:w-[273px]"
            />
            <div className="order-4 flex items-center gap-6 lg:order-none">
              <Globe className="size-14 shrink-0" strokeWidth={1.5} />
              <p className="max-w-[173px] text-[16px] font-medium leading-5">
                Based in the Beautiful Online Worldwide
              </p>
            </div>
          </div>

          {/* Right: email + socials + links */}
          <div className="contents lg:flex lg:flex-col lg:gap-10">
            <div className="order-3 flex flex-wrap items-center gap-6 lg:order-none">
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

            <div className="order-2 flex flex-col gap-3 text-[24px] font-medium lg:order-none">
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
