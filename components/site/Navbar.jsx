import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/Brand";

const links = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Over ons", href: "#over" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "glass-nav py-3 shadow-[0_1px_0_0_hsl(var(--border))]" : "py-6 bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className={solid ? "" : "[&_*]:!text-background"}>
          <Logo stacked={!solid} variant={solid ? "dark" : "light"} />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-500 ${
                  solid ? "text-foreground/80 hover:text-foreground" : "text-background/80 hover:text-background"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium tracking-wide border bronze-rule transition-all duration-300 ${
            solid
              ? "text-foreground hover:bg-foreground hover:text-background"
              : "text-background border-background/40 hover:bg-background/10"
          }`}
        >
          Offerte aanvragen
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${solid ? "text-foreground" : "text-background"}`}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96 glass-nav" : "max-h-0"}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium text-foreground/80 border-b border-border"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 text-sm font-medium text-background bg-foreground"
            >
              Offerte aanvragen
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}