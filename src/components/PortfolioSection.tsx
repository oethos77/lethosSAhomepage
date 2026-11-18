import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Eye } from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  buildWhatsAppUrl,
  type PortfolioProject,
  type ProjectCategory,
} from "@/src/data/agencyData";
import { SafeImage } from "@/src/components/SafeImage";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const FILTER_TABS: { value: ProjectCategory; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "sites", label: "Sites e Lojas" },
  { value: "apps", label: "Aplicativos" },
  { value: "sistemas", label: "Sistemas" },
];

export function PortfolioSection() {
  const [category, setCategory] = useState<ProjectCategory>("todos");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const visibleProjects =
    category === "todos"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === category);

  return (
    <section id="portfolio" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-text">
              Portfólio Selecionado
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Projetos construídos com foco em performance, estética e retorno.
            </h2>
          </div>

          <Tabs
            value={category}
            onValueChange={(val) => setCategory((val as ProjectCategory) ?? "todos")}
          >
            <TabsList className="h-10 rounded-lg border border-border bg-surface p-1">
              {FILTER_TABS.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-3.5 text-xs font-medium text-silver data-active:bg-primary data-active:text-primary-foreground sm:text-sm whitespace-nowrap shrink-0"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border-hairline bg-surface-gradient p-0 ring-0 shadow-card transition-all duration-200 hover:border-border-accent hover:shadow-elevated">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-background">
                  <SafeImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-media-scrim opacity-45"
                  />
                </div>

                <CardContent className="flex flex-1 flex-col justify-between gap-5 p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-primary-text">
                        {project.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                    </div>

                    <h3 className="mt-2.5 font-heading text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-silver">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-border pt-4">
                    <p className="text-xs font-medium text-foreground">
                      {project.result}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-muted-foreground">
                        {project.stack}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                        className="h-9 px-3 text-xs font-semibold text-primary-text hover:bg-surface-elevated hover:text-foreground whitespace-nowrap shrink-0"
                      >
                        <Eye className="size-3.5" aria-hidden="true" />
                        Ver detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="max-w-2xl border-border-strong bg-surface p-0 text-foreground sm:max-w-2xl overflow-hidden">
          {selectedProject && (
            <>
              <div className="relative aspect-16/9 w-full overflow-hidden bg-background">
                <SafeImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-media-scrim opacity-50"
                />
              </div>

              <div className="space-y-5 p-6 sm:p-7">
                <DialogHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-primary-text">
                      {selectedProject.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{selectedProject.year}</span>
                  </div>
                  <DialogTitle className="mt-1 font-heading text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-silver">
                    {selectedProject.stack}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 gap-4 border-y border-border py-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground">
                      Desafio
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-silver">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground">
                      Solução entregue
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-silver">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Impacto gerado</p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                      {selectedProject.result}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      `Olá! Vi o projeto "${selectedProject.title}" no portfólio da Lethos e quero solicitar um orçamento parecido.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "h-11 px-5 bg-primary text-primary-foreground hover:bg-primary-hover shadow-cta font-semibold whitespace-nowrap shrink-0"
                    )}
                  >
                    Quero um projeto similar
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
