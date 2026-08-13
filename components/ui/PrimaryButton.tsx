import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  showArrow?: boolean;
  /** "light" sits on the blue sections; "brand" sits on white ones. */
  variant?: "light" | "brand";
  className?: string;
};

const VARIANTS = {
  light: "bg-white text-brand",
  brand: "bg-brand text-white",
};

/** Pill button — the design's primary CTA. */
export default function PrimaryButton({
  href,
  children,
  external = true,
  showArrow = true,
  variant = "light",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-[21px] rounded-[10px] px-[25px] py-[16px] text-[16px] font-medium transition hover:opacity-90 ${VARIANTS[variant]} ${className}`}
    >
      <span className="leading-5">{children}</span>
      {showArrow && <ArrowUpRight className="size-6" strokeWidth={2} />}
    </Link>
  );
}
