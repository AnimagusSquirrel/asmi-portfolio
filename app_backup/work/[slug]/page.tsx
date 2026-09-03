import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GridContainer } from "@/components/layout/GridContainer";
import { Tag } from "@/components/shared/Tag";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import type { Metadata } from "next";

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Asmi's Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-80 pb-80">
      <GridContainer>
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-8 font-body text-body-lg text-text-secondary hover:text-text-primary transition-colors mb-40"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="grid-12 mb-80">
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-heading text-display text-text-primary mb-24 leading-tight">
              {project.title}
            </h1>
            <p className="font-body text-body-lg text-text-secondary leading-relaxed mb-32">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-32 gap-y-8">
              <Tag>{project.category}</Tag>
              {project.duration && <Tag variant="subtle">{project.duration}</Tag>}
              {project.teamSize && <Tag variant="subtle">{project.teamSize}</Tag>}
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {project.coverImage && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-contrast/5 mb-80">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Project Content — placeholder for linear scroll content */}
        <div className="grid-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-body-lg text-text-secondary leading-relaxed mb-32">
                This is a placeholder for the project&apos;s detailed content. Each project page will be
                a linear scrolling presentation made up of images, text blocks, cards, and other
                layouts.
              </p>

              {/* Content blocks placeholder */}
              <div className="space-y-32">
                <div className="w-full aspect-video rounded-lg bg-surface-contrast/5 flex items-center justify-center">
                  <span className="font-body text-body-lg text-text-disabled">
                    Content block placeholder
                  </span>
                </div>
                <div className="w-full aspect-video rounded-lg bg-surface-contrast/5 flex items-center justify-center">
                  <span className="font-body text-body-lg text-text-disabled">
                    Content block placeholder
                  </span>
                </div>
              </div>
            </div>

            {/* External Links */}
            {project.externalLinks && project.externalLinks.length > 0 && (
              <div className="mt-80 pt-32 border-t border-text-primary/10">
                <h3 className="font-body text-medium font-medium text-text-primary mb-16">
                  External Resources
                </h3>
                <div className="flex flex-wrap gap-16">
                  {project.externalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-8 font-body text-body-lg text-text-primary border border-text-primary/20 hover:bg-state-hover px-16 py-8 rounded-full transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </GridContainer>
    </div>
  );
}
