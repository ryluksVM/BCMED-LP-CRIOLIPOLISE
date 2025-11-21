import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header({ onConsultantClick }: { onConsultantClick: () => void }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#000929] shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 max-w-7xl">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="https://www.bcmed.com.br/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="https://www.bcmed.com.br/tema/bcmed-vue/dist/img/logo-nova-branca.3b3ff389.png"
                alt="BCMED Logo"
                width={180}
                height={48}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>
            <Image
                src="https://precogarantido.bc.med.br/assets/preco-garantido-logo-DH0gIqp7.png"
                alt="Preço Garantido Logo"
                width={150}
                height={48}
                className="h-10 w-auto hidden sm:block"
                priority
              />
          </div>
          
          <div className="flex items-center gap-4">
            <Image
              src="https://precogarantido.bc.med.br/assets/preco-garantido-logo-DH0gIqp7.png"
              alt="Preço Garantido Logo"
              width={150}
              height={48}
              className="h-10 w-auto sm:hidden"
              priority
            />
            <Button 
              variant="default" 
              size="lg" 
              className="hidden sm:flex items-center gap-2"
              onClick={onConsultantClick}
            >
              <Image 
                src="https://res.cloudinary.com/dutjqvesw/image/upload/v1763466821/hd-black-outline-whatsapp-wa-whats-app-logo-icon-png-701751695123401u6ds3xyxsg_-_Editado_rerhhf.png"
                alt="WhatsApp Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="sm:inline">Fale com um consultor</span>
            </Button>
          </div>
      </div>
    </header>
  );
}
