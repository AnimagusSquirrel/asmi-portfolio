"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  heroGreeting,
  heroSubtitle,
  heroCallout,
  heroIllustration,
  heroDoodles,
  type HeroDoodle,
} from "@/data/hero";
import { cn } from "@/lib/utils";

function Doodle({
  doodle,
  variant,
  constraintsRef,
}: {
  doodle: HeroDoodle;
  variant: "mobile" | "desktop";
  constraintsRef: React.RefObject<HTMLElement | null>;
}) {
  const pos = variant === "mobile" ? doodle.mobile : doodle.desktop;
  if (!pos) return null;

  return (
    <motion.img
      src={doodle.src}
      alt={doodle.alt}
      draggable={false}
      drag
      dragConstraints={constraintsRef}
      dragMomentum={false}
      dragElastic={0.15}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 1.1 }}
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        width: pos.w,
        rotate: `${pos.r}deg`,
      }}
      className={cn(
        "absolute z-[6] cursor-grab touch-none select-none active:cursor-grabbing",
        variant === "mobile" ? "md:hidden" : "hidden md:block",
      )}
    />
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showCallout, setShowCallout] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden h-[680px] md:h-[860px]"
    >
      {/* ---------- Hand-drawn lines ---------- */}
      <img
        src="/images/lines/hero-lines-mobile.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[64px] w-full md:hidden"
      />
      <img
        src="/images/lines/hero-line-desktop.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[96px] left-1/2 hidden w-[1563px] max-w-none -translate-x-1/2 md:block"
      />

      {/* ---------- Doodles ---------- */}
      {heroDoodles.map((d) => (
        <Doodle
          key={`m-${d.id}`}
          doodle={d}
          variant="mobile"
          constraintsRef={sectionRef}
        />
      ))}
      {heroDoodles.map((d) => (
        <Doodle
          key={`d-${d.id}`}
          doodle={d}
          variant="desktop"
          constraintsRef={sectionRef}
        />
      ))}

      {/* ---------- Copy ---------- */}
      <div className="relative z-10 mx-auto flex flex-col items-center gap-5 px-6 pt-24 text-center md:w-[741px] md:pt-[180px]">
        <p className="t-heading text-[28px] leading-[28px] text-text-primary md:text-[40px] md:leading-[52px]">
          {heroGreeting}
        </p>

        <p className="t-heading text-[20px] leading-[28px] md:text-[40px] md:leading-[52px]">
          {heroSubtitle.map((frag, i) => (
            <span
              key={i}
              className={
                frag.emphasis
                  ? "text-text-secondary md:text-text-primary"
                  : "text-text-secondary"
              }
            >
              {frag.text}
            </span>
          ))}
        </p>
      </div>

      {/* ---------- Illustration + callout ---------- */}
      <div
        className="absolute bottom-0 left-1/2 z-[5] w-[300px] -translate-x-1/2 md:w-[555px]"
        onMouseEnter={() => setShowCallout(true)}
        onMouseLeave={() => setShowCallout(false)}
        onClick={() => setShowCallout((v) => !v)}
      >
        <img
          src={heroIllustration.src}
          alt={heroIllustration.alt}
          draggable={false}
          className="w-full select-none"
        />

        <AnimatePresence>
          {showCallout && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 6 }}
              transition={{ duration: 0.18 }}
              className="absolute right-[-8%] top-[8%] z-20 max-w-[234px]"
            >
              <span className="absolute -left-3 -top-3 h-4 w-4 rounded-full bg-accent" />
              <span className="absolute -left-6 top-2 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="t-body rounded-[20px] border border-text-primary bg-surface-pops p-5 text-text-secondary">
                {heroCallout}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
