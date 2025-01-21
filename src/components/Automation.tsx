import React, { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Bot, Zap, BarChart2, FileSpreadsheet, Clock, Database } from 'lucide-react';

const automations = [
  {
    id: 1,
    title: "Automatización de Facturación",
    description: "Sistema inteligente que automatiza la generación, envío y seguimiento de facturas, reduciendo errores y ahorrando tiempo valioso.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    icon: <FileSpreadsheet className="h-6 w-6 text-white" />
  },
  {
    id: 2,
    title: "Gestión de Inventario Predictivo",
    description: "IA que predice niveles óptimos de inventario y automatiza pedidos basándose en patrones históricos y tendencias.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    icon: <Database className="h-6 w-6 text-white" />
  },
  {
    id: 3,
    title: "Chatbots de Atención 24/7",
    description: "Asistentes virtuales que manejan consultas de clientes automáticamente, proporcionando respuestas instantáneas y derivación inteligente.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    icon: <Bot className="h-6 w-6 text-white" />
  },
  {
    id: 4,
    title: "Automatización de Marketing",
    description: "Campañas personalizadas que se adaptan automáticamente según el comportamiento del usuario y métricas en tiempo real.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <BarChart2 className="h-6 w-6 text-white" />
  },
  {
    id: 5,
    title: "Procesos de RR.HH.",
    description: "Simplificación de reclutamiento, onboarding y gestión de personal mediante flujos de trabajo automatizados.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    icon: <Clock className="h-6 w-6 text-white" />
  },
  {
    id: 6,
    title: "Integración de Sistemas",
    description: "Conectamos y sincronizamos automáticamente diferentes plataformas y aplicaciones empresariales para un flujo de datos perfecto.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    icon: <Zap className="h-6 w-6 text-white" />
  }
];

const Automation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCards = useCallback(() => {
    const prev = (currentIndex - 1 + automations.length) % automations.length;
    const next = (currentIndex + 1) % automations.length;
    return [
      automations[prev],
      automations[currentIndex],
      automations[next]
    ];
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + automations.length) % automations.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % automations.length);
  }, []);

  return (
    <section className="py-12 sm:py-24 bg-gray-50" id="automatizacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 relative">
            Automatización Empresarial
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600">
            Transformamos procesos manuales en flujos de trabajo eficientes y automatizados
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex items-center justify-center">
              {getVisibleCards().map((card, index) => (
                <div
                  key={card.id}
                  className={`transition-all duration-300 ease-out px-2 sm:px-4 ${
                    index === 1
                      ? 'w-full max-w-[280px] sm:max-w-3xl z-20 opacity-100 scale-100'
                      : 'w-full max-w-[240px] sm:max-w-2xl z-10 opacity-40 scale-90 blur-sm'
                  } ${
                    index === 0
                      ? '-translate-x-1/4'
                      : index === 2
                      ? 'translate-x-1/4'
                      : ''
                  }`}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[480px] sm:h-auto">
                    <div className="relative h-36 sm:h-64">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-blue-600/90 p-2 rounded-lg backdrop-blur-sm">
                          {card.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-8 flex flex-col h-[calc(480px-144px)] sm:h-auto">
                      <h3 className="text-base sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-lg text-gray-600 line-clamp-6 sm:line-clamp-none leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 
              rounded-full shadow-lg hover:bg-white transition-colors z-30 transform -translate-x-1/2 sm:translate-x-0"
            aria-label="Anterior"
          >
            <ArrowLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 
              rounded-full shadow-lg hover:bg-white transition-colors z-30 transform translate-x-1/2 sm:translate-x-0"
            aria-label="Siguiente"
          >
            <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
            {automations.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === i 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
                aria-label={`Ir a la diapositiva ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;