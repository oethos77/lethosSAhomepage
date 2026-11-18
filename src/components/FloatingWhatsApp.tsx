import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/src/data/agencyData";

export function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Estou no site da Lethos Serviços Digitais e gostaria de solicitar um orçamento."
  );

  return (
    <div className="fixed right-5 bottom-5 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-border-strong bg-whatsapp px-4 text-sm font-semibold text-whatsapp-foreground shadow-floating transition-transform duration-150 hover:scale-[1.03] hover:bg-whatsapp-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring"
      >
        <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
        <span className="hidden whitespace-nowrap sm:inline">
          Orçamento no WhatsApp
        </span>
      </a>
    </div>
  );
}
