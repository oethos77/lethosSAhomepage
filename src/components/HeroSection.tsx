import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { HERO_METRICS, buildWhatsAppUrl } from "@/src/data/agencyData";
import { SafeImage } from "@/src/components/SafeImage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Quero transformar uma ideia em solução digital com a Lethos e solicitar um orçamento."
  );
  const examplesWhatsappUrl = buildWhatsAppUrl(
    "Tenho interesse em ver exemplos dos projetos"
  );

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-glow pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Narrative & Primary Conversion Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-sm font-medium tracking-wide text-primary-text">
              Desenvolvimento de Sites, Aplicativos e Soluções Digitais
            </p>

            <h1 className="mt-4 font-heading text-[clamp(2.25rem,4.2vw,3.85rem)] font-bold leading-[1.06] tracking-tight text-foreground text-balance">
              Transformamos ideias em soluções digitais que impulsionam negócios.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
              Projetamos e desenvolvemos sites institucionais, landing pages, lojas virtuais,
              aplicativos e sistemas sob medida para empresas, empreendedores e profissionais que
              exigem credibilidade e conversão real.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-12 px-6 bg-primary text-primary-foreground hover:bg-primary-hover shadow-cta text-sm sm:text-base font-semibold whitespace-nowrap shrink-0"
                )}
              >
                Solicitar orçamento pelo WhatsApp
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>

              <a
                href={examplesWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-5 border-border-strong bg-surface/60 text-foreground hover:bg-surface-elevated hover:text-foreground text-sm sm:text-base font-medium whitespace-nowrap shrink-0"
                )}
              >
                Ver exemplos de projeto
                <ArrowUpRight className="size-4 text-silver" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Dominant Architectural Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border-hairline-strong bg-surface shadow-elevated sm:min-h-[360px]">
              <SafeImage
                src="/src/assets/images/hero_lethos_architecture_1795009975760.jpg"
                alt="Estação de desenvolvimento da Lethos Serviços Digitais exibindo interface escura com detalhes em roxo e prata metálico"
                fallbackTitle="Lethos Serviços Digitais — Engenharia e Design Digital"
                className="h-full w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-media-scrim opacity-55"
              />
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Proof Strip Below Split */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:mt-16 lg:grid-cols-4 lg:gap-8">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <span className="font-heading text-2xl font-bold tracking-tight text-silver-gradient tabular-nums sm:text-3xl">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {metric.label}
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
