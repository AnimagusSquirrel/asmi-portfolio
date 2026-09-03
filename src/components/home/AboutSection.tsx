import Image from "next/image";

import { bio, experiences } from "@/data/about";
import AccentButton from "@/components/shared/AccentButton";

/**
 * Desktop: two columns — bio (left) + experience timeline (right),
 *          accent CTA anchored bottom-left.
 * Mobile:  heading → bio → experience → doodle note → CTA (stacked).
 */
export default function AboutSection() {
  return (
    <section className="grid-container flex flex-col gap-6 md:gap-20">
      <p className="section-label">A little about me o(˵ •̀ ᴗ - ˵ )</p>

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-6">
        {/* Bio */}
        <div className="flex flex-col items-end gap-2 md:w-[708px] md:gap-3">
          {[bio.intro, bio.curiosity, bio.personal].map((para, i) => (
            <p key={i} className="t-body w-full text-text-primary">
              {para}
            </p>
          ))}
        </div>

        {/* Experience */}
        <ul className="flex flex-col gap-5 md:w-[708px] md:gap-10">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${i}`} className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="t-body-lg text-text-primary">{exp.company}</h3>
                  <p className="t-body text-text-secondary">
                    {exp.role}
                    {exp.period ? `, ${exp.period}` : ""}
                  </p>
                </div>

                {exp.logo && (
                  <div className="hidden shrink-0 rounded-lg bg-surface-pops p-2 md:block">
                    <div className="relative h-14 w-[85px]">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        sizes="85px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="h-px w-full bg-border-subtle" />
            </li>
          ))}
        </ul>
      </div>

      {/* Doodle note (mobile only) */}
      <img
        src="/images/hero/about-doodle-note.svg"
        alt=""
        aria-hidden="true"
        className="mx-auto w-[240px] md:hidden"
      />

      <div className="flex md:justify-start">
        <AccentButton href="/about">More about me!</AccentButton>
      </div>
    </section>
  );
}
