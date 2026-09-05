import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutSection from "@/components/home/AboutSection";
import ArchivedProjects from "@/components/home/ArchivedProjects";
import PlaySection from "@/components/home/PlaySection";

function ScribbleDivider() {
  return (
    <img
      src="/images/lines/divider-scribble.svg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none w-full md:hidden"
    />
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      <HeroSection />
      <ScribbleDivider />
      <FeaturedProjects />
      <ScribbleDivider />
      <AboutSection />
      <ScribbleDivider />
      <ArchivedProjects />
      <PlaySection />
    </div>
  );
}
