"use client";

import { IconMail } from "@tabler/icons-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <section id="contacto" className="bg-gradient-to-b from-neutral-100 to-neutral-300 dark:bg-gradient-to-b dark:from-zinc-700 dark:via-zinc-800 dark:to-black">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-28 max-w-7xl mx-auto px-4 py-20">
      {/* Columna 1 - Información de contacto */}
      <div>
        <div className="flex">
          <div className="[perspective:400px] [transform-style:preserve-3d]">
            <div 
              className="h-14 w-14 p-[4px] rounded-md bg-gradient-to-b from-neutral-800 to-neutral-950 mx-auto relative"
              style={{transform: "rotateX(25deg)", transformOrigin: "center"}}
            >
              <div className="bg-charcoal rounded-[5px] h-full w-full relative z-20 flex justify-center items-center overflow-hidden">
                <IconMail className="h-6 w-6 text-primary-light" />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-neutral-600 opacity-50 rounded-full blur-lg h-4 w-full mx-auto z-30" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-primary-light to-transparent h-px w-[60%] mx-auto" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-primary-light blur-sm to-transparent h-[8px] w-[60%] mx-auto" />
            </div>
          </div>
        </div>

        <h2 className="max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-gray-600 dark:text-white/60 text-3xl md:text-5xl md:leading-tight text-left">
          Contáctanos
        </h2>

        <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto font-normal text-left text-black/50 dark:text-white/70">
          Siempre buscamos formas de mejorar nuestros productos y servicios. 
          Contáctanos y déjanos saber cómo podemos ayudarte.
        </h2>

        <div className="text-sm mt-10">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">Email</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-200"><Link href="mailto:info@grupo-met.com">info@grupo-met.com</Link></p>
        </div>

        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">Teléfono</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-200"><Link href="https://wa.me/5493492563976">+54 (3492) 563976</Link></p>
        </div>

        <div className="text-sm mt-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">Soporte</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-200"><Link href="mailto:soporte@grupo-met.com">soporte@grupo-met.com</Link></p>
        </div>
      </div>

        {/* Columna del Formulario */}
        <div className="bg-white dark:bg-zinc-900 border border-[rgba(255,255,255,0.10)] rounded-xl p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
          <ContactForm />
        </div>
    </div>
    </section>
  );
}