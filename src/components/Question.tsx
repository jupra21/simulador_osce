import React from 'react';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';
import { Flag, CheckCircle2 } from 'lucide-react';

interface OptionProps {
  label: string;
  text: string;
  selected: boolean;
  isCorrect?: boolean;
  showCorrect?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const Option: React.FC<OptionProps> = ({ 
  label, 
  text, 
  selected, 
  isCorrect = false, 
  showCorrect = false, 
  onClick, 
  disabled = false 
}) => {
  const { theme } = useTheme();
  
  let optionClass = `flex items-start p-4 rounded-lg mb-3 border-2 cursor-pointer transition-all ${disabled ? 'opacity-80 cursor-not-allowed' : 'hover:bg-opacity-90'}`;
  
  if (selected) {
    if (showCorrect) {
      optionClass += isCorrect 
        ? ` ${theme === 'dark' ? 'bg-green-800 border-green-700' : 'bg-green-100 border-green-500'}`
        : ` ${theme === 'dark' ? 'bg-red-800 border-red-700' : 'bg-red-100 border-red-500'}`;
    } else {
      optionClass += ` ${theme === 'dark' ? 'bg-blue-800 border-blue-600' : 'bg-blue-100 border-blue-500'}`;
    }
  } else if (showCorrect && isCorrect) {
    optionClass += ` ${theme === 'dark' ? 'bg-green-800 border-green-700' : 'bg-green-100 border-green-500'}`;
  } else {
    optionClass += ` ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`;
  }

  return (
    <div 
      className={optionClass}
      onClick={disabled ? undefined : onClick}
    >
      <div className="flex-none mr-4">
        <div 
          className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold ${
            selected 
              ? `${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`
              : `${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
          }`}
        >
          {label}
        </div>
      </div>
      <div className="flex-grow">
        <p>{text}</p>
        {showCorrect && selected && isCorrect && (
          <div className="flex items-center mt-2 text-green-600">
            <CheckCircle2 size={16} className="mr-1" />
            <span>Correcto</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Question: React.FC = () => {
  const { 
    questions, 
    currentQuestionIndex, 
    userAnswers, 
    answerQuestion, 
    toggleMarkQuestion,
    isReviewMode
  } = useExam();
  const { theme } = useTheme();
  
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswers.find(a => a.questionId === currentQuestion.id);
  
  if (!currentQuestion || !currentAnswer) {
    return <div>Error al cargar la pregunta.</div>;
  }

  return (
    <div className={`p-6 rounded-lg shadow-md mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">
          Pregunta {currentQuestionIndex + 1} 
          <span className="ml-2 text-sm font-normal opacity-75">({currentQuestion.competencyArea})</span>
        </h3>
        <button 
          onClick={toggleMarkQuestion}
          className={`p-2 rounded-full transition-colors ${
            currentAnswer.isMarked 
              ? `${theme === 'dark' ? 'text-yellow-400 bg-yellow-900 bg-opacity-30' : 'text-yellow-600 bg-yellow-100'}`
              : `${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`
          }`}
          aria-label={currentAnswer.isMarked ? "Desmarcar pregunta" : "Marcar pregunta para revisar"}
        >
          <Flag size={20} className={currentAnswer.isMarked ? "fill-current" : ""} />
        </button>
      </div>
      
      <p className="text-lg mb-6">{currentQuestion.question}</p>
      
      <div className="space-y-2">
        {Object.entries(currentQuestion.options).map(([key, value]) => (
          <Option
            key={key}
            label={key}
            text={value}
            selected={currentAnswer.selectedOption === key}
            isCorrect={key === currentQuestion.correctAnswer}
            showCorrect={isReviewMode}
            onClick={() => answerQuestion(key as "A" | "B" | "C" | "D")}
            disabled={isReviewMode}
          />
        ))}
      </div>
      
      {isReviewMode && (
        <div className={`mt-6 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h4 className="font-semibold mb-2">Explicación:</h4>
          <p>{currentQuestion.explanation || "No hay explicación disponible para esta pregunta."}</p>
        </div>
      )}
    </div>
  );
};

export default Question;