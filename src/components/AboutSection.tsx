import { motion } from "motion/react";
import { ABOUT_CONTENT } from "@/src/data/agencyData";
import { SafeImage } from "@/src/components/SafeImage";

export function AboutSection() {
  return (
    <section id="sobre" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          {/* Studio Visual */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border-hairline bg-surface shadow-card">
              <SafeImage
                src={ABOUT_CONTENT.image}
                alt={ABOUT_CONTENT.imageAlt}
                fallbackTitle="Estúdio Lethos Serviços Digitais"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-media-scrim opacity-40"
              />
            </div>
          </motion.div>

          {/* Narrative & Competitive Differentials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-sm font-medium text-primary-text">
                {ABOUT_CONTENT.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
                {ABOUT_CONTENT.headline}
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-silver">
                {ABOUT_CONTENT.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {ABOUT_CONTENT.differentials.map((item) => (
                <div key={item.title} className="border-t border-border pt-4">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
