import { BentoDemo } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { AppleCardsCarouselDemo as Clients } from "@/components/Clients"
import { Contact } from "@/components/Contact";
import Nav from "@/components/Nav";
import Link from "next/link";
export const fetchCache = 'force-no-store';

export default function Home() {
  return (
    <div className="dark:bg-zinc-900 bg-slate-50 antialiased h-full w-full">
      <Nav />
      <main>
        <Hero />
        <BentoDemo />
        <Clients />
        <Contact />
      </main>
      <footer className="bg-neutral-300 dark:bg-black h-7 row-start-3 flex gap-1 flex-wrap items-center justify-center text-black/80 dark:text-white/80 text-xs">
        Creado con ❤️ por <Link href="#" target="_blank" rel="noreferrer"> Grupo MET</Link>
      </footer>
    </div>
  );
}
