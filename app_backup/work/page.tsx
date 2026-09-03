"use client";

import { motion } from "motion/react";
import { GridContainer } from "@/components/layout/GridContainer";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="pt-80 pb-80">
      <GridContainer>
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-display text-text-primary mb-80"
        >
          Work
        </motion.h1>

        {/* All Projects — Vertical scroll */}
        <div className="space-y-80">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </GridContainer>
    </div>
  );
}
