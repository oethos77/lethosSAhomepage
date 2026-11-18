import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, buildWhatsAppUrl } from "@/src/data/agencyData";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const primaryCtaUrl = buildWhatsAppUrl(
    "Olá! Vim pelo site da Lethos Serviços Digitais e gostaria de solicitar um orçamento."
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#inicio"
          className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors hover:text-silver whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-sm"
        >
          Lethos Serviços Digitais
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-silver transition-colors duration-150 hover:text-foreground whitespace-nowrap shrink-0 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={primaryCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "hidden sm:inline-flex h-10 px-4 bg-primary text-primary-foreground hover:bg-primary-hover shadow-cta font-semibold whitespace-nowrap shrink-0"
            )}
          >
            Solicitar Orçamento
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-border-strong md:hidden focus-visible:outline-2 focus-visible:outline-ring"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Menu móvel"
          className="border-t border-border bg-background px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center text-base font-medium text-silver transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={primaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "mt-2 h-11 w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold"
              )}
            >
              Solicitar Orçamento no WhatsApp
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
