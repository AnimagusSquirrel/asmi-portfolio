import ProjectCard from "@/components/shared/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="grid-container flex flex-col items-center gap-6 md:gap-20">
      <p className="section-label w-full md:text-center">
        A peek at my work... ( ◡̀_◡́)ᕤ
      </p>

      <div className="flex w-full flex-col gap-[60px] md:gap-[120px]">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
