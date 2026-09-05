import Link from "next/link";

import { playCollage } from "@/data/play";
import AccentButton from "@/components/shared/AccentButton";
import { cn } from "@/lib/utils";

/**
 * Desktop: wide panoramic collage that bleeds past the content column.
 * Mobile:  recomposed (tighter) collage + a "Play" CTA next to the heading.
 * Collage images are placeholders until the real artwork is exported.
 */
export default function PlaySection() {
  return (
    <section className="flex flex-col gap-8 overflow-x-clip md:gap-20">
      <div className="grid-container flex items-start justify-between gap-4">
        <p className="section-label max-w-[16rem] md:max-w-none">
          I like playing around ¯\_(ツ)_/¯
        </p>
        <Link href="/play" className="shrink-0">
          <AccentButton static>Play ⪼</AccentButton>
        </Link>
      </div>

      <div className="relative mx-auto h-[347px] w-full max-w-[420px] md:h-[560px] md:max-w-[1600px]">
        {playCollage.map((piece) => (
          <PlayTile key={piece.id} piece={piece} />
        ))}
      </div>
    </section>
  );
}

function PlayTile({ piece }: { piece: (typeof playCollage)[number] }) {
  return (
    <>
      {/* mobile */}
      <img
        src={piece.image}
        alt={piece.alt}
        style={{
          left: `${piece.mobile.x}%`,
          top: `${piece.mobile.y}%`,
          width: piece.mobile.w,
          transform: `rotate(${piece.mobile.r}deg)${piece.mobile.flip ? " scaleY(-1)" : ""}`,
        }}
        className={cn(
          "absolute border-2 border-surface-pops object-cover shadow-[var(--shadow-card)] md:hidden",
        )}
      />
      {/* desktop */}
      <img
        src={piece.image}
        alt={piece.alt}
        style={{
          left: `${piece.desktop.x}%`,
          top: `${piece.desktop.y}%`,
          width: piece.desktop.w,
          transform: `rotate(${piece.desktop.r}deg)${piece.desktop.flip ? " scaleY(-1)" : ""}`,
        }}
        className="absolute hidden border-4 border-surface-pops object-cover shadow-[var(--shadow-card)] md:block"
      />
    </>
  );
}
