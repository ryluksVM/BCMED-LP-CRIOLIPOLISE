export function TechnologySection() {
    return (
        <section id="technology" className="relative w-full overflow-hidden bg-[#101728] pt-12 md:pt-24 pb-12 md:pb-24">
          <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-white">
                Tecnologia de Criolipólise
              </h2>
              <p className="text-gray-200 text-base md:text-lg">
                A tecnologia de Criolipólise garante resultados superiores na redução de gordura localizada e ainda oferece um dos melhores retornos financeiros do mercado. Com nossos equipamentos, sua clínica aumenta a eficiência, atrai mais clientes e alcança lucro em pouco tempo.
              </p>
            </div>
            <div className="mt-12 grid gap-8 grid-cols-1 max-w-sm mx-auto">
                <div className="text-center">
                    <p className="text-5xl font-bold text-primary">3 a 6 meses</p>
                    <p className="text-xl text-white mt-2">Retorno do Investimento (ROI)</p>
                    <p className="text-gray-400 mt-1 text-sm">Essa é uma estimativa geral, com base na média de valores dos equipamentos e 1 cliente por dia.</p>
                </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto text-left space-y-6 border-t border-gray-700 pt-12">
              <h3 className="text-2xl font-bold font-headline text-white text-center">
                Como Funciona a Criolipólise?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">1. Resfriamento Controlado</h4>
                  <p className="text-gray-300 mt-2">
                    O equipamento acopla-se à área desejada e inicia um resfriamento intenso e controlado das células de gordura, sem afetar a pele ou outros tecidos.
                  </p>
                </div>
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">2. Cristalização da Gordura</h4>
                  <p className="text-gray-300 mt-2">
                    Com o frio, as células de gordura (adipócitos) se cristalizam e morrem, um processo conhecido como apoptose.
                  </p>
                </div>
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">3. Eliminação Natural</h4>
                  <p className="text-gray-300 mt-2">
                    Após o tratamento, o sistema imunológico identifica as células de gordura mortas como resíduos e as elimina naturalmente do corpo ao longo de semanas.
                  </p>
                </div>
                <div className="bg-[#272E49] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-primary">4. Resultados Visíveis</h4>
                  <p className="text-gray-300 mt-2">
                    O resultado é uma redução significativa e permanente da gordura localizada na área tratada, com o contorno corporal mais definido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
