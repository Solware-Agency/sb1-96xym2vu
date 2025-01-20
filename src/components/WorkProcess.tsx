import React from 'react';
import { Lightbulb, ClipboardList, Code2, TestTube2, LineChart, Headphones } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProcessStep = ({ icon, title, description, index }: ProcessStepProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg text-center fade-in-up stagger-1 hover:shadow-xl transition-all duration-300">
    <div className="flex justify-center mb-4">
      <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const processSteps = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Obtener Ideas",
    description: "Nos reunimos contigo para entender tus necesidades."
  },
  {
    icon: <ClipboardList className="h-8 w-8" />,
    title: "Planificar",
    description: "Buscamos una estrategia basada en tus objetivos."
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Ejecutar",
    description: "Empezamos a trabajar en tu proyecto de inmediato."
  },
  {
    icon: <TestTube2 className="h-8 w-8" />,
    title: "Testing",
    description: "Realizamos pruebas para asegurar la calidad."
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Estadísticas",
    description: "Organizamos tus datos para mejorar tu negocio."
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Soporte",
    description: "Te damos accceso y te brindamos soporte."
  }
];

export default function WorkProcess() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 to-blue-600" id="proceso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4 relative">
            Proceso de Trabajo
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 
              bg-white rounded-full"></span>
          </h2>
          <p className="text-xl text-white/90">
            Te contamos cómo trabajamos para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}