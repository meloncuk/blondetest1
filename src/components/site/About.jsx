import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const ABOUT_IMG = "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/f0086b326_generated_image.png";

const pillars = ["Traditioneel vakmanschap", "Moderne technieken", "Premium materialen", "Hedendaags Nederlands design"];

export default function About() {
  return (
    <section id="over" className="py-24 md:py-40 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1"
        >
          <Image
            src={ABOUT_IMG}
            alt="Ambachtelijk vakmanschap — perfect afgewerkt Nederlands interieur"
            fittingType="fill"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
            <span className="h-px w-10 bg-accent" /> Over Ons
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Meer dan een afwerking.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            BLONDE LEEUW staat voor vakmanschap, precisie en een sterke focus op kwaliteit.
            Wij geloven dat een perfect interieur begint bij een perfect afgewerkte basis.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Wij combineren traditioneel vakmanschap met moderne technieken, premium materialen
            en hedendaags Nederlands ontwerp.
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-3">
            {pillars.map((p) => (
              <li key={p} className="text-sm font-medium border bronze-rule px-4 py-2">{p}</li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground border-b border-foreground pb-1 transition-colors hover:border-accent hover:text-accent"
          >
            Neem contact op
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}