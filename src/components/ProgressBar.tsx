import React, { useMemo } from 'react';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';

const ProgressBar: React.FC = () => {
  const { questions, userAnswers } = useExam();
  const { theme } = useTheme();
  
  const progress = useMemo(() => {
    const answered = userAnswers.filter(answer => answer.selectedOption !== null).length;
    return Math.round((answered / questions.length) * 100);
  }, [questions, userAnswers]);

  const markedCount = useMemo(() => {
    return userAnswers.filter(answer => answer.isMarked).length;
  }, [userAnswers]);

  // Determina el color de la barra de progreso
  const getProgressColor = () => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className={`rounded-lg p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Progreso del examen</h3>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      
      <div className={`w-full h-3 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
        <div 
          className={`h-full rounded-full transition-all duration-300 ${getProgressColor()}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between mt-3 text-sm">
        <div>
          <span className="font-medium">{userAnswers.filter(a => a.selectedOption !== null).length}</span>
          <span className="text-gray-500 dark:text-gray-400"> / {questions.length} respondidas</span>
        </div>
        
        <div>
          <span className="font-medium">{markedCount}</span>
          <span className="text-gray-500 dark:text-gray-400"> marcadas para revisar</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;