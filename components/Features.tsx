import { CalendarIcon } from "@radix-ui/react-icons";
import { Rocket, SearchIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {AnimatedBeamMultipleOutputDemo} from "@/components/demos/animated-beam-multiple-outputs";
import {AnimatedListDemo} from "@/components/demos/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { IconAppWindowFilled } from "@tabler/icons-react";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: SearchIcon,
    name: "Domina los Motores de Búsqueda",
    description: "Potenciamos tu visibilidad online con SEO avanzado. Optimizamos cada aspecto de tu sitio para atraer tráfico cualificado y mejorar tu posicionamiento en Google.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Rocket,
    name: "Estrategia que Impulsa Resultados",
    description: "Desarrollamos tu visión digital con un plan personalizado que maximiza el impacto. Convertimos visitantes en clientes leales mediante experiencias web cautivadoras.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Tecnología que Trabaja para Ti",
    description: "Integramos las herramientas que tu negocio necesita. Automatizaciones personalizadas y funcionalidades a medida que transforman tu sitio en un motor de crecimiento.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Siempre a Tu Lado",
    description: "No te dejamos solo. Nuestro equipo está disponible 24/7 para mantener tu sitio actualizado, seguro y evolucionando con tu negocio.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <section id="bento" className="relative py-10 bg-slate-100 dark:bg-zinc-800 dark:border-t-white">
      {/* Ícono y títulos */}
      <div className="px-4 py-20 max-w-5xl mx-auto relative z-40">
        <div className="[perspective:400px] [transform-style:preserve-3d]">
          <div 
            className="h-14 w-14 p-[4px] rounded-md bg-gradient-to-b from-neutral-600 to-neutral-950 mx-auto relative"
            style={{transform: "rotateX(25deg)", transformOrigin: "center"}}
          >
            <div className="bg-charcoal rounded-[5px] h-full w-full relative z-20 flex justify-center items-center overflow-hidden">
              <IconAppWindowFilled className="h-6 w-6 text-cyan-500" />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-[60%] mx-auto" />
          </div>
        </div>

        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text bg-gradient-to-b from-neutral-400 to-black dark:bg-gradient-to-b dark:from-zinc-600 dark:to-white text-2xl md:text-5xl md:leading-tight pt-4">
          Soluciones que Impulsan tu Negocio
        </h2>
        <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-black/55 dark:text-white/60 text-center font-normal">
          Tecnología avanzada y estrategias personalizadas para hacer crecer tu presencia digital
        </h2>
        <BentoGrid>
        {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
        ))}
        </BentoGrid>
        </div>
    </section>
  );
}
