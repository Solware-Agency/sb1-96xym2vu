import React from 'react';
import { ArrowRight, Bot, Zap, BarChart2, FileSpreadsheet, Clock, Database } from 'lucide-react';

interface AutomationCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const AutomationCard: React.FC<AutomationCardProps> = ({ title, description, image, icon }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <div className="bg-blue-600/90 p-2 rounded-lg backdrop-blur-sm">
          {icon}
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/btn">
        Solicitar información
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const automations = [
  {
    title: "Automatización de Facturación",
    description: "Sistema inteligente que automatiza la generación, envío y seguimiento de facturas, reduciendo errores y ahorrando tiempo valioso.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    icon: <FileSpreadsheet className="h-6 w-6 text-white" />
  },
  {
    title: "Gestión de Inventario Predictivo",
    description: "IA que predice niveles óptimos de inventario y automatiza pedidos basándose en patrones históricos y tendencias.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    icon: <Database className="h-6 w-6 text-white" />
  },
  {
    title: "Chatbots de Atención 24/7",
    description: "Asistentes virtuales que manejan consultas de clientes automáticamente, proporcionando respuestas instantáneas y derivación inteligente.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    icon: <Bot className="h-6 w-6 text-white" />
  },
  {
    title: "Automatización de Marketing",
    description: "Campañas personalizadas que se adaptan automáticamente según el comportamiento del usuario y métricas en tiempo real.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <BarChart2 className="h-6 w-6 text-white" />
  },
  {
    title: "Procesos de RR.HH.",
    description: "Simplificación de reclutamiento, onboarding y gestión de personal mediante flujos de trabajo automatizados.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    icon: <Clock className="h-6 w-6 text-white" />
  },
  {
    title: "Integración de Sistemas",
    description: "Conectamos y sincronizamos automáticamente diferentes plataformas y aplicaciones empresariales para un flujo de datos perfecto.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    icon: <Zap className="h-6 w-6 text-white" />
  }
];

const Automation: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="automatizacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            Automatización Empresarial
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Transformamos procesos manuales en flujos de trabajo eficientes y automatizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((automation, index) => (
            <AutomationCard
              key={index}
              {...automation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;