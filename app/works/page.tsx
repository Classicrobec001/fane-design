import Link from "next/link";
import { PROJECTS } from "@/lib/content";

export const metadata = {
  title: "Our Works",
  description:
    "A curated collection of projects across brand, product, platform design, and development.",
};

export default function WorksPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-24">
        <div className="container-site max-w-[520px]">
          <p className="text-[16px] font-medium text-muted">PORTFOLIO</p>
          <h1 className="mt-6 text-[48px] font-bold leading-tight text-ink sm:text-[60px]">
            Our works.
          </h1>
          <p className="mt-6 text-[16px] font-medium leading-6 text-muted">
            A curated collection of projects across brand, product, platform
            design, and development.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-white py-16">
        <div className="container-site grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/works/${p.slug}`} className="group flex flex-col gap-5">
              <div className="aspect-[396/354] w-full overflow-hidden rounded-lg bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="size-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-medium uppercase text-muted">
                  {p.category}
                </p>
                <p className="text-[24px] font-medium text-ink">{p.name}</p>
              </div>
            </Link>
          ))}

          {/* Partner-with-us card */}
          <Link
            href="https://calendly.com/fanedesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-5"
          >
            <div className="flex aspect-[396/354] w-full items-center justify-center rounded-lg bg-ink px-12">
              <span className="font-serif text-[28px] font-bold text-white sm:text-[32px]">
                Partner with us
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-medium uppercase text-muted">
                Awesome client
              </p>
              <p className="text-[24px] font-medium text-ink">Your Project</p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-b border-white/70 bg-brand">
        <div className="container-site flex flex-col items-start justify-between gap-10 py-24 lg:flex-row lg:items-center">
          <h2 className="max-w-[689px] text-[40px] font-bold leading-tight text-white sm:text-[60px]">
            Have a project in mind?
          </h2>
          <Link
            href="https://calendly.com/fanedesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[230px] flex-col items-center gap-2"
          >
            <span className="text-[24px] font-bold leading-10 text-white">
              PARTNER WITH US
            </span>
            <span className="h-[3px] w-full bg-white" />
          </Link>
        </div>
      </section>
    </>
  );
}
