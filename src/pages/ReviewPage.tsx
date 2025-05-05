import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import Question from '../components/Question';
import QuestionNavigation from '../components/QuestionNavigation';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';

const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isReviewMode, examResults, questions, currentQuestionIndex, setReviewMode, goToQuestion } = useExam();
  const { theme } = useTheme();

  // Determinar si estamos en modo revisión basado en el estado de navegación O el contexto
  const isActuallyReviewing = location.state?.isReviewing || isReviewMode;

  // Asegurarse de que el contexto esté sincronizado si llegamos por navegación directa
  useEffect(() => {
    if (location.state?.isReviewing && !isReviewMode) {
      setReviewMode(true);
    }
  }, [location.state, isReviewMode, setReviewMode]);
  
  // Si no estamos en modo revisión o no hay resultados, redirigir
  if (!isActuallyReviewing || !examResults) {
    navigate('/results');
    return null;
  }

  const handleFinishReview = () => {
    setReviewMode(false);
    navigate('/results');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button
              onClick={handleFinishReview}
              className={`mr-3 p-2 rounded-full transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              aria-label="Volver a resultados"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold">Revisión de Respuestas</h1>
          </div>
          
          <div className={`px-4 py-2 rounded-lg ${
            theme === 'dark' ? 'bg-blue-900/50' : 'bg-blue-100'
          }`}>
            <span className="font-semibold">Modo Revisión</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna Principal: Pregunta actual */}
          <div className="lg:col-span-2">
            {questions.length > 0 && <Question />}

            {/* Navegación entre preguntas */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => goToQuestion(currentQuestionIndex - 1)}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentQuestionIndex === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Anterior
              </button>

              <button
                onClick={handleFinishReview}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
              >
                Terminar Revisión
              </button>

              <button
                onClick={() => goToQuestion(currentQuestionIndex + 1)}
                disabled={currentQuestionIndex === questions.length - 1}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentQuestionIndex === questions.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Siguiente
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resumen de Resultados */}
            <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="font-semibold mb-3">Resultado Final</h3>
              <div className="text-center">
                <div className={`text-2xl font-bold mb-2 ${
                  examResults.achievedLevel !== "No aprobado"
                    ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    : theme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`}>
                  Nivel {examResults.achievedLevel}
                </div>
                <p className="text-3xl font-bold mb-2">{Math.round(examResults.score)}%</p>
                <p className="text-sm opacity-80">
                  {examResults.correctAnswers} correctas de {examResults.totalQuestions} preguntas
                </p>
              </div>
            </div>

            {/* Ayuda de Navegación */}
            <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <QuestionNavigation />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewPage;