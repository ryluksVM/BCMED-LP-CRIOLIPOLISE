import { Package, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function IntelligentStrategySection({ onConsultantClick }: { onConsultantClick: () => void }) {
  const guarantees = [
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "O equipamento",
      description: "Não corre o risco de ficar sem a tecnologia que seu concorrente já está de olho.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "O melhor preço",
      description: "Com a segurança total do Preço Garantido.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "O faturamento",
      description: "Sai na frente e começa a lucrar antes de todo mundo.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            A estratégia <span className="text-primary">inteligente</span> é comprar agora
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Preço Garantido não segura estoque! O lote Black November é <span className="font-bold text-chart-5">limitado</span> e a procura está gigante. A garantia protege seu bolso se o valor cair, mas se o produto acabar, você perde a <span className="font-bold text-chart-5">oferta</span> e o preço volta ao normal.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-8 md:mt-12">
            <div className="border border-primary/50 rounded-xl p-6 md:p-8 bg-[#1a2035] text-white">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-8">Quem compra agora, garante 3 coisas:</h3>
                <div className="grid gap-8 md:grid-cols-3">
                    {guarantees.map((item) => (
                        <div key={item.title} className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4">
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                            <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="text-center mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#products" className="hidden sm:block">
            <Button size="lg" className="transition-transform duration-300 hover:scale-105 text-base sm:text-lg font-bold px-8 py-5 sm:px-10 sm:py-6">
              Ver ofertas da Black November
            </Button>
          </Link>
          <Button onClick={onConsultantClick} variant="primary" size="lg" className="transition-transform duration-300 hover:scale-105 text-base sm:text-lg font-bold px-8 py-5 sm:px-10 sm:py-6">
            Comprar agora
          </Button>
        </div>
      </div>
    </section>
  );
}
