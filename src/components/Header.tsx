import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#automatizacion', label: 'Automatización' },
  { href: '#contacto', label: 'Contacto' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (!element) return;
    
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Solware</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className={`transition-colors duration-200 ${
                  activeSection === href.replace('#', '')
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Consulta Gratis
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === href.replace('#', '')
                    ? 'text-blue-600 bg-blue-50 font-medium'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}