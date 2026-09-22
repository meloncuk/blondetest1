import React from "react";
import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Kennismaaking", d: "Bespreek uw wensen en ideeën." },,
  { n: "02", t: "Advies & Offerte", d: "Ontvang een duidelijk en transparant voorstel." },
  { n: "03", t: "Uitvoering", d: "Professioneel vakmanschap met aandacht voor ieder detail." },
  { n: "04", t: "Perfecte Oplevering", d: "Een strak, schoon en hoogwaardig eindresultaat." },
];

export default function Process() {
  return (
    <section className="py-24 md:py-40 bg-secondary/20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
            <span className="h-px w-10 bg-accent" /> Werkwijze
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Een helder proces.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[88px] hidden md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-full bg-accent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative z-10 mb-8 flex md:block items-center gap-4">
                  <span className="font-display text-6xl md:text-8xl font-extrabold tracking-tightest text-foreground/15">
                    {s.n}
                  </span>
                  <span className="hidden md:block absolute top-[78px] left-0 h-3 w-3 rounded-full bg-accent ring-4 ring-secondary/20" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-extrabold tracking-tight">{s.t.toUpperCase()}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xs">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}