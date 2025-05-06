
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-16 md:py-24 relative overflow-hidden">
      {/* Background image with watermark effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
          alt="Pessoa sorrindo usando óculos"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Content overlay */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
            Visão Para Todos
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-800 mb-8 animate-fade-in font-medium" 
            style={{
              animationDelay: '0.2s'
            }}
          >
            O programa Ótica Pública tem como missão promover acesso a óculos e cuidados visuais para todos, 
            garantindo que todas as pessoas possam enxergar o mundo com clareza.
          </p>
          <Button 
            size="lg" 
            className="text-lg animate-fade-in" 
            style={{
              animationDelay: '0.4s'
            }}
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
