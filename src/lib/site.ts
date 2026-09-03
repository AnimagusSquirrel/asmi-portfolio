/** Site-wide constants. */
export const site = {
  email: "basakasmi@gmail.com",
  // Resume opens in a new tab (Google Drive).
  resumeUrl:
    "https://drive.google.com/file/d/1L-bu57t7p6HKGhiSTmpIcsX59DxSz2xw/view?usp=sharing",
};

import type { IconName } from "@/components/shared/Icon";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

/** Order per Asmi's spec: LinkedIn · Behance · GitHub · Instagram · Spotify. */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/asmi-basak/", icon: "linkedin" },
  { label: "Behance", href: "https://www.behance.net/asmibasak", icon: "behance" },
  { label: "GitHub", href: "https://github.com/AnimagusSquirrel", icon: "github" },
  { label: "Instagram", href: "https://www.instagram.com/asmi.basak/", icon: "instagram" },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/31f3k3vmyhktnllpx2cs6brqjfga?si=7df9bdc4d98b43e1",
    icon: "spotify",
  },
];
