import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        {/* Animated overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/20 to-blue-900/40" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transformación Digital para tu Empresa
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
            En Solware, convertimos desafíos digitales en oportunidades de crecimiento. 
            Somos expertos en desarrollo de software, automatización y consultoría tecnológica, 
            impulsando la innovación en Venezuela y Latinoamérica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center group">
              Iniciar Proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Ver Portafolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}