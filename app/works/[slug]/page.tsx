import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/content";

// Pages that have a composed "Next Project" banner image at
// /assets/works/<slug>/next.png (text baked in). Others fall back to
// the live-rendered banner. Portfolio (last) shows the "Your Project" card.
const NEXT_IMAGE_SLUGS = new Set([
  "laferay",
  "zenvoy",
  "moderno",
  "healthco",
  "ectinum",
  "food-rush",
  "bankie",
  "aceplayhouse",
]);

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  return {
    title: project
      ? `${project.name} — Fane Designs & Development`
      : "Project — Fane Designs & Development",
  };
}

function CtaBand() {
  return (
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
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();
  const project = PROJECTS[index];
  const cs = project.caseStudy;

  // Placeholder for projects whose case study isn't built yet
  if (!cs) {
    return (
      <>
        <section className="bg-white pt-24">
          <div className="container-site">
            <Link
              href="/works"
              className="mb-10 inline-flex items-center gap-2 text-[16px] font-medium text-muted transition hover:text-brand"
            >
              <ArrowLeft className="size-5" /> All works
            </Link>
            <p className="text-[16px] font-medium uppercase text-muted">
              {project.category}
            </p>
            <h1 className="mt-4 text-[48px] font-bold leading-tight text-ink sm:text-[60px]">
              {project.name}
            </h1>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container-site">
            <div className="aspect-[1240/700] w-full overflow-hidden rounded-lg bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.name} className="size-full object-cover" />
            </div>
          </div>
        </section>
        <CtaBand />
      </>
    );
  }

  const isLast = index === PROJECTS.length - 1;
  const next = isLast ? null : PROJECTS[index + 1];

  return (
    <>
      {/* Hero — composed banner (tag, title, meta baked into the image) */}
      <section className="bg-ink">
        <div className="mx-auto max-w-site">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cs.hero}
            alt={`${project.name} — ${cs.tag}`}
            className="block h-auto w-full"
          />
        </div>
      </section>

      {/* Sections */}
      {cs.sections.map((section, i) => {
        if (section.type === "text") {
          return (
            <section key={i} className="bg-white py-16">
              <div className="container-site flex flex-col gap-6">
                <p className="text-[16px] font-medium uppercase text-muted">{section.eyebrow}</p>
                <h2 className="text-[40px] font-semibold text-ink sm:text-[48px]">{section.title}</h2>
                <p className="max-w-[1240px] text-[24px] font-medium leading-10 text-ink">{section.body}</p>
              </div>
            </section>
          );
        }
        if (section.type === "image") {
          return (
            <section key={i} className="bg-white py-10">
              <div className="container-site">
                <div className="aspect-[1240/700] w-full overflow-hidden rounded-lg bg-neutral-100 shadow-[0px_8px_12px_rgba(0,0,0,0.1)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={section.src} alt="" className="size-full object-cover" />
                </div>
              </div>
            </section>
          );
        }
        if (section.type === "split") {
          return (
            <section key={i} className="bg-white py-16">
              <div className="container-site flex flex-col items-center gap-16 lg:flex-row">
                <div className="flex flex-col gap-6 lg:w-[608px] lg:shrink-0">
                  <p className="text-[16px] font-medium uppercase text-muted">{section.eyebrow}</p>
                  <h2 className="text-[40px] font-semibold text-ink sm:text-[48px]">{section.title}</h2>
                  <p className="text-[24px] font-medium leading-10 text-muted">{section.body}</p>
                </div>
                <div className="h-[400px] w-full overflow-hidden rounded-lg bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={section.src} alt="" className="size-full object-cover" />
                </div>
              </div>
            </section>
          );
        }
        // splitText
        return (
          <section key={i} className="bg-white py-16">
            <div className="container-site flex flex-col gap-10 lg:flex-row lg:gap-40">
              <div className="flex flex-col gap-6 lg:w-[461px] lg:shrink-0">
                <p className="text-[16px] font-medium uppercase text-muted">{section.eyebrow}</p>
                <h2 className="text-[40px] font-semibold text-ink sm:text-[48px]">{section.title}</h2>
              </div>
              <p className="max-w-[617px] text-[24px] font-medium leading-10 text-muted">{section.body}</p>
            </div>
          </section>
        );
      })}

      {/* Next project */}
      {next && NEXT_IMAGE_SLUGS.has(project.slug) ? (
        // Composed banner (label + next project's name/category baked into image)
        <Link href={`/works/${next.slug}`} className="block bg-ink transition hover:opacity-95">
          <div className="mx-auto max-w-site">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/works/${project.slug}/next.png`}
              alt={`Next project — ${next.name}`}
              className="block h-auto w-full"
            />
          </div>
        </Link>
      ) : next ? (
        // Live fallback (used where no composed banner was provided)
        <Link href={`/works/${next.slug}`} className="group relative block bg-ink text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={next.image}
            alt={next.name}
            className="absolute inset-0 size-full object-cover opacity-40 transition group-hover:opacity-50"
          />
          <div className="container-site relative flex flex-col items-center gap-9 py-40 text-center">
            <p className="text-[16px] font-medium uppercase text-white/70">Next project</p>
            <p className="text-[40px] font-bold uppercase sm:text-[60px]">{next.name}</p>
            <p className="text-[16px] font-medium uppercase text-white/70">{next.category}</p>
          </div>
        </Link>
      ) : (
        <Link
          href="https://calendly.com/fanedesigns"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block bg-ink text-white"
        >
          <div className="container-site relative flex flex-col items-center gap-9 py-40 text-center">
            <p className="text-[16px] font-medium uppercase text-white/70">Next project</p>
            <p className="text-[40px] font-bold sm:text-[60px]">Your Project</p>
            <p className="text-[16px] font-medium uppercase text-white/70">Awesome client</p>
          </div>
        </Link>
      )}

      <CtaBand />
    </>
  );
}
