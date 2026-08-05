import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { WORKS } from "@/lib/content";

export default function Works() {
  return (
    <section id="works" className="bg-white py-[30px]">
      <div className="container-site">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <h2 className="text-[32px] font-semibold text-ink sm:text-[48px]">
            Selected Works
          </h2>
          <div className="hidden items-center gap-7 sm:flex">
            <button
              aria-label="Previous"
              className="flex size-[50px] items-center justify-center rounded-full border border-ink/20 text-ink transition hover:bg-ink hover:text-white"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              aria-label="Next"
              className="flex size-[50px] items-center justify-center rounded-full border border-ink/20 text-ink transition hover:bg-ink hover:text-white"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKS.map((w) => (
            <Link key={w.title} href={w.href} className="group flex flex-col gap-5">
              <div className="aspect-[396/354] w-full overflow-hidden rounded-lg bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.title}
                  className="size-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-[16px] font-medium leading-5 text-muted">
                {w.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <SecondaryButton href="/works">View all projects</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
