"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/lib/site";
import AccentButton from "@/components/shared/AccentButton";
import Icon from "@/components/shared/Icon";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import { cn } from "@/lib/utils";

const BRAND = "Asmi’s 合";

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
        "md:sticky md:inset-x-auto md:top-6 md:mt-6 md:mb-9",
        hidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0",
      )}
    >
      {/* ---------- Desktop: floating pill ---------- */}
      <nav className="nav-pill mx-auto hidden w-fit items-center rounded-lg bg-surface-pops shadow-[var(--shadow-card)] md:flex">
        <ul className="nav-links flex items-center">
          <li>
            <Link
              href="/"
              aria-label="Home"
              className={cn(
                "nav-link flex items-center justify-center gap-1 rounded-[4px] font-heading text-text-primary transition-colors",
                isActive("/") ? "bg-accent" : "hover:bg-state-hover",
              )}
            >
              {BRAND}
            </Link>
          </li>
          {navigationItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "nav-link flex items-center justify-center gap-1 rounded-[4px] font-body text-text-primary transition-colors",
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
