import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICES_INTRO, METHOD } from "@/lib/content";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Our Services — Fane Designs & Development",
  description: SERVICES_INTRO.body,
};

export default function ServicesPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white pt-24 pb-12">
        <div className="container-site max-w-[820px]">
          <p className="text-[16px] font-medium text-muted">
            {SERVICES_INTRO.eyebrow}
          </p>
          <h1 className="mt-6 text-[40px] font-bold leading-tight text-ink sm:text-[60px]">
            {SERVICES_INTRO.title}
          </h1>
          <p className="mt-6 text-[16px] font-medium leading-6 text-muted">
            {SERVICES_INTRO.body}
          </p>
        </div>
      </section>

      {/* Service blocks */}
      <section className="border-t border-muted">
        {SERVICES.map((s) => (
          <div key={s.slug} className="border-b border-muted">
            <div className="container-site py-[52px]">
              {/* Title + description */}
              <div className="flex flex-col gap-6 md:flex-row md:gap-24">
                <div className="flex items-center gap-10 md:w-[317px] md:shrink-0">
                  <span className="text-[16px] font-medium text-muted">{s.no}</span>
                  <h2 className="text-[24px] font-medium text-ink">{s.title}</h2>
                </div>
                <p className="max-w-[744px] text-[16px] font-medium leading-6 text-muted">
                  {s.longDesc}
                </p>
              </div>

              {/* Gallery — omitted for services with no imagery yet */}
              {s.gallery && (
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
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

              {/* Capability tags */}
              <div className="mt-9 flex flex-wrap gap-3.5">
                {s.capabilities.map((c) => (
                  <span
                    key={c}
                    className="border border-muted px-5 py-3.5 text-[16px] font-medium uppercase text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9">
                {s.action === "detail" ? (
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-5 rounded-[10px] bg-brand px-[25px] py-[16px] text-[16px] font-medium uppercase text-white transition hover:opacity-90"
                  >
                    Dive deeper
                    <ArrowRight className="size-6" />
                  </Link>
                ) : (
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-5 rounded-[10px] bg-brand px-[25px] py-[16px] text-[16px] font-medium uppercase text-white transition hover:opacity-90"
                  >
                    Request service
                    <ArrowRight className="size-6" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* The Method */}
      <section className="bg-white py-[100px]">
        <div className="container-site">
          <p className="text-[16px] font-medium text-muted">OUR PROCESS</p>
          <h2 className="mt-4 text-[40px] font-bold text-ink sm:text-[60px]">
            The Method
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {METHOD.map((m) => (
              <div key={m.no} className="flex flex-col gap-6 border-t border-muted pt-10">
                <span className="text-[16px] font-medium text-muted">{m.no}</span>
                <h3 className="text-[24px] font-medium text-ink">{m.title}</h3>
                <p className="text-[16px] font-medium leading-5 text-muted">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
