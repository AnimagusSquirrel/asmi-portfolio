"use client";

import { useState } from "react";
import Link from "next/link";

import Icon from "@/components/shared/Icon";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import { cn } from "@/lib/utils";

export default function HeheButton() {
  const [dismissed, setDismissed] = useState(false);
  const hidden = useHideOnScroll();

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-6 z-40 transition-transform duration-300 ease-out md:bottom-6",
        hidden ? "translate-y-[calc(100%+2rem)]" : "translate-y-0",
      )}
    >
      <Link
        href="/hehe"
        className="flex items-center gap-2.5 border-2 border-accent bg-accent p-4 shadow-[var(--shadow-card)] transition-transform duration-150 hover:-translate-y-0.5"
      >
        <span className="t-button text-text-primary">hehe</span>
        <button
          type="button"
          aria-label="Hide this button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDismissed(true);
          }}
          className="flex items-center justify-center rounded-[2.667px] border border-surface-default bg-surface-default p-1 text-text-primary transition-colors hover:bg-state-hover"
        >
          <Icon name="eye" size={12} />
        </button>
      </Link>
    </div>
  );
}
