import React from 'react';
import { Settings, Cuboid as Cube, Code2, Users, Server, Megaphone, ChevronRight, BarChart3 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  stats: {
    value: string;
    label: string;
  };
  index: number;
}

const ServiceCard = ({ icon, title, description, features, stats, index }: ServiceCardProps) => (
  <div 
    className={`bg-white rounded-2xl p-8 shadow-lg card-hover fade-in-up stagger-${index + 1} 
      group hover:shadow-2xl card-gradient relative overflow-hidden
      border border-gray-100 transition-all duration-300 ease-out
      sm:min-h-[400px] click-feedback`}
  >
    <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 
      group-hover:bg-blue-600 transition-all duration-300 ease-out">
      <div className="text-blue-600 group-hover:text-white transition-colors icon-hover">
        {icon}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 mb-6 transition-colors">{description}</p>
    
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start group/item">
          <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0 
            transition-transform group-hover/item:translate-x-1" />
          <span className="text-gray-600 ml-2 transition-colors">{feature}</span>
        </li>
      ))}
    </ul>

    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
      <div className="flex items-center">
        <BarChart3 className="h-5 w-5 text-blue-600 mr-2 transition-transform 
          group-hover:scale-110" />
        <div>
          <p className="font-bold text-gray-900">{stats.value}</p>
          <p className="text-sm text-gray-500">{stats.label}</p>
        </div>
      </div>
      
      <button className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg 
        transition-all duration-300 flex items-center hover:px-5 focus-ring btn-hover">
        Saber más
        <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

const services = [
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Automatización y Optimización",
    description: "Optimizamos tus procesos empresariales mediante soluciones automatizadas inteligentes.",
    features: [
      "Automatización de procesos (RPA)",
      "Optimización de flujos de trabajo",
      "Integración de sistemas"
    ],
    stats: {
      value: "+45%",
      label: "Eficiencia mejorada"
    }
  },
  {
    icon: <Cube className="h-8 w-8" />,
    title: "Digitalización 3D y Capturas 360°",
    description: "Creamos experiencias inmersivas y visualizaciones interactivas de alta calidad.",
    features: [
      "Modelado 3D profesional",
      "Tours virtuales 360°",
      "Visualización arquitectónica"
    ],
    stats: {
      value: "4K",
      label: "Calidad de captura"
    }
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Desarrollo y Gestión Web",
    description: "Desarrollamos soluciones web personalizadas y optimizadas para tu negocio.",
    features: [
      "Desarrollo web full-stack",
      "Aplicaciones web progresivas",
      "Optimización de rendimiento"
    ],
    stats: {
      value: "99.9%",
      label: "Uptime garantizado"
    }
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Gestión de Clientes y CRM",
    description: "Implementamos sistemas CRM personalizados para mejorar la relación con tus clientes.",
    features: [
      "Gestión de relaciones",
      "Automatización de marketing",
      "Análisis de datos de clientes"
    ],
    stats: {
      value: "+60%",
      label: "Retención de clientes"
    }
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Infraestructura y Soporte",
    description: "Proporcionamos soluciones de infraestructura robustas y soporte técnico continuo.",
    features: [
      "Cloud computing",
      "Seguridad informática",
      "Soporte técnico 24/7"
    ],
    stats: {
      value: "24/7",
      label: "Soporte disponible"
    }
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "Marketing Digital",
    description: "Estrategias de marketing digital efectivas para aumentar tu presencia online.",
    features: [
      "SEO y SEM",
      "Marketing de contenidos",
      "Análisis y métricas"
    ],
    stats: {
      value: "+120%",
      label: "ROI promedio"
    }
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            Nuestros Servicios
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 
              bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones integrales de transformación digital para impulsar tu negocio hacia el futuro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.7s' }}>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 
            transition-all duration-300 inline-flex items-center hover:px-10 
            hover:shadow-lg hover:shadow-blue-600/20 click-feedback focus-ring">
            Consulta Gratuita
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}