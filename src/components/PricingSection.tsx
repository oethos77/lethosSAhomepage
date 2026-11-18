import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { PRICING_PLANS, buildWhatsAppUrl } from "@/src/data/agencyData";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      id="planos"
      className="border-t border-border bg-section-glow py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary-text">
            Investimento e Planos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Estrutura transparente para cada fase do seu negócio.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-silver">
            Valores iniciais de referência para orientar seu planejamento. Ajustamos o
            escopo exato conforme suas funcionalidades e objetivos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex"
            >
              <Card
                className={cn(
                  "flex w-full flex-col justify-between rounded-2xl p-6 sm:p-8 ring-0 transition-all duration-200",
                  plan.highlighted
                    ? "border-hairline-accent bg-surface-accent-gradient shadow-glow"
                    : "border-hairline bg-surface-gradient shadow-card hover:border-border-strong"
                )}
              >
                <div>
                  <CardHeader className="p-0 gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="font-heading text-xl font-bold text-foreground">
                        {plan.name}
                      </CardTitle>
                      {plan.highlighted && (
                        <span className="text-xs font-semibold text-primary-text whitespace-nowrap shrink-0">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {plan.subtitle}
                    </p>
                  </CardHeader>

                  <div className="mt-6 border-y border-border py-5">
                    <p className="font-heading text-2xl font-bold tracking-tight text-foreground tabular-nums sm:text-3xl">
                      {plan.priceLabel}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {plan.priceNote}
                    </p>
                  </div>

                  <CardContent className="mt-6 p-0">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-silver"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary-text"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={buildWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: plan.highlighted ? "default" : "outline",
                        size: "lg",
                      }),
                      "h-12 w-full font-semibold whitespace-nowrap",
                      plan.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary-hover shadow-cta"
                        : "border-border-strong bg-surface text-foreground hover:bg-surface-elevated"
                    )}
                  >
                    {plan.ctaLabel}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
