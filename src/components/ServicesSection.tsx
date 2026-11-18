import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, buildWhatsAppUrl } from "@/src/data/agencyData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="border-t border-border bg-section-glow py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-text">
              Especialidades e Entregas
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Soluções digitais desenhadas para posicionar sua marca e gerar demanda.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Cada projeto combina design minimalista, performance técnica e integração
            direta com os canais de venda do seu negócio.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((service, idx) => {
            const colSpanClass =
              idx === 0 || idx === 3
                ? "lg:col-span-7"
                : idx === 1 || idx === 2
                  ? "lg:col-span-5"
                  : "md:col-span-2 lg:col-span-12";

            return (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={colSpanClass}
              >
                <Card
                  className={cn(
                    "group h-full justify-between rounded-2xl border-hairline bg-surface-gradient p-6 sm:p-7 ring-0 shadow-card transition-all duration-200 hover:border-border-accent hover:shadow-elevated",
                    service.featured && "bg-surface-accent-gradient"
                  )}
                >
                  <CardHeader className="p-0 gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-heading text-sm font-semibold tracking-wider text-primary-text tabular-nums">
                        {service.index}.
                      </span>
                      <a
                        href={buildWhatsAppUrl(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Orçar ${service.title} pelo WhatsApp`}
                        className="inline-flex min-h-10 items-center gap-1.5 text-xs font-medium text-silver transition-colors hover:text-foreground whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-ring rounded-sm px-1"
                      >
                        Orçar serviço
                        <ArrowUpRight
                          className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <CardTitle className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="mt-4 flex flex-1 flex-col justify-between gap-5 p-0">
                    <p className="text-sm leading-relaxed text-silver sm:text-base">
                      {service.summary}
                    </p>
                    <p className="border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {service.deliverable}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
