/* ============================================================
   Hero copy
============================================================ */

export const heroGreeting = "Hello! I’m Asmi";

/**
 * Subtitle. `emphasis` fragments render in text-primary, the rest in
 * text-secondary (desktop). Mobile renders the whole line in secondary.
 */
export const heroSubtitle = [
  { text: "I am a designer creating ", emphasis: false },
  { text: "experiences ", emphasis: true },
  { text: "by ", emphasis: false },
  { text: "diving into the stories", emphasis: true },
  { text: " behind them.", emphasis: false },
];

export const heroCallout = "Oii, click around and get to know me.";

export const heroIllustration = {
  src: "/images/hero/me.svg",
  alt: "Illustration of Asmi",
};

/* ============================================================
   Hero doodles

   Positions are percentages of the hero box (x = left edge, y = top edge),
   width in px. `mobile: null` means the doodle is hidden below md.
   Desktop percentages are relative to the 1440px content box
   (container-desktop, which is locked to exactly 1440px whenever
   desktop doodles are visible — see the 1600px threshold in
   HeroSection). Draggable + hover handled in the component.
============================================================ */

export interface HeroDoodle {
  id: string;
  src: string;
  alt: string;
  desktop: { x: number; y: number; w: number; r: number };
  mobile: { x: number; y: number; w: number; r: number } | null;
}

export const heroDoodles: HeroDoodle[] = [
  {
    id: "headphones",
    src: "/images/hero/headphones.svg",
    alt: "Headphones doodle",
    desktop: { x: 17.29, y: 6.89, w: 208, r: -12 },
    mobile: null,
  },
  {
    id: "id-tag",
    src: "/images/hero/id_tag.svg",
    alt: "ID tag doodle",
    desktop: { x: -0.14, y: 9.13, w: 177, r: 8 },
    mobile: { x: 66, y: 25, w: 100, r: 16 },
  },
  {
    id: "scribbles",
    src: "/images/hero/scribbles.svg",
    alt: "Scribbles doodle",
    desktop: { x: 74.1, y: 0, w: 179, r: 4 },
    mobile: null,
  },
  {
    id: "chocolate",
    src: "/images/hero/chocolate.svg",
    alt: "Chocolate doodle",
    desktop: { x: 89.44, y: 9.13, w: 128, r: -15 },
    mobile: null,
  },
  {
    id: "fish",
    src: "/images/hero/fish.svg",
    alt: "Fish doodle",
    desktop: { x: -4.31, y: 39.22, w: 138, r: -8 },
    mobile: { x: 2, y: 20, w: 84, r: 21 },
  },
  {
    id: "clubs",
    src: "/images/hero/clubs.svg",
    alt: "Clubs doodle",
    desktop: { x: 76.39, y: 61.23, w: 162, r: 10 },
    mobile: { x: 70, y: 48, w: 66, r: -14 },
  },
  {
    id: "aoko",
    src: "/images/hero/aoko.svg",
    alt: "Aoko doodle",
    desktop: { x: 93.13, y: 46.11, w: 150, r: -6 },
    mobile: { x: 39, y: 5, w: 70, r: 16 },
  },
  {
    id: "infographics",
    src: "/images/hero/infographics.svg",
    alt: "Infographics doodle",
    desktop: { x: 9.375, y: 73.2, w: 170, r: 8 },
    mobile: { x: 5, y: 42, w: 95, r: -32 },
  },
];
