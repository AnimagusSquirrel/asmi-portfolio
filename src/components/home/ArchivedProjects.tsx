import { getArchiveProjects } from "@/data/projects";
import AccentButton from "@/components/shared/AccentButton";

/**
 * Desktop: 2-column grid of title + blurb, "See More" anchored bottom-right.
 * Mobile:  single-column list, "See More" below.
 */
export default function ArchivedProjects() {
  const projects = getArchiveProjects();

  return (
    <section className="grid-container flex flex-col gap-6 md:gap-20">
      <p className="section-label">Archived works (⊙ _ ⊙ )</p>

      <ul className="grid grid-cols-1 gap-9 md:grid-cols-2 md:gap-x-6 md:gap-y-20">
        {projects.map((project) => (
          <li key={project.slug} className="flex flex-col gap-2">
            <h3 className="t-body-lg text-text-primary">{project.title}</h3>
            <p className="t-body text-text-secondary">{project.description}</p>
            <div className="mt-1 h-px w-full bg-border-subtle" />
          </li>
        ))}
      </ul>

      <div className="flex md:justify-end">
        <AccentButton href="/work">See More 合</AccentButton>
      </div>
    </section>
  );
}
