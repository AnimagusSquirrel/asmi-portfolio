import type { Metadata } from "next";
import { DM_Sans, Sanchez } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeheButton from "@/components/shared/HeheButton";
import "./globals.css";


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500"],
});

const sanchez = Sanchez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sanchez",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asmi's Portfolio",
  description:
    "I craft functional experiences for products, by diving into the stories behind them.",
  keywords: [
    "Asmi",
    "Portfolio",
    "UX Design",
    "Product Design",
    "IIT Guwahati",
  ],
  openGraph: {
    title: "Asmi's Portfolio",
    description:
      "I craft functional experiences for products, by diving into the stories behind them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sanchez.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <HeheButton />
        </Providers>
      </body>
    </html>
  );
}


