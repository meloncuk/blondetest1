import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const projects = [
  { name: "MODERN RESIDENCE", loc: "Amsterdam", type: "Stucwerk & Schilderwerk", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/81d7ce2e7_generated_image.png", alt: "Luxueuze woonkamer in gerenoveerd Amsterdams appartement", cls: "md:col-span-7 aspect-[16/11]" },
  { name: "STADSAPPARTEMENT", loc: "Rotterdam", type: "Wandafwerking", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/8f7d627c6_generated_image.png", alt: "Moderne Nederlandse keuken met glad gestucte wanden", cls: "md:col-span-5 aspect-[4/5]" },
  { name: "MINIMALIST INTERIEUR", loc: "Utrecht", type: "Stucwerk & Plafond", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/6f8213e3e_generated_image.png", alt: "Minimalistische slaapkamer met perfect gestucte wanden", cls: "md:col-span-5 aspect-[4/5]" },
  { name: "COMMERCIEEL PAND", loc: "Den Haag", type: "Totaalafwerking", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/36335e098_generated_image.png", alt: "Modern Nederlands kantoor met gladde stucwanden", cls: "md:col-span-7 aspect-[16/11]" },
  { name: "GRACHTENWONING", loc: "Amsterdam", type: "Schilderwerk", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/f472b3e2d_generated_image.png", alt: "Gang van gerenoveerd appartement met gladde wanden", cls: "md:col-span-7 aspect-[16/11]" },
  { name: "WONING RENOVATIE", loc: "Haarlem", type: "Gipsplaten & Afwerking", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/c4bd528ee_generated_image.png", alt: "Moderne badkamer met perfect afgewerkte wanden", cls: "md:col-span-5 aspect-[4/5]" },
];

export default function Projects() {
  return (
    <section id="projecten" className="py-24 md:py-40 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
              <span className="h-px w-10 bg-accent" /> Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
              Projecten
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm md:text-right">Vakmanschap in beeld.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden cursor-pointer ${p.cls}`}
            >
              <Image
                src={p.img}
                alt={p.alt}
                fittingType="fill"
                className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{p.type}</p>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-background tracking-tightest">{p.name}</h3>
                <p className="text-background/70 text-sm mt-1">{p.loc}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}