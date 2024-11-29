"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Conoce nuestros clientes
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Sitio Web Completo
          </span>{" "}
          Descripcion completa del sitio realizado.
        </p>
        <Image
          src="/mockups/boness-light.webp"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    );
};

const data = [
  {
    category: "eCommerce",
    title: "Valerio Caballero Muebles",
    src: "/mockups/valeriocaballero-light.webp",
    content: <DummyContent />,
  },
  {
    category: "eCommerce",
    title: "KomorebiAromas",
    src: "/mockups/komorebi-light.webp",
    content: <DummyContent />,
  },
  {
    category: "eCommerce",
    title: "Boness Calefaccion",
    src: "/mockups/boness-light.webp",
    content: <DummyContent />,
  },

  {
    category: "Sistema de Reservas",
    title: "Mitica Viajes",
    src: "/mockups/mitica-light.webp",
    content: <DummyContent />,
  }
];
