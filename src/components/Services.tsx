import React from 'react';
import { Settings, Code2, Users, Server, Megaphone, ChevronRight, BarChart3, Cuboid as Cube } from 'lucide-react';

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
    className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg card-hover fade-in-up stagger-${index + 1} 
      group hover:shadow-2xl card-gradient relative overflow-hidden
      border border-gray-100 transition-all duration-300 ease-out
      h-full flex flex-col justify-between`}
  >
    <div>
      <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 sm:mb-6 
        group-hover:bg-blue-600 transition-all duration-300 ease-out">
        <div className="text-blue-600 group-hover:text-white transition-colors icon-hover scale-75 sm:scale-100">
          {icon}
        </div>
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 title-hover">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 transition-colors">{description}</p>
      
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start group/item text-sm sm:text-base">
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0 
              transition-transform group-hover/item:translate-x-1" />
            <span className="text-gray-600 ml-2 transition-colors">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-gray-100">
      <div className="flex items-center">
        <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2 transition-transform 
          group-hover:scale-110" />
        <div>
          <p className="font-bold text-gray-900 text-sm sm:text-base">{stats.value}</p>
          <p className="text-xs sm:text-sm text-gray-500">{stats.label}</p>
        </div>
      </div>
      
      <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-blue-600 text-sm sm:text-base font-medium 
        hover:bg-blue-50 rounded-lg transition-all duration-300 flex items-center 
        hover:px-4 sm:hover:px-5 focus-ring btn-hover">
        Saber más
        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

const services = [
  {
    icon: <Cube className="h-6 w-6" />,
    title: "Digitalización 3D y Capturas 360°",
    description: "Creamos experiencias inmersivas y visualizaciones interactivas de alta calidad.",
    features: [
      "Modelado 3D profesional",
      "Tours virtuales 360°",
      "Visualización arquitectónica",
      "Renderizado en 4K"
    ],
    stats: {
      value: "4K",
      label: "Calidad de captura"
    }
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Automatización de Procesos",
    description: "Optimiza tus operaciones con soluciones automatizadas inteligentes.",
    features: [
      "Flujos de trabajo automatizados",
      "Integración de sistemas",
      "Reducción de errores manuales",
      "Mayor productividad"
    ],
    stats: {
      value: "+60%",
      label: "Eficiencia mejorada"
    }
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Desarrollo Web y Móvil",
    description: "Creamos aplicaciones modernas y responsivas para tu negocio.",
    features: [
      "Diseño UX/UI intuitivo",
      "Desarrollo full-stack",
      "Aplicaciones progresivas",
      "Optimización SEO"
    ],
    stats: {
      value: "100%",
      label: "Satisfacción cliente"
    }
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "CRM y Gestión",
    description: "Gestiona tus relaciones con clientes de manera efectiva.",
    features: [
      "Seguimiento de clientes",
      "Automatización de marketing",
      "Análisis de datos",
      "Reportes personalizados"
    ],
    stats: {
      value: "+45%",
      label: "Retención clientes"
    }
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infraestructura Cloud",
    description: "Moderniza tu infraestructura tecnológica en la nube.",
    features: [
      "Migración a la nube",
      "Escalabilidad automática",
      "Seguridad avanzada",
      "Respaldos automáticos"
    ],
    stats: {
      value: "99.9%",
      label: "Tiempo activo"
    }
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Marketing Digital",
    description: "Impulsa tu presencia online y alcanza más clientes.",
    features: [
      "Estrategias SEO/SEM",
      "Marketing de contenidos",
      "Redes sociales",
      "Análisis de resultados"
    ],
    stats: {
      value: "+85%",
      label: "Alcance digital"
    }
  }
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 relative">
            Nuestros Servicios
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Soluciones tecnológicas adaptadas a tus necesidades empresariales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}