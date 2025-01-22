import React from 'react';
import { Bot, Zap, BarChart2, FileSpreadsheet, Clock, Database, MessageCircle } from 'lucide-react';
import Carousel from './Carousel';

const automations = [
  {
    id: 1,
    title: "Automatización de Ventas",
    description: "Optimización del seguimiento de leads, programación de campañas y análisis de datos para aumentar la conversión de clientes.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    icon: <BarChart2 className="h-6 w-6 text-white" />
  },
  {
    id: 2,
    title: "CRM Inteligente",
    description: "Sistema centralizado que automatiza la gestión de relaciones con clientes y optimiza el proceso de ventas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <Database className="h-6 w-6 text-white" />
  },
  {
    id: 3,
    title: "Chatbots de Atención 24/7",
    description: "Asistentes virtuales que manejan consultas de clientes automáticamente, proporcionando respuestas instantáneas y derivación inteligente.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    icon: <MessageCircle className="h-6 w-6 text-white" />
  },
  {
    id: 4,
    title: "Email Marketing Automatizado",
    description: "Campañas personalizadas que se adaptan al comportamiento del cliente y optimizan las tasas de conversión.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800",
    icon: <Bot className="h-6 w-6 text-white" />
  },
  {
    id: 5,
    title: "Análisis Predictivo",
    description: "Herramientas de IA que predicen patrones de compra y ayudan a identificar oportunidades de venta.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    icon: <FileSpreadsheet className="h-6 w-6 text-white" />
  },
  {
    id: 6,
    title: "Pipeline de Ventas",
    description: "Gestión automatizada del embudo de ventas para un seguimiento eficiente de oportunidades.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    icon: <Clock className="h-6 w-6 text-white" />
  },
  {
    id: 7,
    title: "Automatización de Facturación",
    description: "Sistema inteligente que automatiza la generación, envío y seguimiento de facturas, reduciendo errores y ahorrando tiempo valioso.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    icon: <Zap className="h-6 w-6 text-white" />
  }
];

const Automation = () => {
  return (
    <section className="py-24 bg-gray-50" id="automatizacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            Automatización de Ventas
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Optimización del seguimiento de leads, programación de campañas y análisis de datos para aumentar la conversión de clientes
          </p>
        </div>

        <Carousel items={automations} />
      </div>
    </section>
  );
};

export default Automation;