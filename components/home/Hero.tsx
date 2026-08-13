import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Left-aligned and full-bleed CTA on phones; centred from lg up. */}
      <div className="container-site flex flex-col items-stretch gap-8 py-16 text-left lg:items-center lg:gap-12 lg:py-[100px] lg:text-center">
        <h1 className="max-w-[1022px] text-[36px] font-bold leading-tight text-ink sm:text-[44px] lg:text-[56px]">
          Premium design &amp; development agency delivering{" "}
          <span className="text-brand">top-tier digital experiences.</span>
        </h1>
        <p className="max-w-[875px] text-[16px] font-medium leading-7 text-muted sm:text-[18px] sm:leading-8">
          Designing and building the next generation of digital businesses. We
          create beautiful designs, build websites and applications that
          transform your ideas into globally resonant digital realities.
        </p>
        <PrimaryButton
          href="https://calendly.com/fanedesigns"
          variant="brand"
          className="w-full lg:w-auto"
        >
          Start Your Project
        </PrimaryButton>
      </div>
    </section>
  );
}
