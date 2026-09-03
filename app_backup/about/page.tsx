"use client";

import { motion } from "motion/react";
import { GridContainer } from "@/components/layout/GridContainer";
import { Section } from "@/components/layout/Section";
import { bio, experiences, education, skills, services } from "@/data/about";

export default function AboutPage() {
  return (
    <div className="pt-80 pb-80">
      <GridContainer>
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-display text-text-primary mb-40"
        >
          About
        </motion.h1>

        {/* Bio Section */}
        <div className="grid-12 mb-80">
          <div className="col-span-12 md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <p className="font-body text-body-lg text-text-primary leading-relaxed mb-16">
                {bio.intro}
              </p>
              <p className="font-body text-body-lg text-text-secondary leading-relaxed mb-16">
                {bio.curiosity}
              </p>
              <p className="font-body text-body-lg text-text-secondary leading-relaxed">
                {bio.personal}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-80"
        >
          <h2 className="font-heading text-display text-text-primary mb-32">
            Education
          </h2>
          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="py-16 border-t border-text-primary/10"
                >
                  <h3 className="font-body text-medium font-medium text-text-primary">
                    {edu.institution}
                  </h3>
                  <p className="font-body text-body-lg text-text-secondary mt-4">
                    {edu.degree} · {edu.period}
                  </p>
                  {edu.description && (
                    <p className="font-body text-body-lg text-text-disabled mt-4">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-80"
        >
          <h2 className="font-heading text-display text-text-primary mb-32">
            Experience
          </h2>
          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="py-16 border-t border-text-primary/10"
                >
                  <h3 className="font-body text-medium font-medium text-text-primary">
                    {exp.company}
                  </h3>
                  <p className="font-body text-body-lg text-text-secondary mt-4">
                    {exp.role} · {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-80"
        >
          <h2 className="font-heading text-display text-text-primary mb-32">
            Skills
          </h2>
          <div className="flex flex-wrap gap-12">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-body text-body-lg text-text-primary border border-text-primary/15 px-16 py-8 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading text-display text-text-primary mb-32">
            Design Services
          </h2>
          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              {services.map((service) => (
                <div
                  key={service}
                  className="py-16 border-t border-text-primary/10"
                >
                  <span className="font-body text-body-lg text-text-primary">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </GridContainer>
    </div>
  );
}
