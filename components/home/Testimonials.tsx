import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-white py-[69px]">
      <div className="container-site">
        <SectionHeading
          eyebrow="Anything less than the best is a felony."
          title="A word from recent clients"
        />

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col gap-14">
              <p className="text-[20px] font-medium leading-9 text-ink sm:text-[24px] sm:leading-10">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-10">
                <div className="size-[100px] shrink-0 overflow-hidden rounded-full bg-neutral-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="font-serif text-[28px] font-bold text-ink sm:text-[32px]">
                    {t.name}
                  </p>
                  <p className="text-[20px] font-medium text-muted sm:text-[24px]">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
