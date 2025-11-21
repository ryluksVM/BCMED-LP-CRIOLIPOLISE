export function TechnologySection() {
    return (
        <section id="technology" className="relative w-full overflow-hidden bg-[#101728] pt-12 md:pt-24 pb-12 md:pb-24">
          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-white">
                Tecnologia de Endolaser
              </h2>
              <p className="text-gray-200 text-base md:text-lg">
                A tecnologia de Endolaser garante resultados superiores na redução de gordura localizada e ainda oferece um dos melhores retornos financeiros do mercado. Com nossos equipamentos, sua clínica aumenta a eficiência, atrai mais clientes e alcança lucro em pouco tempo.
              </p>
            </div>
            <div className="mt-12 grid gap-8 grid-cols-1 max-w-sm mx-auto">
                <div className="text-center">
                    <p className="text-5xl font-bold text-primary">7 a 10 meses</p>
                    <p className="text-xl text-white mt-2">Retorno do Investimento (ROI)</p>
                    <p className="text-gray-400 mt-1 text-sm">Essa é uma estimativa geral, com base na média de valores dos equipamentos e 3 clientes ao dia.</p>
                </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto text-left space-y-6 border-t border-gray-700 pt-12">
              <h3 className="text-2xl font-bold font-headline text-white text-center">
                Como Funciona o Endolaser?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">1. Inserção da Fibra Óptica</h4>
                  <p className="text-gray-300 mt-2">
                    Uma fina fibra óptica é inserida sob a pele na área a ser tratada.
                  </p>
                </div>
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">2. Emissão de Laser</h4>
                  <p className="text-gray-300 mt-2">
                    O laser emitido pela fibra óptica aquece e destrói as células de gordura, além de estimular a produção de colágeno.
                  </p>
                </div>
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">3. Eliminação da Gordura</h4>
                  <p className="text-gray-300 mt-2">
                    A gordura destruída é eliminada naturalmente pelo organismo.
                  </p>
                </div>
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">4. Efeito Lifting</h4>
                  <p className="text-gray-300 mt-2">
                    A produção de colágeno promove a retração da pele, resultando em um efeito lifting e uma pele mais firme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
