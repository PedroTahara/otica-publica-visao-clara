
import { useState, useEffect } from "react";
import { Glasses } from "lucide-react";

const ImpactCounter = () => {
  const [count, setCount] = useState(0);
  const targetCount = 15330;
  const duration = 2000; // milliseconds
  const frameRate = 60;
  const totalFrames = (duration / 1000) * frameRate;
  const increment = targetCount / totalFrames;

  useEffect(() => {
    let currentCount = 0;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      currentCount = Math.min(Math.round(frame * increment), targetCount);
      setCount(currentCount);

      if (currentCount >= targetCount) {
        clearInterval(counter);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="counter-gradient py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-count-up">
          <Glasses className="w-16 h-16 text-otica-blue mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Impacto Real
          </h2>
          <div className="text-5xl md:text-7xl font-bold text-otica-blue my-6">
            {count.toLocaleString('pt-BR')}
          </div>
          <p className="text-xl text-gray-700">
            Óculos entregues e vidas transformadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
