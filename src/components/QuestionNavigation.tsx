import React from 'react';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';

const QuestionNavigation: React.FC = () => {
  const { questions, userAnswers, currentQuestionIndex, goToQuestion } = useExam();
  const { theme } = useTheme();

  const getButtonClass = (index: number) => {
    const isCurrentQuestion = currentQuestionIndex === index;
    const answer = userAnswers.find(a => a.questionId === questions[index].id);
    const isAnswered = answer && answer.selectedOption !== null;
    const isMarked = answer && answer.isMarked;
    
    // Base classes comunes
    let baseClass = `w-9 h-9 rounded-md font-medium flex items-center justify-center text-sm transition-colors duration-200`;

    // Prioridad 1: Pregunta Actual (como en la imagen)
    if (isCurrentQuestion) {
      return `${baseClass} bg-blue-500 text-white ring-2 ring-blue-300`; 
    }
    
    // Prioridad 2: Pregunta Marcada
    if (isMarked) {
      return `${baseClass} ${theme === 'dark' 
        ? 'bg-yellow-600 text-white hover:bg-yellow-500' 
        : 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300'}`;
    }
    
    // Prioridad 3: Pregunta Respondida
    if (isAnswered) {
      return `${baseClass} ${theme === 'dark' 
        ? 'bg-green-700 text-white hover:bg-green-600' 
        : 'bg-green-500 text-white hover:bg-green-400'}`;
    }
    
    // Por defecto: Sin responder (como en la imagen)
    return `${baseClass} ${theme === 'dark' 
      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`;
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className="font-semibold mb-3">Navegación de preguntas</h3>
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-12 gap-2">
        {questions.map((_, index) => (
          <button
            key={index}
            className={getButtonClass(index)} // Usar la nueva lógica de clases
            onClick={() => goToQuestion(index)}
            aria-label={`Ir a pregunta ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
      {/* Leyenda actualizada para coincidir con la imagen */}
      <div className="mt-4 space-y-1 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-sm mr-2 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
          <span>Sin responder</span>
        </div>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-sm mr-2 ${theme === 'dark' ? 'bg-green-700' : 'bg-green-500'}`}></div>
          <span>Respondida</span>
        </div>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-sm mr-2 ${theme === 'dark' ? 'bg-yellow-600' : 'bg-yellow-400'}`}></div>
          <span>Marcada</span>
        </div>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-sm mr-2 border-2 ${theme === 'dark' ? 'border-blue-400 bg-blue-500' : 'border-blue-600 bg-blue-500'}`}></div>
          <span>Actual</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionNavigation;