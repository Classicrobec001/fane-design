import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CTA() {
  return (
    <section className="border-b border-white bg-brand">
      <div className="container-site flex flex-col items-center gap-10 py-24 text-center">
        <p className="text-[20px] font-medium leading-10 text-white/70 sm:text-[24px]">
          Ready?
        </p>
        <h2 className="max-w-[1022px] text-[40px] font-bold leading-tight text-white sm:text-[60px]">
          Let&apos;s build something iconic.
        </h2>
        <PrimaryButton href="https://calendly.com/fanedesigns" showArrow={false}>
          Book A Call
        </PrimaryButton>
      </div>
    </section>
  );
}
