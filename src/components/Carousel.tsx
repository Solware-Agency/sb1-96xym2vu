import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: {
    id: number;
    title: string;
    description: string;
    image: string;
    icon?: React.ReactNode;
  }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const interval = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, isHovered, autoPlayInterval]);

  const getItemStyle = (index: number) => {
    const diff = index - currentIndex;
    const distance = Math.abs(diff);
    let translateX = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;
    let blur = 0;

    if (diff === 0) {
      // Elemento actual
      translateX = 0;
      scale = 1;
      opacity = 1;
      zIndex = 3;
      blur = 0;
    } else if (diff === 1 || (diff === -items.length + 1)) {
      // Elemento a la derecha
      translateX = 100;
      scale = 0.7;
      opacity = 0.3;
      zIndex = 2;
      blur = 3;
    } else if (diff === -1 || (diff === items.length - 1)) {
      // Elemento a la izquierda
      translateX = -100;
      scale = 0.7;
      opacity = 0.3;
      zIndex = 2;
      blur = 3;
    } else {
      // Elementos más alejados
      translateX = diff > 0 ? 200 : -200;
      scale = 0.5;
      opacity = 0;
      zIndex = 1;
      blur = 5;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
      filter: `blur(${blur}px)`,
      transition: 'all 0.5s ease-out'
    };
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div 
        className="relative w-full overflow-hidden h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        <div className="absolute w-full h-full flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="absolute w-full max-w-md px-4"
              style={getItemStyle(index)}
              aria-hidden={index !== currentIndex}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {item.icon && (
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-blue-600/90 p-2 rounded-lg backdrop-blur-sm">
                        {item.icon}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full
            bg-white/90 shadow-lg hover:bg-white transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full
            bg-white/90 shadow-lg hover:bg-white transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Indicadores de posición movidos fuera del contenedor principal */}
      <div className="flex items-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;