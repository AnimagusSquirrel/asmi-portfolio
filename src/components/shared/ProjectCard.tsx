import Link from "next/link";
import type { Project } from "@/data/projects";

/**
 * Featured project card.
 * Desktop: media left (830px), text right — whole card is one link.
 * Mobile: media on top with a "Case Study" badge, text stacked below.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="w-full">
      <Link
        href={`/work/${project.slug}`}
        className="project-row group block md:flex md:items-center md:gap-6"
      >
        {/* Media */}
        <div className="project-media relative h-[195px] w-full overflow-hidden rounded-[3px] bg-text-secondary shadow-[var(--shadow-card)] md:h-[468px] md:rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-3 right-3 inline-flex h-10 items-center gap-2 whitespace-nowrap border border-surface-pops bg-accent px-[11px] t-button text-text-primary shadow-[var(--shadow-pop)] md:hidden">
            Case Study ⪼
          </span>
        </div>

        {/* Content */}
        <div className="project-content mt-5 flex flex-col gap-3 md:mt-0 md:gap-10 md:py-6">
          <h3 className="t-subheading text-text-primary">{project.title}</h3>

          <div className="flex flex-col gap-3 md:items-end md:gap-6">
            <p className="t-body w-full text-text-secondary">
              {project.description}
            </p>
            <div className="flex w-full items-center justify-between whitespace-nowrap t-body uppercase text-text-primary">
              <span>{project.role}</span>
              <span>{project.product}</span>
              <span>{project.duration}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
