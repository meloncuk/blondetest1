import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const services = [
  {
    n: "01",
    title: "Stucwerk",
    short: "Strakke, egale en hoogwaardige wandafwerking.",
    long: "Van spackwerk tot gladde afwerking: wij leveren naadloze stucwerkresultaten die elke ruimte een rustige, luxe uitstraling geven.",
    img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/4b141a035_generated_image.png",
    alt: "Macrofoto van een perfect afgewerkte stucwerk hoek",
  },
  {
    n: "02",
    title: "Schilderwerk",
    short: "Perfecte kleur, dekking en afwerking tot in het kleinste detail.",
    long: "Strakke lijnen, dekkende lagen en duurzame verf. Ons schilderwerk behoudt jarenlang zijn kleur en kwaliteit.",
    img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/15326bad7_generated_image.png",
    alt: "Pas geschilderde muur in een luxe Nederlands interieur",
  },
  {
    n: "03",
    title: "Gipsplaten & Plafonds",
    short: "Moderne wand- en plafondoplossingen met een hoogwaardige finish.",
    long: "Van doorlopende plafonds met shadow-gap tot gipsplaten wanden: moderne constructies met een strak eindresultaat.",
    img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/e52bdd680_generated_image.png",
    alt: "Modern gipsplaten plafond met inbouwverlichting",
  },
  {
    n: "04",
    title: "Wandafwerking",
    short: "Een perfect oppervlak vormt de basis van ieder interieur.",
    long: "Egaliseren, spackwerk en afwerking van wanden tot een perfect glad eindresultaat, klaar voor elke gewenste afwerking.",
    img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/1fed1cdeb_generated_image.png",
    alt: "Glad afgewerkte wand in steen- en beigetinten",
  },
  {
    n: "05",
    title: "Renovatie",
    short: "Bestaande ruimtes transformeren naar een moderne en hoogwaardige omgeving.",
    long: "Van grondige renovatie tot complete transformatie. Wij pakken elk project aan met dezelfde precisie en aandacht voor detail.",
    img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/970c04831_generated_image.png",
    alt: "Gerenoveerd Amsterdams grachtenpand appartement",
  },
  {
    n: "06",
    title: "Totaalafwerking",
    short: "Eén professioneel team voor het complete afwerkingsproces.",
    long: "Eén aanspreekpunt voor uw gehele project. Wij coördineren elke fase van voorbereiding tot de laatste afwerkingslaag.",
    img: "https://media.base44.com/images/public/6a8d9748d1d93b5e005f9c2f/db839d67b_generated_image.png",
    alt: "Elegante Nederlandse woonkamer met perfect afgewerkte wanden",
  },
];

function ServiceRow({ s, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center border-b border-border py-10 md:py-14 transition-colors duration-500"
    >
      <div className="md:col-span-5 relative aspect-[4/3] overflow-hidden order-2 md:order-1">
        <Image
          src={s.img}
          alt={s.alt}
          fittingType="fill"
          className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105 saturate-[0.95] group-hover:saturate-100"
        />
      </div>
      <div className="md:col-span-7 order-1 md:order-2">
        <div className="flex items-baseline gap-6">
          <span className="font-display text-2xl font-extrabold text-accent tracking-tightest">{s.n}</span>
          <h3 className="font-display text-3xl md:text-5xl font-extrabold tracking-tightest">{s.title}</h3>
        </div>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">{s.short}</p>
        <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
          <p className="overflow-hidden text-foreground/70 leading-relaxed max-w-xl">{s.long}</p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group/btn"
        >
          <span className="relative">
            Meer informatie
            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-500 group-hover/btn:w-full group-hover/btn:left-0" />
          </span>
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </button>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="diensten" className="py-24 md:py-40 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent mb-6">
              <span className="h-px w-10 bg-accent" /> Diensten
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest text-balance">
              Onze expertise
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-sm md:text-right">
            Van basis tot perfect afgewerkt.
          </p>
        </div>
        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.n} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}