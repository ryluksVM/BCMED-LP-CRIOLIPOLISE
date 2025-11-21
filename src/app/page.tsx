"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { ProductsSection } from "@/components/landing/products";
import { TechnologySection } from "@/components/landing/technology";
import { IntelligentStrategySection } from "@/components/landing/intelligent-strategy";
import { WhatsAppFAB } from "@/components/whatsapp-fab";
import { BcmedGuaranteeSection } from "@/components/landing/bcmed-guarantee";
import { ConsultantModal } from "@/components/consultant-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onConsultantClick={() => setIsModalOpen(true)} />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <TechnologySection />
        <IntelligentStrategySection onConsultantClick={() => setIsModalOpen(true)} />
        <BcmedGuaranteeSection />
      </main>

      <footer className="bg-background text-foreground py-6">
        <div className="container text-center max-w-7xl mx-auto px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} Black November. Todos os direitos reservados.</p>
        </div>
      </footer>
      
      <WhatsAppFAB onConsultantClick={() => setIsModalOpen(true)} />
      <ConsultantModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
