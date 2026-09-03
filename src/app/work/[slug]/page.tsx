import { notFound } from "next/navigation";
import WipPage from "@/components/shared/WipPage";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!projects.some((p) => p.slug === slug)) notFound();
  return <WipPage />;
}
