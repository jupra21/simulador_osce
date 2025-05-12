import { type FC } from 'react';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';
import { Flag, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OptionProps {
  label: string;
  text: string;
  selected: boolean;
  isCorrect?: boolean;
  showCorrect?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const Option: FC<OptionProps> = ({ 
  label, 
  text, 
  selected, 
  isCorrect = false, 
  showCorrect = false, 
  onClick, 
  disabled = false 
}) => {
  const { theme } = useTheme();
  
  let optionClass = `flex items-start p-4 rounded-lg mb-3 border-2 cursor-pointer transition-all ${
    disabled ? 'opacity-80 cursor-not-allowed' : 'hover:bg-opacity-90'
  }`;
  
  if (selected) {
    if (showCorrect) {
      optionClass += isCorrect 
        ? ` ${theme === 'dark' ? 'bg-green-800 border-green-700' : 'bg-green-100 border-green-500'}`
        : ` ${theme === 'dark' ? 'bg-red-800 border-red-700' : 'bg-red-100 border-red-500'}`;
    } else {
      optionClass += ` ${theme === 'dark' ? 'bg-blue-800 border-blue-700' : 'bg-blue-100 border-blue-500'}`;
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={optionClass}
      role="radio"
      aria-checked={selected}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <div className="flex-1">
        <div className="flex items-center">
          <span className="font-bold mr-2">{label})</span>
          <span>{text}</span>
        </div>
        {showCorrect && selected && (
          <div className="mt-2 flex items-center">
            <CheckCircle2 
              className={`w-5 h-5 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
              aria-hidden="true"
            />
            <span className={`ml-2 ${isCorrect ? 'text-green-600' : 'text-red-600'} dark:text-white`}>
              {isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta'}
            </span>
          </div>
        )}
      </div>
    </button>
  );
};

const Question: FC = () => {
  const { 
    questions,
    currentQuestionIndex,
    userAnswers,
    answerQuestion,
    toggleMarkQuestion,
    isReviewMode,
    resetExam
  } = useExam();
  
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Error: No se encontró la pregunta</div>;
  }
  const handleOptionClick = (option: "A" | "B" | "C" | "D") => {
    if (!isReviewMode) {
      answerQuestion(option);
    }
  };
  // Función para manejar el regreso al simulador
  const handleBackToSimulator = () => {
    resetExam(); // Limpia el estado del examen antes de volver
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Botón de regreso */}
      <Link 
        to="/simulador"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 mb-6"
        onClick={handleBackToSimulator}
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Volver al simulador
      </Link>
      
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold" id={`question-${currentQuestionIndex + 1}`}>
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </h2>
        <button
          onClick={toggleMarkQuestion}
          className={`flex items-center px-3 py-1 rounded-full text-sm ${
            userAnswer?.isMarked
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
          }`}
          aria-pressed={userAnswer?.isMarked}
          aria-label={userAnswer?.isMarked ? "Desmarcar pregunta" : "Marcar pregunta para revisar"}
        >
          <Flag 
            className={`w-4 h-4 mr-1 ${userAnswer?.isMarked ? 'text-yellow-600 dark:text-yellow-400' : ''}`} 
            aria-hidden="true" 
          />
          {userAnswer?.isMarked ? 'Marcada' : 'Marcar'}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="mb-6">
          <p className="text-lg font-medium mb-2">Categoría: {currentQuestion.category}</p>
          <p className="text-lg mb-6">{currentQuestion.question}</p>
        </div>
        
        <div role="radiogroup" aria-labelledby={`question-${currentQuestionIndex + 1}`}>
          {Object.entries(currentQuestion.options).map(([key, text]) => (
            <Option
              key={key}
              label={key}
              text={text}
              selected={userAnswer?.selectedOption === key}
              isCorrect={key === currentQuestion.correctAnswer}
              showCorrect={isReviewMode}
              onClick={() => !isReviewMode && answerQuestion(key as "A" | "B" | "C" | "D")}
              disabled={isReviewMode}
            />
          ))}
        </div>

        {isReviewMode && currentQuestion.explanation && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="font-semibold mb-2">Explicación:</h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;