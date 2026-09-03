"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { GridContainer } from "@/components/layout/GridContainer";
import { playItems, playCategories } from "@/data/play-items";

export default function PlayPage() {
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
          Play
        </motion.h1>

        {/* Play Sections */}
        {playCategories.map((category) => {
          const items = playItems.filter(
            (item) => item.category === category.value
          );
          if (items.length === 0) return null;

          return (
            <section key={category.value} className="mb-80">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-display text-text-primary mb-32"
              >
                {category.label}
              </motion.h2>

              <div className="grid-12">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.1,
                    }}
                    className="col-span-12 md:col-span-4"
                  >
                    {item.externalUrl ? (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <PlayCard item={item} />
                      </a>
                    ) : (
                      <div className="group">
                        <PlayCard item={item} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Empty state for categories with no items */}
        {playItems.length === 0 && (
          <div className="text-center py-80">
            <p className="font-body text-body-lg text-text-disabled">
              Fun works coming soon! :)
            </p>
          </div>
        )}
      </GridContainer>
    </div>
  );
}

function PlayCard({
  item,
}: {
  item: (typeof playItems)[0];
}) {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden bg-surface-contrast/5">
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body text-body-lg text-text-disabled">
            {item.title}
          </span>
        </div>
      )}
      {/* Title overlay on hover */}
      <div className="absolute inset-0 bg-surface-contrast/0 group-hover:bg-surface-contrast/40 transition-colors duration-300 flex items-end p-16">
        <span className="font-body text-body-lg text-text-contrast opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.title}
        </span>
      </div>
    </div>
  );
}
