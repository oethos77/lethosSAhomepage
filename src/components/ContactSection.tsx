import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, buildWhatsAppUrl } from "@/src/data/agencyData";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  "Site Institucional",
  "Landing Page de Alta Conversão",
  "Loja Virtual (E-commerce)",
  "Aplicativo Mobile",
  "Sistema Web Personalizado",
  "Automação de Processos",
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (name.trim().length < 2) {
      next.name = "Informe seu nome completo.";
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      next.phone = "Informe um WhatsApp válido com DDD.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Informe um e-mail válido.";
    }
    if (!service) {
      next.service = "Selecione o tipo de solução desejada.";
    }
    if (message.trim().length < 12) {
      next.message = "Descreva brevemente o objetivo do seu projeto.";
    }
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  }

  const formattedBriefUrl = buildWhatsAppUrl(
    `Olá! Sou ${name.trim()} (${email.trim()} | WhatsApp: ${phone.trim()}).\n\nTenho interesse em: ${service}.\n\nResumo do projeto:\n${message.trim()}`
  );

  const directWhatsAppUrl = buildWhatsAppUrl(
    "Olá! Gostaria de solicitar um orçamento para um projeto digital com a Lethos."
  );

  return (
    <section
      id="contato"
      className="border-t border-border bg-section-glow py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Conversion Column */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-medium text-primary-text">
                Orçamento e Diagnóstico
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
                Vamos tirar o seu próximo projeto digital do papel.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-silver">
                Envie os detalhes da sua necessidade pelo formulário ou fale diretamente com a
                nossa equipe pelo WhatsApp para receber uma proposta clara, prazo estimado e
                recomendação técnica.
              </p>
            </div>

            <div className="mt-10 space-y-6 border-t border-border pt-8">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Atendimento direto e ágil
                </p>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "mt-3 h-12 w-full sm:w-auto px-6 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp-hover font-semibold"
                  )}
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Solicitar orçamento pelo WhatsApp
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-silver">
                <Mail className="size-4 text-primary-text shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-foreground underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-7">
            <Card className="rounded-2xl border-hairline-strong bg-surface-gradient p-6 sm:p-8 ring-0 shadow-elevated">
              <CardContent className="p-0">
                {submitted ? (
                  <div
                    role="status"
                    className="flex flex-col items-start gap-5 py-4"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl border-hairline-accent bg-surface-elevated text-success">
                      <CheckCircle2 className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        Solicitação preparada com sucesso
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-silver sm:text-base">
                        Obrigado, <span className="font-semibold text-foreground">{name}</span>.
                        Para agilizar o atendimento e iniciar a análise técnica de{" "}
                        <span className="font-semibold text-foreground">{service}</span>, clique
                        abaixo para enviar seu resumo diretamente no nosso WhatsApp.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href={formattedBriefUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "default", size: "lg" }),
                          "h-12 px-6 bg-primary text-primary-foreground hover:bg-primary-hover shadow-cta font-semibold"
                        )}
                      >
                        Enviar resumo no WhatsApp
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={handleReset}
                        className="h-12 px-5 border-border-strong bg-surface text-foreground hover:bg-surface-elevated"
                      >
                        Enviar outra mensagem
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name" className="text-sm text-foreground">
                          Nome completo
                        </Label>
                        <Input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Seu nome ou da empresa"
                          aria-invalid={Boolean(errors.name)}
                          className="h-11 border-border-strong bg-background/70 text-foreground placeholder:text-muted-foreground"
                        />
                        {errors.name && (
                          <p role="alert" className="text-xs text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-phone" className="text-sm text-foreground">
                          WhatsApp com DDD
                        </Label>
                        <Input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(38) 99999-9999"
                          aria-invalid={Boolean(errors.phone)}
                          className="h-11 border-border-strong bg-background/70 text-foreground placeholder:text-muted-foreground tabular-nums"
                        />
                        {errors.phone && (
                          <p role="alert" className="text-xs text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-email" className="text-sm text-foreground">
                          E-mail
                        </Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="voce@suaempresa.com.br"
                          aria-invalid={Boolean(errors.email)}
                          className="h-11 border-border-strong bg-background/70 text-foreground placeholder:text-muted-foreground"
                        />
                        {errors.email && (
                          <p role="alert" className="text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-service" className="text-sm text-foreground">
                          Solução desejada
                        </Label>
                        <Select
                          value={service}
                          onValueChange={(value) => setService(value ?? "")}
                        >
                          <SelectTrigger
                            id="contact-service"
                            aria-invalid={Boolean(errors.service)}
                            className="h-11 w-full border-border-strong bg-background/70 text-foreground data-placeholder:text-muted-foreground"
                          >
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent className="border-border-strong bg-popover text-popover-foreground">
                            {SERVICE_OPTIONS.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p role="alert" className="text-xs text-destructive">
                            {errors.service}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="text-sm text-foreground">
                        Sobre o projeto
                      </Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Conte brevemente o que seu negócio faz, seus objetivos e se já possui site ou referência."
                        aria-invalid={Boolean(errors.message)}
                        className="min-h-28 border-border-strong bg-background/70 text-foreground placeholder:text-muted-foreground"
                      />
                      {errors.message && (
                        <p role="alert" className="text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <Button
                        type="submit"
                        size="lg"
                        className="h-12 px-7 bg-primary text-primary-foreground hover:bg-primary-hover shadow-cta text-sm font-semibold"
                      >
                        Solicitar orçamento
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        Resposta rápida em horário comercial.
                      </span>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
