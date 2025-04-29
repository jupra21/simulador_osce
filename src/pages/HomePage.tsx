import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Clock, ListChecks, Award } from 'lucide-react';
import Layout from '../components/Layout';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
  const { theme } = useTheme();

  const featureItems = [
    {
      icon: <Book size={24} />,
      title: "72 Preguntas de Opción Múltiple",
      description: "Basadas en la Ley de Contrataciones del Estado y normativas relacionadas."
    },
    {
      icon: <ListChecks size={24} />,
      title: "Competencias Evaluadas",
      description: "Gestión Pública, Actuaciones Preparatorias, Procedimientos de Selección y Ejecución Contractual."
    },
    {
      icon: <Clock size={24} />,
      title: "Tiempo Limitado",
      description: "Simulación de condiciones reales de examen con temporizador."
    },
    {
      icon: <Award size={24} />,
      title: "Resultados Detallados",
      description: "Análisis de desempeño por área de competencia y revisión de respuestas."
    }
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center p-8 rounded-lg shadow-md mb-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Simulador de Examen OECE
          </h1>
          <p className="text-lg mb-6">
            Prepárate para la certificación del Organismo Especializado para las Contrataciones Públicas Eficientes (OECE) de Perú con nuestro simulador de examen.
          </p>
          <Link 
            to="/exam"
            className="inline-block px-6 py-3 text-lg font-medium rounded-lg transition-all transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Comenzar Examen
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featureItems.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
            >
              <div className="inline-flex items-center justify-center p-3 rounded-lg mb-4 bg-blue-600 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
          <h2 className="text-2xl font-bold mb-4">Instrucciones para el Examen</h2>
          <div className="space-y-4">
            <p className="text-base">El examen consiste en 72 preguntas de opción múltiple distribuidas entre las competencias clave para las contrataciones públicas.</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-base">
              <li>Tienes 2 horas (120 minutos) para completar el examen.</li>
              <li>Cada pregunta tiene 4 opciones de respuesta (A, B, C, D) con una única respuesta correcta.</li>
              <li>Puedes marcar preguntas para revisarlas más tarde.</li>
              <li>Al finalizar, obtendrás un análisis detallado de tu desempeño.</li>
              <li>Para aprobar, debes obtener al menos el 70% del puntaje total.</li>
            </ul>
            <p className="mt-4 text-base">Este simulador está diseñado para ayudarte a prepararte para el examen de certificación del OECE. Te recomendamos estudiar a fondo la Ley de Contrataciones del Estado y sus normativas asociadas.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;