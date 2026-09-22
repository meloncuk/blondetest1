import React from "react";
import { Logo } from "@/components/site/Brand";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Over ons", href: "#over" },
  { label: "Contact", href: "#contact" },
];

const services = ["Stucwerk", "Schilderwerk", "Gipsplaten & Plafonds", "Wandafwerking", "Renovatie", "Totaalafwerking"];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" stacked mark size={34} />
            <p className="mt-5 text-sm text-background/60 leading-relaxed max-w-xs">
              Dutch craftsmanship. Refined interiors.
            </p>
            <p className="mt-4 text-sm text-background/50 leading-relaxed max-w-xs">
              Premium stucwerk, schilderwerk en renovatie voor hoogwaardige interieurs in heel Nederland.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/40 mb-5">Navigatie</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-sm text-background/70 hover:text-accent transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/40 mb-5">Diensten</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}><a href="#diensten" className="text-sm text-background/70 hover:text-accent transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-background/40 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="tel:+31687942926" className="hover:text-accent transition-colors">+31 6 87 94 29 26</a></li>
              <li><a href="mailto:info@blondeleeuw.nl" className="hover:text-accent transition-colors">info@blondeleeuw.nl</a></li>
              <li>Amsterdam · Rotterdam</li>
              <li>Ma–Vr 08:00–18:00</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {["IG", "FB", "LI"].map((s) => (
                <a key={s} href="#" aria-label={s} className="flex h-9 w-9 items-center justify-center border border-background/20 text-xs hover:border-accent hover:text-accent transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>© 2026 BLONDE LEEUW — Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-accent transition-colors">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}