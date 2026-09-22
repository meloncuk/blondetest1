import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const info = [
  { icon: Phone, label: "Telefoon", value: "+31 6 87 94 29 26", href: "tel:+31687942926" },
  { icon: Mail, label: "E-mail", value: "info@blondeleeuw.nl", href: "mailto:info@blondeleeuw.nl" },
  { icon: MapPin, label: "Werkgebied", value: "Amsterdam, Rotterdam & heel Nederland" },
  { icon: Clock, label: "Openingstijden", value: "Ma–Vr 08:00–18:00 · Za op afspraak" },
];

function Field({ label, name, type = "text", as = "input", children }) {
  const Tag = as;
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        className="w-full bg-transparent border-0 border-b border-foreground/20 focus:border-accent focus:outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300 resize-none"
      >
        {children}
      </Tag>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    setError(false);
    try {
      const response = await fetch("https://formspree.io/f/mljdbbrk", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }
      form.reset();
      setSent(true);
      setTimeout(() => setSent(false), 6000);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
            <span className="h-px w-10 bg-accent" /> Contact
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Laten we beginnen.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
            Heeft u een renovatie, stucwerk- of schilderproject? Neem contact op met BLONDE LEEUW.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {info.map((c) => {
              const I = c.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 items-center justify-center border bronze-rule shrink-0">
                    <I size={16} className="text-accent" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</p>
                    <p className="mt-1 text-foreground font-medium">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="group hover:opacity-70 transition-opacity">{content}</a>
              ) : (
                <div key={c.label}>{content}</div>
              );
            })}
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-secondary/20 border border-border p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8">
            <Field label="Naam" name="naam" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Field label="E-mailadres" name="email" type="email" />
              <Field label="Telefoonnummer" name="telefoon" type="tel" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Field label="Postcode" name="postcode" />
              <Field label="Type project" name="type" as="select">
                <option value="">Selecteer…</option>
                <option>Stucwerk</option>
                <option>Schilderwerk</option>
                <option>Wandafwerking</option>
                <option>Gipsplaten & Plafonds</option>
                <option>Renovatie</option>
                <option>Totaalafwerking</option>
              </Field>
            </div>
            <Field label="Bericht" name="bericht" as="textarea" />
          </div>

          <button type="submit" disabled={sending} className="group mt-10 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide transition-all duration-300 hover:bg-accent disabled:opacity-50">
            {sending ? "Verzenden…" : sent ? "Verzonden — wij nemen contact op" : "Verstuur aanvraag"}
            {!sent && !sending && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
          </button>
          {error && <p className="mt-4 text-sm text-destructive">Verzenden mislukt — probeer het opnieuw of mail ons direct.</p>}
        </form>
      </div>
    </section>
  );
}