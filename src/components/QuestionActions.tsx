import React from 'react';
import { ArrowLeft, ArrowRight, BookmarkCheck, Save } from 'lucide-react';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';

interface QuestionActionsProps {
  onFinish?: () => void;
}

const QuestionActions: React.FC<QuestionActionsProps> = ({ onFinish }) => {
  const { 
    currentQuestionIndex, 
    questions, 
    goToPreviousQuestion, 
    goToNextQuestion, 
    userAnswers, 
    isReviewMode
  } = useExam();
  const { theme } = useTheme();
  
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const allQuestionsAnswered = userAnswers.every(answer => answer.selectedOption !== null);
  
  const btnBaseClasses = "flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors";
  const primaryBtnClasses = `${btnBaseClasses} ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`;
  const secondaryBtnClasses = `${btnBaseClasses} ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`;
  const disabledBtnClasses = `${btnBaseClasses} ${theme === 'dark' ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`;

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={goToPreviousQuestion}
        className={isFirstQuestion ? disabledBtnClasses : secondaryBtnClasses}
        disabled={isFirstQuestion}
      >
        <ArrowLeft size={18} className="mr-2" />
        Anterior
      </button>
      
      <div className="flex space-x-2">
        {isLastQuestion && !isReviewMode && (
          <button
            onClick={onFinish}
            className={primaryBtnClasses}
          >
            <Save size={18} className="mr-2" />
            Finalizar examen
          </button>
        )}
        
        {isReviewMode && isLastQuestion && (
          <button
            onClick={onFinish}
            className={primaryBtnClasses}
          >
            <BookmarkCheck size={18} className="mr-2" />
            Terminar revisión
          </button>
        )}
      </div>
      
      <button
        onClick={goToNextQuestion}
        className={isLastQuestion ? disabledBtnClasses : primaryBtnClasses}
        disabled={isLastQuestion}
      >
        Siguiente
        <ArrowRight size={18} className="ml-2" />
      </button>
    </div>
  );
};

export default QuestionActions;