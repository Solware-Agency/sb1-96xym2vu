import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  Linkedin, 
  Twitter, 
  Instagram,
  ChevronDown,
  Building2,
  Globe,
  MessageCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  sector: string;
  message: string;
  areas: string[];
}

const areasDeInteres = [
  { id: 'automatizacion', label: 'Automatización de Procesos' },
  { id: 'desarrollo', label: 'Desarrollo Web/Móvil' },
  { id: 'crm', label: 'CRM y Gestión de Clientes' },
  { id: 'marketing', label: 'Marketing Digital' },
  { id: 'infraestructura', label: 'Infraestructura Cloud' },
  { id: 'consultoria', label: 'Consultoría Digital' }
];

const faqs = [
  {
    question: "¿Cómo puede Solware ayudar a mi empresa?",
    answer: "Solware puede ayudar a tu empresa a aumentar la eficiencia operativa, reducir costos, mejorar la experiencia del cliente y facilitar la adopción de nuevas tecnologías para mantenerte competitivo en el mercado."
  },
  {
    question: "¿Qué es la transformación digital?",
    answer: "La transformación digital es el proceso de integrar tecnologías digitales en todas las áreas de una empresa para mejorar su funcionamiento y ofrecer un mejor valor a los clientes."
  },
  {
    question: "¿Cómo se inicia un proyecto con Solware?",
    answer: "Iniciamos con un diagnóstico inicial para entender las necesidades de tu empresa, seguido del diseño de soluciones personalizadas y la implementación de las herramientas necesarias."
  },
  {
    question: "¿Ofrecen soporte post-implementación?",
    answer: "Sí, ofrecemos soporte continuo y seguimiento para garantizar que las soluciones implementadas funcionen correctamente y se ajusten a las necesidades cambiantes de tu negocio."
  },
  {
    question: "¿Puedo contactar a Solware para una consulta gratuita?",
    answer: "Sí, puedes contactarnos a través de nuestro formulario en la sección de contacto y estaremos encantados de ofrecerte una consulta inicial sin compromiso."
  }
];

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    message: '',
    areas: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAreaChange = (areaId: string) => {
    setFormData(prev => {
      const areas = prev.areas.includes(areaId)
        ? prev.areas.filter(id => id !== areaId)
        : [...prev.areas, areaId];
      return { ...prev, areas };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/584126652245?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-gray-50" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            ¡Conectemos! Tu éxito es nuestra prioridad
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos listos para responder tus consultas y ayudarte a potenciar tu negocio 
            con soluciones tecnológicas innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up stagger-1">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
                  Sector
                </label>
                <select
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors appearance-none pr-10"
                >
                  <option value="">Selecciona un sector</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="salud">Salud</option>
                  <option value="educacion">Educación</option>
                  <option value="comercio">Comercio</option>
                  <option value="servicios">Servicios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Áreas de interés
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {areasDeInteres.map(area => (
                    <label
                      key={area.id}
                      className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                        formData.areas.includes(area.id)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.areas.includes(area.id)}
                        onChange={() => handleAreaChange(area.id)}
                      />
                      <span className="text-sm">{area.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:bg-white transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent 
                  text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                  transition-colors duration-300"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up stagger-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-600">
                    Av. Francisco de Miranda, Caracas 1060, Venezuela
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:contacto@solware.com" 
                    className="ml-3 text-gray-600 hover:text-blue-600 transition-colors">
                    contacto@solware.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a href="tel:+584126652245" 
                    className="ml-3 text-gray-600 hover:text-blue-600 transition-colors">
                    +58 412-6652245
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-600">
                    Lunes a Viernes, 9:00 - 18:00 hrs
                  </span>
                </div>

                <button
                  onClick={openWhatsApp}
                  className="w-full mt-4 flex items-center justify-center px-6 py-3 bg-green-500 
                    text-white rounded-full hover:bg-green-600 transition-all duration-300 
                    shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chatear por WhatsApp
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">Síguenos en redes</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up stagger-3">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Preguntas Frecuentes
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center cursor-pointer 
                      text-gray-700 hover:text-blue-600 transition-colors">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 transform group-open:rotate-180 
                        transition-transform" />
                    </summary>
                    <p className="mt-2 text-gray-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg fade-in-up stagger-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0439282485397!2d-66.8563193!3d10.4914582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58fa8f7c5f27%3A0x7a46c3834a4bb935!2sAv.%20Francisco%20de%20Miranda%2C%20Caracas%201060%2C%20Miranda!5e0!3m2!1ses!2sve!4v1647289845784!5m2!1ses!2sve"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Solware"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;