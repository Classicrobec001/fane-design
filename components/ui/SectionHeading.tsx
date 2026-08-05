type Props = {
  /** Small line above the title */
  eyebrow: string;
  /** Large section title */
  title: string;
  className?: string;
  dark?: boolean;
};

/** Centered eyebrow + big title used across sections. */
export default function SectionHeading({
  eyebrow,
  title,
  className = "",
  dark = false,
}: Props) {
  return (
    <div
      className={`mx-auto flex max-w-[1240px] flex-col items-center gap-5 text-center ${
        dark ? "text-white" : "text-ink"
      } ${className}`}
    >
      <p className="text-[24px] font-medium leading-10">{eyebrow}</p>
      <h2 className="max-w-[1134px] text-[32px] font-semibold leading-tight sm:text-[40px] lg:text-[48px]">
        {title}
      </h2>
    </div>
  );
}
