import React from 'react';
import { Target, Route, Lightbulb, Cog, ClipboardList } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Establecer metas claras",
    icon: <Target className="h-6 w-6" />,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    number: "2",
    title: "Crear plan de acción",
    icon: <Route className="h-6 w-6" />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    number: "3",
    title: "Desarrollar habilidades",
    icon: <Lightbulb className="h-6 w-6" />,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    number: "4",
    title: "Implementar soluciones",
    icon: <Cog className="h-6 w-6" />,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600"
  },
  {
    number: "5",
    title: "Evaluar el progreso",
    icon: <ClipboardList className="h-6 w-6" />,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

// El resto del componente permanece igual
const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="proceso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            El camino para alcanzar tus metas profesionales
          </h2>
        </div>

        <div className="relative pt-32 pb-40">
          {/* Líneas conectoras (solo visibles en desktop) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1200 300"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Línea de fondo para efecto de trazo */}
              <path
                d="M100,150 C250,150 300,50 450,50 S600,250 750,250 S900,50 1100,50"
                stroke="#E5E7EB"
                strokeWidth="4"
                fill="none"
                className="path-background"
              />
              {/* Línea animada */}
              <path
                d="M100,150 C250,150 300,50 450,50 S600,250 750,250 S900,50 1100,50"
                stroke="url(#gradientLine)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className="path-animation"
              />
              {/* Definición del gradiente */}
              <defs>
                <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Pasos del proceso */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center ${
                  index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-64'
                }`}
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${index * 0.2}s forwards`
                }}
              >
                {/* Número y círculo */}
                <div className={`relative w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mb-8 
                  transform transition-all duration-300 hover:scale-110
                  border-2 border-white shadow-md group z-20`}>
                  <span className="text-2xl font-bold text-gray-800 group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  {/* Círculo de fondo para el efecto de brillo */}
                  <div className="absolute inset-0 rounded-full bg-white/50 blur-md -z-10 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Icono */}
                <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center mb-6 
                  transform transition-all duration-300 hover:rotate-12 hover:scale-110 hover:shadow-md
                  border border-white/50`}>
                  {React.cloneElement(step.icon, {
                    className: `h-6 w-6 ${step.iconColor}`
                  })}
                </div>

                {/* Título */}
                <div className="bg-white rounded-xl p-3 shadow-lg transform hover:scale-105 
                  transition-all duration-300 hover:shadow-xl max-w-[200px]">
                  <h3 className="text-center text-lg font-semibold text-gray-800 whitespace-normal">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .path-background {
          opacity: 0.3;
        }

        .path-animation {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: drawPath 3s ease-out forwards;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkProcess;