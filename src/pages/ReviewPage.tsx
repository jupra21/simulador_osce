import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/Layout';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Question as QuestionType, UserAnswer } from '../types/index'; 
import { ExtendedExamResults } from '../context/ExamContext';

const ReviewPage: React.FC = () => {
  const { questions, userAnswers, examResults } = useExam();
  const { theme } = useTheme();
  const navigate = useNavigate();

  if (!examResults || !questions || questions.length === 0 || !userAnswers || userAnswers.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto p-4 text-center">
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            No hay resultados de examen para revisar o el examen no se completó correctamente.
          </p>
          <Link 
            to="/simulador/results"
            className={`mt-4 inline-block px-4 py-2 rounded ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
          >
            Volver a Resultados
          </Link>
        </div>
      </Layout>
    );
  }
  // Castear a ExtendedExamResults para acceder a los nuevos campos
  const results = examResults as ExtendedExamResults;

  return (
    <Layout>
      <div className={`container mx-auto p-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
        <button 
          onClick={() => navigate('/simulador/results')} 
          className={`mb-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${theme === 'dark' ? 'text-white bg-blue-600 hover:bg-blue-700' : 'text-white bg-blue-500 hover:bg-blue-600'}`}
        >
          <ArrowLeft size={18} className="mr-2" />
          Volver a Resultados
        </button>

        <h1 className={`text-3xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Revisión del Examen</h1>
        
        {/* Resumen Consistente con ResultsSummary */}
        <div 
          className={`mb-8 p-4 rounded-lg shadow text-center ${results.isApprovedOverall ? (theme === 'dark' ? 'bg-green-800/20' : 'bg-green-50') : (theme === 'dark' ? 'bg-red-800/20' : 'bg-red-50')}`}
        >
          <p className={`text-xl font-semibold ${results.isApprovedOverall ? (theme === 'dark' ? 'text-green-300' : 'text-green-700') : (theme === 'dark' ? 'text-red-300' : 'text-red-700')}`}>
            {results.isApprovedOverall ? `NIVEL ALCANZADO: ${results.achievedLevel.charAt(0).toUpperCase() + results.achievedLevel.slice(1)} (APROBADO)` : 'NO APROBADO'}
          </p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Puntaje: {results.correctAnswersCount}/{results.totalQuestions} ({results.score}%). 
            {results.isApprovedOverall && results.achievedLevel !== 'desconocido' && 
              `Mínimo para Nivel ${results.achievedLevel.charAt(0).toUpperCase() + results.achievedLevel.slice(1)}: ${results.passingScoreForAchievedLevel} correctas.`
            }
            {!results.isApprovedOverall && results.examTakenLevel !== 'desconocido' &&
              ` Necesitabas ${results.examTakenLevel === 'basico' ? PUNTOS_APROBACION_REF.basico : results.examTakenLevel === 'intermedio' ? PUNTOS_APROBACION_REF.intermedio : PUNTOS_APROBACION_REF.avanzado} para Nivel ${results.examTakenLevel.charAt(0).toUpperCase() + results.examTakenLevel.slice(1)}.`
            } 
          </p>
        </div>
        
        <div className="space-y-8">
          {questions.map((question: QuestionType, index: number) => {
            const userAnswer: UserAnswer | undefined = userAnswers[index];
            const selectedOptionKey = userAnswer?.selectedOption;
            const correctAnswerKey = question.correctAnswer;
            const isCorrect = selectedOptionKey === correctAnswerKey;

            return (
              <div key={question.id} className={`p-6 rounded-lg shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`text-xl font-semibold mb-3 border-b pb-2 ${theme === 'dark' ? 'border-gray-700 text-blue-400' : 'border-gray-200 text-blue-600'}`}>Pregunta {index + 1}</h2>
                <p className={`mb-5 whitespace-pre-wrap text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{question.question}</p>
                
                <div className="space-y-3 mb-5">
                  {Object.entries(question.options).map(([key, value]) => {
                    const optionKey = key as 'A' | 'B' | 'C' | 'D';
                    const isSelected = selectedOptionKey === optionKey;
                    const isActualCorrect = correctAnswerKey === optionKey;
                    
                    let optionClasses = `p-3 border rounded-md flex items-center justify-between transition-all duration-200 `;
                    let indicator = null;

                    if (isActualCorrect) {
                      optionClasses += theme === 'dark' ? 'border-green-500 bg-green-700/30 text-green-300' : 'border-green-500 bg-green-50 text-green-700';
                      indicator = <Check size={20} className="text-green-500 ml-3 flex-shrink-0" />;
                    } else if (isSelected && !isCorrect) {
                      optionClasses += theme === 'dark' ? 'border-red-500 bg-red-700/30 text-red-300' : 'border-red-500 bg-red-50 text-red-700';
                      indicator = <X size={20} className="text-red-500 ml-3 flex-shrink-0" />;
                    } else if (isSelected) {
                      optionClasses += theme === 'dark' ? 'border-green-500 bg-green-700/20 text-green-300' : 'border-green-500 bg-green-50 text-green-700';
                    } else {
                      optionClasses += theme === 'dark' ? 'border-gray-700 hover:bg-gray-700/50 text-gray-300' : 'border-gray-300 hover:bg-gray-50 text-gray-700';
                    }

                    return (
                      <div key={optionKey} className={optionClasses}>
                        <span className="flex-grow">{optionKey}. {value}</span>
                        {indicator}
                      </div>
                    );
                  })}
                </div>

                {!userAnswer?.selectedOption && (
                  <p className={`text-sm mb-3 font-medium ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>⚠️ No respondiste esta pregunta.</p>
                )}
                
                {question.explanation && (
                  <div className={`mt-5 p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/70' : 'bg-blue-50/70'}`}>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>Explicación:</h4>
                    <p className={`text-sm whitespace-pre-wrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{question.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ReviewPage;