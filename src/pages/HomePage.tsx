import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Trophy, Bot } from 'lucide-react';
import Layout from '../components/Layout';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: "72 Preguntas Optimizadas por IA",
      description: "Preguntas generadas y seleccionadas por IA basadas en la última normativa de Contrataciones del Estado."
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: "Análisis Inteligente",
      description: "Evaluación de Gestión Pública, Actuaciones Preparatorias y Procedimientos de Selección con análisis predictivo."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Simulación Adaptativa",
      description: "Tiempo controlado que se ajusta según tu desempeño y nivel de preparación."
    }
  ];

  const mainFeatures = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: "IA Avanzada OECE",
      description: "Nuestro sistema de IA está especializado en la nueva Ley 32069 y el D.S. 009-2025-EF",
      highlight: "¡Actualizado 2025!"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Análisis Predictivo",
      description: "Predicción de preguntas basada en patrones históricos de exámenes OECE",
      highlight: "97% Precisión"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Certificación Garantizada",
      description: "Preparación integral para el nuevo formato de certificación OECE 2025",
      highlight: "Garantía de Aprobación"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section con Animación */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl mb-12">
              <div className="flex justify-center mb-6">
                <Bot className="w-24 h-24 text-blue-500 animate-pulse" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
                  Simulador OECE 2025
                </h1>
                <p className="text-lg font-semibold text-blue-500 dark:text-blue-400 animate-fade-in">
                  ¡Tu camino hacia la certificación!
                </p>
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200">
                    Domina la nueva <span className="font-bold text-blue-600 animate-pulse">Ley 32069</span> y el{" "}
                    <span className="font-bold text-blue-600 animate-pulse">D.S. 009-2025-EF</span> con nuestro{" "}
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      simulador de última generación
                    </span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-green-500" />
                      Respaldado por expertos
                    </span>
                    <span className="flex items-center gap-1">
                      <Bot className="w-4 h-4 text-blue-500" />
                      Potenciado por IA
                    </span>
                    <span className="flex items-center gap-1">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      Basado en exámenes reales
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link 
                  to="/planes"
                  className="group px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Trophy className="w-6 h-6 text-yellow-300" />
                  Comienza Ahora
                </Link>
              </div>
            </div>

            {/* Espacio intencional entre secciones */}
            <div className="mb-12"></div>

            {/* Sección de Respaldo Profesional */}
            <div className={`max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-16 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Respaldado por Expertos OECE
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Nuestro equipo incluye profesionales certificados OECE con años de experiencia en el sistema de contrataciones del Estado
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Experiencia Comprobada</h3>
                  <p className="text-gray-600 dark:text-gray-300">Más de 10 años de experiencia combinada en contrataciones públicas y certificaciones OECE</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Actualización Constante</h3>
                  <p className="text-gray-600 dark:text-gray-300">Contenido actualizado por expertos que participan activamente en el sistema de contrataciones</p>
                </div>
              </div>
            </div>

            {/* Espacio intencional entre secciones */}
            <div className="mb-12"></div>

            {/* Nueva sección de características */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (                <div 
                    key={index}
                    className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative">
                      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 transform transition-all duration-300 group-hover:scale-110">
                        <div className="transform transition-all duration-300 group-hover:rotate-12">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transform transition-all duration-300 hover:translate-x-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 transform transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Características Principales con Animaciones */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {mainFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {feature.highlight}
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:animate-pulse">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>                </div>
              ))}
            </div>            {/* Sección de Medios de Pago */}
            <div className="mb-16 text-center">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  Pago Rápido y Seguro con Yape
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      ¡Método Preferido!
                    </div>
                    <img 
                      src="/images/payment-methods/yape-logo.png" 
                      alt="Logo de Yape" 
                      className="h-20 w-auto object-contain filter drop-shadow-xl"
                    />
                  </div>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Pago instantáneo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Sin comisiones adicionales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700 dark:text-gray-300">Activación inmediata</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">                  Al realizar tu pago a través de Yape, recibirás acceso al Plan Team OECE 2025.
                  Una vez verificado el pago, todos los miembros del equipo recibirán sus credenciales personales para acceder a los simuladores actualizados.
                </p>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Listo para Certificarte?
              </h2>
              <p className="text-blue-100 mb-6">
                Únete a los miles de profesionales que ya aprobaron su certificación OECE con nosotros
              </p>              <Link
                to="/planes"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Comenzar Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;