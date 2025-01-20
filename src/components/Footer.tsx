import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-gray-600 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Solware. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="tel:+584126652245"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
              aria-label="Llamar"
            >
              <Phone className="h-5 w-5" />
            </a>
            
            <a
              href="mailto:contacto@solware.com"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
              aria-label="Enviar correo"
            >
              <Mail className="h-5 w-5" />
            </a>
            
            <a
              href="https://instagram.com/solware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
              aria-label="Seguir en Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;