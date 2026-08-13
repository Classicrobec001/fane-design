import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/lib/content";

export function generateStaticParams() {
  return SERVICES.filter((s) => s.action === "detail").map((s) => ({
    slug: s.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  return {
    title: service ? service.title : "Service",
  };
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3.5">
      {items.map((t) => (
        <span
          key={t}
          className="border border-muted px-5 py-3.5 text-[16px] font-medium uppercase text-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service || service.action !== "detail") notFound();

  const detail = service.detail;

  return (
    <>
      {/* Header */}
      <section className="bg-white pt-24">
        <div className="container-site max-w-[520px]">
          <p className="text-[16px] font-medium text-muted">SERVICES / {service.no}</p>
          <h1 className="mt-4 text-[48px] font-bold leading-tight text-ink sm:text-[60px]">
            {service.title}
          </h1>
          <p className="mt-4 text-[16px] font-medium leading-6 text-muted">
            {service.desc}
          </p>
        </div>
      </section>

      {/* Overview + full capabilities */}
      <section className="border-b border-muted bg-white py-[52px]">
        <div className="container-site flex flex-col gap-9">
          <p className="text-[16px] font-medium text-muted">OVERVIEW</p>
          <p className="max-w-[1240px] text-[24px] font-medium leading-10 text-ink">
            {service.longDesc}
          </p>
          <p className="text-[16px] font-medium text-ink">FULL CAPABILITIES</p>
          <Tags items={service.capabilities} />
        </div>
      </section>

      {/* Deliverables */}
      {detail && (
        <section className="bg-white py-[52px]">
          <div className="container-site flex flex-col gap-9">
            <p className="text-[16px] font-medium text-muted">WHAT YOU GET</p>
            <h2 className="text-[40px] font-semibold text-ink sm:text-[48px]">
              Deliverables
            </h2>
            <Tags items={detail.deliverables} />
          </div>
        </section>
      )}

      {/* Related work */}
      {detail && (
        <section className="bg-white py-[52px]">
          <div className="container-site flex flex-col gap-9">
            <p className="text-[16px] font-medium text-muted">RELATED WORK</p>
            <h2 className="text-[40px] font-semibold text-ink sm:text-[48px]">
              {service.title} in Action
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {detail.relatedWork.map((w) => (
                <div key={w.name} className="flex flex-col gap-5">
                  <div className="aspect-[396/354] w-full overflow-hidden rounded-lg bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.image}
                      alt={w.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] font-medium uppercase text-muted">
                      {w.category}
                    </p>
                    <p className="text-[24px] font-medium text-ink">{w.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {detail && (
        <section className="bg-brand text-white">
          <div className="container-site relative pb-24 pt-[52px]">
            {/* Four markers pinned to the corners of the content box. */}
            <span className="absolute left-[var(--content-x)] top-[52px] size-2.5 bg-white" />
            <span className="absolute right-[var(--content-x)] top-[52px] size-2.5 bg-white" />
            <span className="absolute bottom-24 left-[var(--content-x)] size-2.5 bg-white" />
            <span className="absolute bottom-24 right-[var(--content-x)] size-2.5 bg-white" />

            {/* Cleared past the top-left marker. */}
            <p className="pl-[18px] text-[24px] font-semibold sm:text-[28px]">
              {detail.testimonial.brand}
            </p>

            {/* The quote column sits inset from the brand name, not flush left. */}
            <div className="mt-10 flex flex-col gap-10 lg:mt-[52px] lg:flex-row lg:items-center lg:gap-[153px] lg:pl-[250px]">
              <div className="flex flex-col gap-10 lg:w-[605px] lg:shrink-0 lg:gap-[100px]">
                <p className="text-[20px] font-medium leading-9 sm:text-[24px] sm:leading-10">
                  “{detail.testimonial.quote}”
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] font-medium">{detail.testimonial.name}</p>
                  <p className="text-[14px] text-white/90">{detail.testimonial.role}</p>
                </div>
              </div>
              {/* Centred on phones so the corner markers don't land on it. */}
              <div className="mx-auto h-[264px] w-[212px] shrink-0 overflow-hidden bg-white/10 lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={detail.testimonial.image}
                  alt={detail.testimonial.name}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA (light variant) */}
      <section className="bg-white">
        <div className="container-site flex flex-col items-center gap-10 py-24 text-center">
          <p className="text-[24px] font-medium leading-10 text-muted">Ready?</p>
          <h2 className="max-w-[1022px] text-[40px] font-bold leading-tight text-ink sm:text-[60px]">
            Let&apos;s build something iconic.
          </h2>
          <Link
            href="https://calendly.com/fanedesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[230px] flex-col items-center gap-2"
          >
            <span className="text-[24px] font-bold leading-10 text-ink">
              PARTNER WITH US
            </span>
            <span className="h-[3px] w-full bg-ink" />
          </Link>
        </div>
      </section>
    </>
  );
}
