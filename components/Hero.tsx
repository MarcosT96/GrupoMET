"use client";

import Link from "next/link";
import AvatarGroup from "./ui/avatargroup";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden dark:bg-zinc-900 bg-slate-50">
      <BackgroundBeams />
      <div className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none">
        <div 
          className="absolute top-0 left-0"
          style={{
            transform: "translateY(-350px) rotate(-45deg)",
            width: "560px",
            height: "1380px",
            background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 85%, .08) 0, hsla(0, 0%, 55%, .02) 50%, hsla(0, 0%, 45%, 0) 80%)"
          }}
        />
      </div>
      
      <div className="flex flex-col pt-20 md:pt-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-gray to-gray-500 dark:from-neutral-400 dark:to-gray-300 text-4xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 py-6">
            Deja de perder clientes por un sitio web obsoleto
          </h1>
          
          <h2 className="my-4 font-normal text-center mt-2 md:mt-6 text-base md:text-xl text-muted dark:text-white/70 max-w-3xl mx-auto relative z-10">
            Multiplica tus conversiones con un sitio web que realmente funciona
          </h2>

          <div className="flex flex-col items-center mt-10 mb-10">
            <AvatarGroup />
            <p className="text-neutral-400 text-sm ml-8 relative z-40 lg:text-left text-center dark:text-white/60">
              Más de 27,000 usuarios confían en nuestras soluciones digitales
            </p>
          </div>

          <div className="flex items-center gap-4 justify-center my-10 relative z-10">
            <Link href={"#contacto"} >
            <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-secondary relative z-10 hover:bg-secondary/90 border border-secondary text-white text-lg transition font-medium duration-200 rounded-md px-4 py-2 justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset] flex space-x-2 items-center">
              <span>Contactanos</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}