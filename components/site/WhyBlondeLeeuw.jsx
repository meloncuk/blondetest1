import React from "react";
import { motion } from "framer-motion";

const principles = [
  { n: "01", t: "Precisie", d: "Elk oppervlak, iedere hoek en ieder detail krijgt onze volledige aandacht." },
  { n: "02", t: "Kwaliteit", d: "We werken met hoogwaardige materialen en professionele technieken." },
  { n: "03", t: "Betrouwbaarheid", d: "Heldere communicatie, duidelijke afspraken en een nette werkwijze." },
  { n: "04", t: "Resultaat", d: "Een eindresultaat dat niet alleen vandaag mooi is, maar jarenlang meegaat." },
];

export default function WhyBlondeLeeuw() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
      <div className="lg:col-span-5 bg-foreground text-background flex items-center px-6 md:px-12 lg:px-16 py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-8">
            <span className="h-px w-10 bg-accent" /> Waarom
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Waarom BLONDE LEEUW?
          </h2>
          <p className="mt-8 text-background/60 leading-relaxed max-w-sm">
            Vier principes die de basis vormen van elk project dat wij aanpakken.
          </p>
        </motion.div>
      </div>

      <div className="lg:col-span-7 bg-background flex items-center px-6 md:px-12 lg:px-16 py-20 lg:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px w-full">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 border border-border"
            >
              <span className="font-display text-sm font-extrabold tracking-[0.2em] text-accent">{p.n}</span>
              <h3 className="mt-5 font-display text-2xl md:text-3xl font-extrabold tracking-tightest">{p.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}