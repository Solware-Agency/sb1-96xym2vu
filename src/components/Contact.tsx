import React, { useState } from 'react';
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
  CheckCircle2
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

const INITIAL_FORM_STATE: FormData = {
  fullName: '',
  email: '',
  subject: 'consulta',
  message: '',
  newsletter: false,
};

const SUBJECTS = [
  { value: 'consulta', label: 'Consulta General' },
  { value: 'presupuesto', label: 'Solicitud de Presupuesto' },
  { value: 'soporte', label: 'Soporte Técnico' },
  { value: 'alianza', label: 'Propuesta de Alianza' },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (formData.message.length < 50) {
      newErrors.message = 'El mensaje debe tener al menos 50 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData(INITIAL_FORM_STATE);
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: checked !== undefined ? checked : value,
    }));
    
    // Limpiar error al escribir
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
            ¡Conectemos! Tu éxito es nuestra prioridad
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 
              bg-blue-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos listos para responder tus consultas y ayudarte a potenciar tu negocio 
            con soluciones tecnológicas innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up stagger-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500 ${
                      errors.fullName ? 'border-red-500' : ''
                    }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500"
                >
                  {SUBJECTS.map(subject => (
                    <option key={subject.value} value={subject.value}>
                      {subject.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  Mínimo 50 caracteres. Actual: {formData.message.length}
                </p>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 
                    focus:ring-blue-500"
                />
                <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                  Suscribirme al newsletter para recibir novedades y ofertas
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-3 border 
                    border-transparent text-base font-medium rounded-full text-white 
                    bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''} 
                    click-feedback`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" 
                          stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Enviar Consulta
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg flex items-center 
                    text-green-700">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    Mensaje enviado con éxito. Nos contactaremos pronto.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Información de contacto */}
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
                  <a href="tel:+584241234567" 
                    className="ml-3 text-gray-600 hover:text-blue-600 transition-colors">
                    +58 424-1234567
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-600">
                    Lunes a Viernes, 9:00 - 18:00 hrs
                  </span>
                </div>
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
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer 
                    text-gray-700 hover:text-blue-600 transition-colors">
                    <span>¿Cuál es el tiempo de respuesta promedio?</span>
                    <ChevronDown className="h-5 w-5 transform group-open:rotate-180 
                      transition-transform" />
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Nos comprometemos a responder todas las consultas en un plazo máximo 
                    de 24 horas hábiles.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer 
                    text-gray-700 hover:text-blue-600 transition-colors">
                    <span>¿Ofrecen servicios internacionales?</span>
                    <ChevronDown className="h-5 w-5 transform group-open:rotate-180 
                      transition-transform" />
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Sí, trabajamos con clientes en toda Latinoamérica y ofrecemos 
                    soporte en múltiples zonas horarias.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer 
                    text-gray-700 hover:text-blue-600 transition-colors">
                    <span>¿Cómo se inicia un proyecto?</span>
                    <ChevronDown className="h-5 w-5 transform group-open:rotate-180 
                      transition-transform" />
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Iniciamos con una consulta gratuita para entender tus necesidades y 
                    objetivos. Luego, desarrollamos una propuesta personalizada.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
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
}