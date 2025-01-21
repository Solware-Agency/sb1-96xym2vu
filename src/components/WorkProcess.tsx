import React, { useState } from 'react';
import { 
  Lightbulb, 
  ClipboardList, 
  Code2, 
  TestTube2,
  LineChart,
  Headphones,
  ChevronRight,
  X
} from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  details: {
    title: string;
    description: string;
  }[];
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Descubrimiento",
    description: "Analizamos tus necesidades y objetivos para crear una estrategia personalizada",
    color: "from-blue-500 to-blue-600",
    details: [
      {
        title: "Reunión Inicial",
        description: "Sesión detallada para entender tus metas y desafíos específicos."
      },
      {
        title: "Análisis de Requisitos",
        description: "Evaluación profunda de necesidades técnicas y operativas."
      },
      {
        title: "Investigación de Mercado",
        description: "Estudio del sector y competencia para identificar oportunidades."
      }
    ]
  },
  {
    id: 2,
    icon: <ClipboardList className="h-8 w-8" />,
    title: "Planificación",
    description: "Desarrollamos un plan estratégico detallado con objetivos claros",
    color: "from-purple-500 to-purple-600",
    details: [
      {
        title: "Definición de Alcance",
        description: "Establecimiento claro de objetivos y entregables del proyecto."
      },
      {
        title: "Cronograma",
        description: "Planificación detallada de tiempos y recursos necesarios."
      },
      {
        title: "Metodología",
        description: "Selección del enfoque más adecuado para tu proyecto."
      }
    ]
  },
  {
    id: 3,
    icon: <Code2 className="h-8 w-8" />,
    title: "Desarrollo",
    description: "Implementamos soluciones tecnológicas de última generación",
    color: "from-indigo-500 to-indigo-600",
    details: [
      {
        title: "Desarrollo Ágil",
        description: "Implementación iterativa con feedback continuo."
      },
      {
        title: "Control de Calidad",
        description: "Testing riguroso en cada fase del desarrollo."
      },
      {
        title: "Optimización",
        description: "Mejora continua del rendimiento y la experiencia."
      }
    ]
  },
  {
    id: 4,
    icon: <TestTube2 className="h-8 w-8" />,
    title: "Testing",
    description: "Realizamos pruebas exhaustivas para asegurar la máxima calidad",
    color: "from-amber-500 to-amber-600",
    details: [
      {
        title: "Pruebas Unitarias",
        description: "Verificación detallada de cada componente individual."
      },
      {
        title: "Testing de Integración",
        description: "Validación de la interacción entre diferentes módulos."
      },
      {
        title: "Pruebas de Usuario",
        description: "Evaluación de la experiencia del usuario final."
      }
    ]
  },
  {
    id: 5,
    icon: <LineChart className="h-8 w-8" />,
    title: "Estadísticas",
    description: "Organizamos y analizamos datos para optimizar tu negocio",
    color: "from-green-500 to-green-600",
    details: [
      {
        title: "Análisis de Datos",
        description: "Procesamiento y visualización de métricas clave."
      },
      {
        title: "Reportes Personalizados",
        description: "Informes detallados adaptados a tus necesidades."
      },
      {
        title: "Optimización Continua",
        description: "Mejora constante basada en datos reales."
      }
    ]
  },
  {
    id: 6,
    icon: <Headphones className="h-8 w-8" />,
    title: "Soporte",
    description: "Te brindamos acceso y acompañamiento continuo",
    color: "from-rose-500 to-rose-600",
    details: [
      {
        title: "Soporte Técnico 24/7",
        description: "Asistencia permanente para resolver cualquier incidencia."
      },
      {
        title: "Capacitación",
        description: "Entrenamiento completo para tu equipo."
      },
      {
        title: "Mantenimiento",
        description: "Actualizaciones y mejoras continuas del sistema."
      }
    ]
  }
];

const WorkProcess: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (step: ProcessStep) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStep(null), 300);
  };

  return (
    <section className="py-16 bg-gray-50" id="proceso">
      {/* Video Banner - Reduced height by 30% */}
      <div className="relative w-full h-48 sm:h-64 mb-16 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
          loading="lazy"
        >
          <source 
            src="https://player.vimeo.com/external/492714335.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d455d5576d838e837&profile_id=165&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Un enfoque sistemático y eficiente para transformar tu visión en realidad
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="group relative"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`
              }}
            >
              <div 
                className={`h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                  transform hover:scale-105 transition-all duration-300 cursor-pointer
                  border-2 border-transparent hover:border-blue-500`}
                onClick={() => openModal(step)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} 
                  flex items-center justify-center mb-6 transform group-hover:rotate-6 
                  transition-transform duration-300`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 
                  transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>

                <button 
                  className="inline-flex items-center text-blue-600 font-medium 
                    group-hover:text-blue-700 transition-colors duration-300"
                >
                  Ver más
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 
                    transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedStep && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 flex items-center justify-center">
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
              onClick={closeModal}
            />

            <div 
              className={`relative bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl 
                transform transition-all duration-300 ${
                isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 
                  transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedStep.color} 
                flex items-center justify-center mb-6`}>
                <div className="text-white">
                  {selectedStep.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedStep.title}
              </h3>

              <div className="space-y-6">
                {selectedStep.details.map((detail, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl"
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.4s ease-out ${index * 0.1}s forwards`
                    }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {detail.title}
                    </h4>
                    <p className="text-gray-600">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WorkProcess;