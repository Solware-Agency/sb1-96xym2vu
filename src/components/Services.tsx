import React, { useState } from 'react';
import { Settings, Code2, Users, Server, Megaphone, Cuboid as Cube } from 'lucide-react';
import ServiceFlipCard from './ServiceFlipCard';

const services = [
  {
    icon: <Cube className="h-6 w-6 text-white" />,
    title: "Digitalización 3D y Capturas 360°",
    description: "Creamos experiencias inmersivas y visualizaciones interactivas de alta calidad.",
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=800",
    details: [
      {
        title: "Modelado 3D Profesional",
        description: "Creación de modelos tridimensionales detallados para productos y espacios, utilizando tecnología avanzada para una representación precisa."
      },
      {
        title: "Tours Virtuales 360°",
        description: "Experiencias interactivas que permiten explorar espacios desde cualquier lugar, ideales para inmobiliarias y negocios."
      },
      {
        title: "Visualización Arquitectónica",
        description: "Transformación de planos en visualizaciones 3D impactantes, facilitando la comprensión del diseño y la funcionalidad."
      },
      {
        title: "Renderizado en 4K",
        description: "Imágenes de alta resolución que destacan cada detalle, perfectas para presentaciones y marketing."
      }
    ]
  },
  {
    icon: <Settings className="h-6 w-6 text-white" />,
    title: "Automatización de Procesos",
    description: "Optimiza tus operaciones con soluciones automatizadas inteligentes.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
    details: [
      {
        title: "Flujos de Trabajo Automatizados",
        description: "Diseñamos y configuramos flujos de trabajo que automatizan tareas repetitivas, mejorando la eficiencia operativa."
      },
      {
        title: "Integración de Sistemas",
        description: "Conectamos diferentes plataformas y aplicaciones para crear un ecosistema digital cohesivo y eficiente."
      },
      {
        title: "Reducción de Errores",
        description: "Minimizamos errores humanos mediante la automatización de procesos críticos y validaciones automáticas."
      },
      {
        title: "Análisis y Optimización",
        description: "Monitoreamos y optimizamos continuamente los procesos automatizados para máximo rendimiento."
      }
    ]
  },
  {
    icon: <Code2 className="h-6 w-6 text-white" />,
    title: "Desarrollo Web y Móvil",
    description: "Creamos aplicaciones modernas y responsivas para tu negocio.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    details: [
      {
        title: "Diseño UX/UI Intuitivo",
        description: "Creamos interfaces atractivas y fáciles de usar que mejoran la experiencia del usuario."
      },
      {
        title: "Desarrollo Full-Stack",
        description: "Implementamos soluciones completas que integran front-end y back-end de manera eficiente."
      },
      {
        title: "Aplicaciones Progresivas",
        description: "Desarrollamos PWAs que funcionan en cualquier dispositivo y ofrecen una experiencia nativa."
      },
      {
        title: "Optimización SEO",
        description: "Aseguramos que tus aplicaciones sean visibles y rankeen bien en los motores de búsqueda."
      }
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "CRM y Gestión",
    description: "Gestiona tus relaciones con clientes de manera efectiva.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    details: [
      {
        title: "Seguimiento de Clientes",
        description: "Sistema integral para seguimiento y gestión de las interacciones con clientes en todo el ciclo de vida."
      },
      {
        title: "Automatización de Marketing",
        description: "Herramientas para automatizar campañas de marketing y nutrir leads de manera efectiva."
      },
      {
        title: "Análisis de Datos",
        description: "Insights detallados sobre el comportamiento de clientes para tomar decisiones informadas."
      },
      {
        title: "Reportes Personalizados",
        description: "Generación de informes adaptados a tus necesidades específicas de negocio."
      }
    ]
  },
  {
    icon: <Server className="h-6 w-6 text-white" />,
    title: "Infraestructura Cloud",
    description: "Moderniza tu infraestructura tecnológica en la nube.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    details: [
      {
        title: "Migración a la Nube",
        description: "Transición suave y segura de sistemas locales a infraestructura cloud moderna."
      },
      {
        title: "Escalabilidad Automática",
        description: "Configuración de recursos que se adaptan automáticamente a la demanda."
      },
      {
        title: "Seguridad Avanzada",
        description: "Implementación de múltiples capas de seguridad para proteger datos y aplicaciones."
      },
      {
        title: "Respaldos Automáticos",
        description: "Sistema de copias de seguridad automatizadas para garantizar la continuidad del negocio."
      }
    ]
  },
  {
    icon: <Megaphone className="h-6 w-6 text-white" />,
    title: "Marketing Digital",
    description: "Impulsa tu presencia online y alcanza más clientes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    details: [
      {
        title: "Estrategias SEO/SEM",
        description: "Optimización para motores de búsqueda y gestión de campañas publicitarias efectivas."
      },
      {
        title: "Marketing de Contenidos",
        description: "Creación y distribución de contenido relevante que atrae y retiene a tu audiencia."
      },
      {
        title: "Gestión de Redes Sociales",
        description: "Administración profesional de tus perfiles sociales para maximizar el engagement."
      },
      {
        title: "Análisis y Reportes",
        description: "Seguimiento detallado de métricas y KPIs para optimizar resultados."
      }
    ]
  }
];

export default function Services() {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            Nuestros Servicios
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones tecnológicas adaptadas a tus necesidades empresariales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceFlipCard
              key={index}
              {...service}
              isFlipped={flippedCardIndex === index}
              onFlip={() => handleFlip(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}