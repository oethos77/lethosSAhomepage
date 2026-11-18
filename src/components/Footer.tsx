import { ArrowUpRight } from "lucide-react";
import {
  CONTACT_EMAIL,
  NAV_ITEMS,
  buildWhatsAppUrl,
} from "@/src/data/agencyData";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Gostaria de conversar sobre um novo projeto digital com a Lethos Serviços Digitais."
  );

  return (
    <footer className="border-t border-border bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <a
              href="#inicio"
              className="font-heading text-lg font-bold tracking-tight text-foreground"
            >
              Lethos Serviços Digitais
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Transformamos ideias em soluções digitais que impulsionam negócios. Sites
              institucionais, landing pages, lojas virtuais, aplicativos e sistemas sob
              medida.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div>
              <p className="text-xs font-semibold text-foreground">Navegação</p>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-foreground">
                Atendimento Direto
              </p>
              <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                <p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "h-9 border-border-strong bg-surface text-foreground hover:bg-surface-elevated"
                  )}
                >
                  Falar no WhatsApp
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Lethos Serviços Digitais. Todos os direitos reservados.</p>
          <p>Desenvolvimento de Sites, Aplicativos e Soluções Digitais</p>
        </div>
      </div>
    </footer>
  );
}
