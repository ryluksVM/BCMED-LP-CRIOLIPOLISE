import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from 'next/link';

const products = [
  { 
    name: "Elyon Dual - Laser Subdérmico - Cromatic", 
    price: "3.900,00", 
    image: PlaceHolderImages[0], 
    link: "https://api.whatsapp.com/send?phone=5511999134744&text=Ol%C3%A1,%20vim%20do%20site%20da%20LP%20de%20PRE%C3%87O%20GARANTIDO%20e%20quero%20condi%C3%A7%C3%B5es%20de%20BLACK%20no%20Elyon%20Dual%20-%20Laser%20Subd%C3%A9rmico%20-%20Cromatic"
  },
  { 
    name: "LiftEndo - Endolaser de Alta Potência - Medical San", 
    price: "3.790,00", 
    image: PlaceHolderImages[1], 
    link: "https://api.whatsapp.com/send?phone=5511999134744&text=Ol%C3%A1,%20vim%20do%20site%20da%20LP%20de%20PRE%C3%87O%20GARANTIDO%20e%20quero%20condi%C3%A7%C3%B5es%20de%20BLACK%20no%20LiftEndo%20-%20Endolaser%20de%20Alta%20Pot%C3%AAncia%20-%20Medical%20San"
  },
  { 
    name: "EndoLight - Laser Subdérmico - HTM", 
    price: "2.500,00", 
    image: PlaceHolderImages[2], 
    link: "https://api.whatsapp.com/send?phone=5511999134744&text=Ol%C3%A1,%20vim%20do%20site%20da%20LP%20de%20PRE%C3%87O%20GARANTIDO%20e%20quero%20condi%C3%A7%C3%B5es%20de%20BLACK%20no%20EndoLight%20-%20Laser%20Subd%C3%A9rmico%20-%20HTM"
  },
  {
    name: "Myra - Aparelho de Endolaser - Ibramed",
    price: "2.900,00",
    image: PlaceHolderImages[3],
    link: "https://api.whatsapp.com/send?phone=5511999134744&text=Ol%C3%A1,%20vim%20do%20site%20da%20LP%20de%20PRE%C3%87O%20GARANTIDO%20e%20quero%20condi%C3%A7%C3%B5es%20de%20BLACK%20no%20Myra%20-%20Aparelho%20de%20Endolaser%20-%20Ibramed"
  }
];

export function ProductsSection() {
    return (
        <section id="products" className="relative w-full overflow-hidden bg-[#101728] pt-8 md:pt-12 pb-12 md:pb-24 after:absolute after:inset-0 after:z-0 after:bg-[radial-gradient(40%_100%_at_50%_0%,hsl(var(--primary)/0.1),transparent_40%)] after:animate-aurora">
          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-white">
                Escolha Seu Equipamento de Endolaser
              </h2>
              <p className="text-gray-200 text-base md:text-lg">
                Tecnologia de ponta com condições limitadas
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 max-w-7xl mx-auto">
              {products.map((product) => {
                const productCard = (
                  <Card className="overflow-hidden bg-[#272E49] text-white flex flex-col h-full border-0">
                    <div className="relative w-full aspect-square">
                        <Image
                            alt={product.name}
                            className="object-cover"
                            src={product.image.imageUrl}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                            data-ai-hint={product.image.imageHint}
                        />
                    </div>
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-sm font-bold flex-grow min-h-[3rem]">{product.name}</h3>
                        <div className="mt-2 flex flex-col">
                          <p className="text-sm font-semibold text-white">
                            Parcelas a partir de:
                          </p>
                          <p className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                            R$ {product.price}
                          </p>
                        </div>
                        <div className="mt-4">
                          <div className="bg-primary text-white text-center font-bold py-2 rounded-lg">
                            Ver oferta
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return (
                  <div key={product.name}>
                    {product.link ? (
                      <Link href={product.link} target="_blank" rel="noopener noreferrer">
                        {productCard}
                      </Link>
                    ) : (
                      productCard
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
    )
}
