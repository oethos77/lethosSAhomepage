import { motion } from "motion/react";
import { TESTIMONIALS } from "@/src/data/agencyData";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary-text">
            Resultados Validados
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Negócios que modernizaram sua operação e ampliaram suas vendas.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="h-full justify-between rounded-2xl border-hairline bg-surface-gradient p-6 sm:p-7 ring-0 shadow-card">
                <CardContent className="flex h-full flex-col justify-between gap-6 p-0">
                  <div>
                    <p className="font-heading text-lg font-semibold text-silver-gradient tabular-nums">
                      {item.metric}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.context}
                    </p>
                    <blockquote className="mt-5 text-sm leading-relaxed text-silver sm:text-base">
                      “{item.quote}”
                    </blockquote>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {item.author}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
