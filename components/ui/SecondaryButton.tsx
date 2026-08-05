import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

/** Outlined button — blue border and label on white. */
export default function SecondaryButton({
  href,
  children,
  external = false,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-between gap-4 rounded-[10px] border border-brand bg-white px-[25px] py-[18px] text-[16px] font-medium uppercase tracking-wide text-brand transition hover:bg-brand hover:text-white ${className}`}
    >
      <span className="leading-5">{children}</span>
      <ArrowRight className="size-6" strokeWidth={2} />
    </Link>
  );
}
