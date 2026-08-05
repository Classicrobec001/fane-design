import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="container-site flex flex-col items-center gap-14 py-[120px] text-center lg:py-[178px]">
        <h1 className="max-w-[1022px] text-[36px] font-bold leading-tight text-white sm:text-[48px] lg:text-[60px]">
          Premium design &amp; development agency creating beautiful designs and
          smart digital solutions
        </h1>
        <p className="max-w-[875px] text-[18px] font-medium leading-9 text-white sm:text-[24px] sm:leading-10">
          Designing and building the next generation of digital businesses. We
          design and build websites, mobile applications that transform your
          visions.
        </p>
        <PrimaryButton href="https://calendly.com/fanedesigns">
          Let&apos;s Begin
        </PrimaryButton>
      </div>
    </section>
  );
}
