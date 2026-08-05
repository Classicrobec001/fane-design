import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
};

/** White pill button with blue label — the design's primary CTA. */
export default function PrimaryButton({
  href,
  children,
  external = true,
  showArrow = true,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-[21px] rounded-[10px] bg-white px-[25px] py-[16px] text-[16px] font-medium text-brand transition hover:opacity-90 ${className}`}
    >
      <span className="leading-5">{children}</span>
      {showArrow && <ArrowUpRight className="size-6" strokeWidth={2} />}
    </Link>
  );
}
