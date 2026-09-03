import { site } from "@/lib/site";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Play", href: "/play" },
  { label: "About", href: "/about" },
  { label: "Resume", href: site.resumeUrl, external: true },
];
