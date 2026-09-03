"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/lib/site";
import AccentButton from "@/components/shared/AccentButton";
import Icon from "@/components/shared/Icon";
import { cn } from "@/lib/utils";

const BRAND = "Asmi’s 合";

function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;

    const update = () => {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > last + 4) {
        setHidden(true);
      } else if (y < last - 4) {
        setHidden(false);
      }
      last = y;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return hidden;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const hidden = useHideOnScroll() && !menuOpen;

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-5 z-50 transition-transform duration-300 ease-out",
        hidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0",
      )}
    >
      {/* ---------- Desktop: floating pill ---------- */}
      <nav className="mx-auto hidden w-fit items-center gap-16 rounded-lg bg-surface-pops p-4 shadow-[var(--shadow-card)] md:flex">
        <Link href="/" aria-label="Home">
          <AccentButton static>{BRAND}</AccentButton>
        </Link>

        <ul className="flex items-center gap-10">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "flex h-[49px] items-center justify-center gap-1 rounded-[4px] px-6 py-2 font-body text-[18px] text-text-primary transition-colors",
                  isActive(item.href)
                    ? "bg-accent"
                    : "hover:bg-state-hover",
                )}
              >
                {item.label}
                {item.external && <Icon name="arrowUpRight" size={16} />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------- Mobile: brand + hamburger ---------- */}
      <div className="mx-6 flex items-center justify-between md:hidden">
        <Link href="/" aria-label="Home">
          <AccentButton static>{BRAND}</AccentButton>
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex items-center justify-center rounded-lg bg-surface-pops p-2 shadow-[var(--shadow-pop)]"
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      {/* ---------- Mobile drawer ---------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-surface-default md:hidden"
          >
            <div className="mx-6 mt-5 flex items-center justify-between">
              <AccentButton static>{BRAND}</AccentButton>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-lg bg-surface-pops p-2 shadow-[var(--shadow-pop)]"
              >
                <Icon name="close" size={24} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="t-heading inline-flex items-center gap-2 text-text-primary"
                >
                  {item.label}
                  {item.external && <Icon name="arrowUpRight" size={18} />}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 px-10 pb-12">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center rounded-lg bg-accent p-2 text-text-primary"
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
