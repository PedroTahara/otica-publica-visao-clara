
const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefícios que vão além da visão
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Quando fornecemos óculos a quem precisa, estamos oferecendo muito mais do que apenas 
              uma ferramenta para enxergar melhor. Estamos proporcionando:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-otica-blue flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-gray-900">Autoestima renovada</h3>
                  <p className="text-gray-700 mt-1">
                    A capacidade de enxergar claramente devolve a confiança e revitaliza a imagem pessoal.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-otica-blue flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-gray-900">Confiança no dia a dia</h3>
                  <p className="text-gray-700 mt-1">
                    Com uma visão adequada, as atividades diárias se tornam mais seguras e prazerosas.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-otica-blue flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-gray-900">Senso de pertencimento</h3>
                  <p className="text-gray-700 mt-1">
                    Incluímos pessoas em atividades sociais e culturais que antes eram dificultadas pela baixa visão.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg bg-gray-100 p-8">
            <blockquote className="italic text-lg text-gray-700">
              "Quando recebi meus óculos, foi como se um novo mundo se abrisse. Agora posso ler para meus netos e ver seus sorrisos com clareza. Este programa mudou minha vida de maneiras que eu nunca imaginei."
            </blockquote>
            <div className="mt-4 text-right">
              <p className="font-semibold text-gray-900">Maria Silva</p>
              <p className="text-sm text-gray-600">Beneficiária do Programa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
