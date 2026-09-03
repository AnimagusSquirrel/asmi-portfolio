import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutSection from "@/components/home/AboutSection";
import ArchivedProjects from "@/components/home/ArchivedProjects";
import PlaySection from "@/components/home/PlaySection";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      <HeroSection />
      <FeaturedProjects />
      <AboutSection />
      <ArchivedProjects />
      <PlaySection />
    </div>
  );
}
