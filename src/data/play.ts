/* ============================================================
   Play collage

   7 framed artworks. `x` / `y` are percentages of the collage box
   (top-left anchored), `w` px, `r` rotation deg, `flip` mirrors vertically.
   Images are placeholders until the real artwork is exported.
============================================================ */

export interface PlayPiece {
  id: string;
  image: string;
  alt: string;
  desktop: { x: number; y: number; w: number; r: number; flip?: boolean };
  mobile: { x: number; y: number; w: number; r: number; flip?: boolean };
}

const PLACEHOLDER = "/images/projects/cc.png";

export const playCollage: PlayPiece[] = [
  {
    id: "01",
    image: PLACEHOLDER,
    alt: "Artwork",
    desktop: { x: -6, y: 8, w: 460, r: -5.16 },
    mobile: { x: -18, y: 5, w: 172, r: -5.16 },
  },
  {
    id: "05",
    image: PLACEHOLDER,
    alt: "Artwork",
    desktop: { x: 12, y: 0, w: 382, r: 2.43 },
    mobile: { x: 12, y: -4, w: 138, r: 2.43 },
  },
  {
    id: "02",
    image: PLACEHOLDER,
    alt: "Artwork",
    desktop: { x: 20, y: 12, w: 620, r: -2.83 },
    mobile: { x: 36, y: 5, w: 234, r: -2.83 },
  },
  {
    id: "03",
    image: PLACEHOLDER,
    alt: "Artwork",
    desktop: { x: 42, y: 22, w: 512, r: 176.5, flip: true },
    mobile: { x: 49, y: 48, w: 185, r: 176.5, flip: true },
  },
  {
    id: "04",
    image: PLACEHOLDER,
    alt: "Artwork",
    desktop: { x: 56, y: -2, w: 382, r: -3.18 },
    mobile: { x: -9, y: 48, w: 138, r: -3.18 },
  },
  {
    id: "06",
    image: PLACEHOLDER,
    alt: "Artwork",
    desktop: { x: 67, y: 5, w: 382, r: 5.3 },
    mobile: { x: 22, y: 43, w: 138, r: 5.3 },
  },
  {
    id: "07",
    image: PLACEHOLDER,
    alt: "Artwork",
    desktop: { x: 79, y: 13, w: 560, r: -2.6 },
    mobile: { x: 73, y: 11, w: 205, r: -7.9 },
  },
];
