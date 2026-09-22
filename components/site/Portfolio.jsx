import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const projects = [
  { name: "Modern Appartement", loc: "Amsterdam", type: "Stucwerk & Schilderwerk", cat: "Woonkamer", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/a74cc5648_generated_7294f8c0.png", alt: "Luxueuze woonkamer in gerenoveerd Amsterdams appartement", span: "lg:row-span-2 aspect-[4/5]" },
  { name: "Strakke Keuken", loc: "Rotterdam", type: "Wandafwerking", cat: "Keuken", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/d073f4e0b_generated_4ce50b8d.png", alt: "Moderne Nederlandse keuken met glad gestucte wanden", span: "aspect-square" },
  { name: "Serene Slaapkamer", loc: "Utrecht", type: "Stucwerk & Plafond", cat: "Slaapkamer", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/bce1b6329_generated_40cb5321.png", alt: "Minimalistische slaapkamer met perfect gestucte wanden", span: "aspect-[16/9]" },
  { name: "Kantoorruimte", loc: "Den Haag", type: "Totaalafwerking", cat: "Kantoor", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/d7c0f5bd8_generated_0fc1f222.png", alt: "Modern Nederlands kantoor met gladde stucwanden", span: "lg:row-span-2 aspect-[4/5]" },
  { name: "Entree & Gang", loc: "Amsterdam", type: "Schilderwerk", cat: "Woonkamer", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/e4ee9f9a5_generated_b9b42023.png", alt: "Gang van gerenoveerd Rotterdam appartement met gladde wanden", span: "aspect-square" },
  { name: "Badkamer Suite", loc: "Haarlem", type: "Gipsplaten & Afwerking", cat: "Keuken", img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/7b0639ad2_generated_572a2f0c.png", alt: "Moderne Nederlandse badkamer met perfect afgewerkte wanden", span: "aspect-[16/9]" },
];

const filters = ["Alles", "Woonkamer", "Keuken", "Kantoor"];

export default function Portfolio() {
  const [filter, setFilter] = useState("Alles");
  const visible = filter === "Alles" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="werk" className="py-24 md:py-40 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <p className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
            <span className="h-px w-10 bg-accent" /> Portfolio <span className="h-px w-10 bg-accent" />
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
            Ons werk spreekt voor zich.
          </h2>
        </div>

        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1 bg-secondary/40 rounded-full">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === f ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
          {visible.map((p, i) => (
            <motion.figure
              key={p.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden ${p.span}`}
            >
              <Image
                src={p.img}
                alt={p.alt}
                fittingType="fill"
                className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">{p.type}</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-background tracking-tight">{p.name}</h3>
                <p className="text-background/70 text-sm mt-1">{p.loc}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}