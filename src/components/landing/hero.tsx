import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#101728] after:absolute after:inset-0 after:z-0 after:bg-[radial-gradient(40%_120%_at_50%_100%,hsl(var(--primary)/0.1),transparent_40%)] after:animate-aurora">
       <div className="container relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center md:px-6">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl font-headline">
            Black November: Oferta Antecipada, <span className="text-primary">Preço Garantido!</span>
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Compre agora e se o preço baixar, a gente devolve a diferença.
          </p>
          <Link href="#products">
            <Button variant="primary" size="lg" className="mt-12 text-base font-bold transition-transform duration-300 sm:text-lg hover:scale-105">
              Lista de Produtos Limitados
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
