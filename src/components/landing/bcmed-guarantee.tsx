export function BcmedGuaranteeSection() {
  return (
    <section id="bcmed-guarantee" className="w-full py-12 md:py-24 bg-[#101728]">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-white">
            Uma garantia que só a <span className="text-primary">BCMED</span> pode oferecer!
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl">
            Só quem tem mais de 13 anos de mercado e a confiança de mais de 320 mil profissionais pode garantir o melhor negócio para a sua clínica. Nós não vendemos máquinas. Nós entregamos o melhor suporte do Brasil para você faturar.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-primary">+13</p>
            <p className="text-xl text-white">Anos de Mercado</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">+320 Mil</p>
            <p className="text-xl text-white">Clientes</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">#1</p>
            <p className="text-xl text-white">Pós-Venda do Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
