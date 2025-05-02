import React from 'react';
import { Brain, ListChecks, Timer, Award, Sparkles, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Chatbot } from './Chatbot'; // Cambiado a importación nombrada

export const ExamSimulator: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <ListChecks className="w-8 h-8 text-blue-500" />,
      title: "72 Preguntas Optimizadas por IA",
      description: "Preguntas generadas y seleccionadas por IA basadas en la última normativa de Contrataciones del Estado."
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: "Análisis Inteligente",
      description: "Evaluación de Gestión Pública, Actuaciones Preparatorias y Procedimientos de Selección con análisis predictivo."
    },
    {
      icon: <Timer className="w-8 h-8 text-green-500" />,
      title: "Simulación Adaptativa",
      description: "Tiempo controlado que se ajusta según tu desempeño y nivel de preparación."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Resultados con IA",
      description: "Análisis detallado de tu rendimiento con recomendaciones personalizadas por área."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
      title: "Actualización Automática",
      description: "Contenido actualizado automáticamente según cambios en la normativa OECE."
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Preparación Focalizada",
      description: "IA que identifica y refuerza tus áreas de mejora en la Ley de Contrataciones."
    }
  ];

  return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Simulador de Examen OECE
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Prepárate para la certificación del Organismo Especializado para las Contrataciones 
              Públicas Eficientes (OECE) de Perú con nuestro simulador potenciado por Inteligencia Artificial.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gray-50">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => navigate('/login')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Brain className="w-6 h-6 mr-2" />
              Comenzar Examen
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Sistema de evaluación inteligente basado en la última normativa de Contrataciones del Estado
            </p>
          </div>
        </div>
        <Chatbot />
      </div>
  );
};