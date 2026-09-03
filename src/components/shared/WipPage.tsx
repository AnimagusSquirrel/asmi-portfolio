import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Playful placeholder for pages that aren't built yet.
 * Meant to feel intentional, not broken.
 */
export default function WipPage() {
  return (
    <div className="grid-container flex min-h-[80vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-heading text-heading text-text-primary">Oii 👀</p>

      <p className="text-body text-text-secondary max-w-[36ch]">
        This page is currently under construction. See you later :)
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-body">
        <Link
          href="/"
          className="rounded px-4 py-2 text-text-primary transition-colors hover:bg-state-hover"
        >
          ← Home
        </Link>
        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded px-4 py-2 text-text-primary transition-colors hover:bg-state-hover"
        >
          Resume
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded px-4 py-2 text-text-primary transition-colors hover:bg-state-hover"
        >
          Email
        </a>
      </div>
    </div>
  );
}
