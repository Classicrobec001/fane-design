import { INDUSTRIES, INDUSTRY_TAGS } from "@/lib/content";

export default function Industries() {
  return (
    <section className="bg-brand text-white">
      <div className="container-site grid grid-cols-1 gap-16 py-[87px] lg:grid-cols-2 lg:gap-24">
        {/* Left column */}
        <div className="flex flex-col gap-12 lg:max-w-[448px]">
          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-medium">INDUSTRIES WE SERVE</p>
            <div className="text-[44px] font-bold leading-tight sm:text-[60px]">
              <p>Every industry.</p>
              <p className="font-serif italic">One standard.</p>
            </div>
            <p className="text-[16px] font-medium leading-5">
              We bring deep domain expertise to the industries that are shaping
              the future.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5">
            {INDUSTRY_TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-white/70 px-6 py-3.5 text-[16px] font-medium uppercase text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — industry list */}
        <div className="flex flex-col">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.no}
              className="flex items-center gap-8 border-b border-white/70 py-8"
            >
              <span className="text-[16px] font-medium text-white/70">
                {ind.no}
              </span>
              <span className="text-[24px] font-medium">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
