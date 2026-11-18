import { motion } from "motion/react";
import { PROCESS_STEPS } from "@/src/data/agencyData";

export function ProcessSection() {
  return (
    <section id="processo" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-text">
              Processo de Trabalho
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Do alinhamento estratégico à publicação, sem etapas obscuras.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cada projeto segue um fluxo organizado com aprovações transparentes e
            prazos cumpridos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between border-t border-border-strong pt-6"
            >
              <div>
                <span className="font-heading text-3xl font-bold text-silver-gradient tabular-nums">
                  {item.step}.
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {item.description}
                </p>
              </div>
              <p className="mt-6 border-t border-border pt-3 text-xs font-medium text-primary-text">
                {item.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
