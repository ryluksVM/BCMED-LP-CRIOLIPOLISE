"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function WhatsAppFAB({ onConsultantClick }: { onConsultantClick: () => void }) {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 flex items-center justify-center"
      aria-label="Falar com um consultor no WhatsApp"
      onClick={onConsultantClick}
    >
      <Image 
        src="https://res.cloudinary.com/dutjqvesw/image/upload/v1763466821/hd-black-outline-whatsapp-wa-whats-app-logo-icon-png-701751695123401u6ds3xyxsg_-_Editado_rerhhf.png"
        alt="WhatsApp Icon"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    </Button>
  );
}
