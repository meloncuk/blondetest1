import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const INTRO_IMG = "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/98920fd1a_generated_image.png";

export default function Introduction() {
  return (
    <section className="py-24 md:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:col-start-1"
        >
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-8">
            <span className="h-px w-10 bg-accent" /> BLONDE LEEUW
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Ruimtes die spreken voor zichzelf.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
            Wij creëren strakke, hoogwaardige en tijdloze afwerkingen voor woningen en
            commerciële ruimtes. Van perfect stucwerk tot schilderwerk en complete renovatie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 lg:col-start-7 relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <Image
              src={INTRO_IMG}
              alt="Architecturaal Nederlands interieur met perfect afgewerkte wanden"
              fittingType="fill"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-6 -left-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            01 — Vakmanschap
          </div>
        </motion.div>
      </div>
    </section>
  );
}