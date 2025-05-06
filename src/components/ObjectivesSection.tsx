
import { BookOpen, Users, Briefcase, Heart } from 'lucide-react';

const ObjectivesSection = () => {
  const objectives = [
    {
      title: "Inclusão Social",
      description: "Promovemos o acesso igualitário a recursos visuais, independente da condição socioeconômica.",
      icon: Users
    },
    {
      title: "Acesso à Educação",
      description: "Facilitamos o aprendizado através da melhoria da visão, crucial para o desenvolvimento educacional.",
      icon: BookOpen
    },
    {
      title: "Produtividade Pessoal",
      description: "Ajudamos a melhorar o desempenho no trabalho e nas atividades diárias com uma visão adequada.",
      icon: Briefcase
    },
    {
      title: "Saúde Visual Comunitária",
      description: "Incentivamos o cuidado preventivo com a saúde dos olhos em comunidades de todo o país.",
      icon: Heart
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Objetivos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Trabalhamos para criar um impacto positivo duradouro na vida das pessoas através de quatro pilares principais:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <div 
              key={objective.title} 
              className="objective-card flex flex-col items-center text-center"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <objective.icon className="objective-icon" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{objective.title}</h3>
              <p className="text-gray-700">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
