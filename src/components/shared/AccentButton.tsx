import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccentButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  /** Render as a plain label (no link/button) — e.g. the nav brand. */
  static?: boolean;
}

/**
 * The lime CTA chip used across the site ("More about me!", "See More",
 * "Case Study", the nav brand). Sanchez, sharp corners, accent fill.
 * Mobile: 40px tall with a soft shadow. Desktop: taller, 2px border, no shadow.
 */
export default function AccentButton({
  children,
  href,
  external,
  className,
  static: isStatic,
}: AccentButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "bg-accent text-text-primary t-button",
    "border border-accent shadow-[var(--shadow-pop)] h-10 px-[11px]",
    "md:border-2 md:h-auto md:px-4 md:py-4 md:shadow-none",
    "transition-transform duration-150 hover:-translate-y-0.5",
    className,
  );

  if (isStatic || !href) {
    return <span className={classes}>{children}</span>;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
