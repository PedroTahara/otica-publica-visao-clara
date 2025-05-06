
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
            Visão Clara para Todos
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            O programa Ótica Pública tem como missão promover acesso a óculos e cuidados visuais para todos, 
            garantindo que a falta de recursos não seja um impedimento para enxergar o mundo com clareza.
          </p>
          <Button 
            size="lg" 
            className="text-lg animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
