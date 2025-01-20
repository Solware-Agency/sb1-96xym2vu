import React from 'react';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center" id="inicio">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]" />
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Transformación Digital para tu Empresa
            </h1>
            
            <p className="text-xl text-white/90 mb-8 animate-fade-in-delay">
              Automatizamos tus procesos empresariales y potenciamos tu negocio con soluciones 
              tecnológicas innovadoras y personalizadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium 
                hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center
                shadow-lg hover:shadow-xl">
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white 
                rounded-full font-medium hover:bg-white/10 transition-colors duration-300
                flex items-center justify-center">
                Ver demostración
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl 
              animate-fade-in-delay">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <Zap className="h-8 w-8 text-yellow-400" />,
                    title: "Automatización",
                    value: "+60%",
                    label: "más eficiencia"
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-green-400" />,
                    title: "Seguridad",
                    value: "99.9%",
                    label: "tiempo activo"
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-purple-400" />,
                    title: "Ahorro",
                    value: "-40%",
                    label: "en costos"
                  },
                  {
                    icon: <ArrowRight className="h-8 w-8 text-blue-400" />,
                    title: "Escalabilidad",
                    value: "∞",
                    label: "sin límites"
                  }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white/5">
                    <div className="inline-flex items-center justify-center w-12 h-12 
                      rounded-lg bg-white/10 mb-3">
                      {stat.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}