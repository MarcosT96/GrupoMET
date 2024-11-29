"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export const DashboardPreview = () => {
  return (
    <ContainerScroll titleComponent={
      <>

      </>
    }
    >
      <div className="h-full w-full bg-transparent flex items-center justify-center">
        <Image
          src="/dashboard.png"
          alt="Dashboard Preview"
          width={1400}
          height={720}
          className="rounded-md grayscale group-hover:grayscale-0 transition duration-200 object-cover object-left-top h-full"
          priority
        />
        <div className="absolute inset-0 z-20 bg-transparent group-hover:bg-black/0 transition-all duration-200 flex items-center justify-center">
          <div className="md:h-32 md:w-32 h-16 w-16 bg-black/50 rounded-full backdrop-blur-sm flex items-center justify-center">
            <PlayIcon className="md:h-10 md:w-10 h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </ContainerScroll>
  );
};

const PlayIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 384 512"
      className={className}
      fill="currentColor"
    >
      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </svg>
  );
};