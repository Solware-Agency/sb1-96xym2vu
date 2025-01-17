import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Solware</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
            <a href="#proyectos" className="text-gray-700 hover:text-blue-600">Proyectos</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600">Contacto</a>
          </nav>

          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Consulta Gratis
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Servicios</a>
            <a href="#proyectos" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Proyectos</a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Blog</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Contacto</a>
          </div>
        </div>
      )}
    </header>
  );
}