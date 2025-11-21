"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "5511999134744";
const GREETING_MESSAGE = "Olá, vim do site da LP de PREÇO GARANTIDO e quero condições de BLACK para o meu equipamento";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GREETING_MESSAGE)}`;

export function ConsultantModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] rounded-2xl">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-2xl font-bold">Fale com um Consultor BCMED</DialogTitle>
          <DialogDescription className="text-base text-center text-muted-foreground pt-2">
            Tire todas as suas dúvidas sobre o Preço Garantido e descubra condições exclusivas
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full h-14 text-lg font-bold rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white"
              style={{
                background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)'
              }}
            >
              <Image
                src="https://res.cloudinary.com/dutjqvesw/image/upload/v1763466821/hd-black-outline-whatsapp-wa-whats-app-logo-icon-png-701751695123401u6ds3xyxsg_-_Editado_rerhhf.png"
                alt="WhatsApp Icon"
                width={24}
                height={24}
                className="mr-3 filter brightness-0 invert"
              />
              Iniciar Conversa
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
