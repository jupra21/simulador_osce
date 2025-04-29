import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import Question from '../components/Question';
import QuestionNavigation from '../components/QuestionNavigation';
import QuestionActions from '../components/QuestionActions';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';

const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { isReviewMode, examResults, setReviewMode } = useExam();
  const { theme } = useTheme();
  
  // Si no estamos en modo revisión o no hay resultados, redirige a la página de resultados
  if (!isReviewMode || !examResults) {
    navigate('/results');
    return null;
  }

  const handleFinishReview = () => {
    setReviewMode(false);
    navigate('/results');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button
              onClick={handleFinishReview}
              className={`mr-3 p-2 rounded-full ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              } transition-colors`}
              aria-label="Volver a resultados"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold">Revisión de Respuestas</h1>
          </div>
          
          <div className={`px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-blue-900 bg-opacity-50' : 'bg-blue-100'
          }`}>
            <span className="font-semibold">Modo Revisión</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Question />
            
            <QuestionActions onFinish={handleFinishReview} />
          </div>
          
          <div className="space-y-6">
            <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-semibold mb-3">Instrucciones de Revisión</h3>
              <p className="mb-3">
                En este modo puedes revisar todas las preguntas del examen con sus respuestas correctas y explicaciones.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm opacity-80">
                <li>Las respuestas correctas se muestran en verde</li>
                <li>Tus respuestas incorrectas se muestran en rojo</li>
                <li>Cada pregunta incluye una explicación de la respuesta correcta</li>
              </ul>
            </div>
            
            <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-semibold mb-3">Resultado Final</h3>
              <div className="text-center">
                <div className={`text-2xl font-bold ${
                  examResults.score >= 70 
                    ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    : theme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`}>
                  {Math.round(examResults.score)}%
                </div>
                <p className="mt-1 text-sm opacity-80">
                  {examResults.correctAnswers} correctas de {examResults.totalQuestions} preguntas
                </p>
              </div>
            </div>
            
            <QuestionNavigation />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewPage;