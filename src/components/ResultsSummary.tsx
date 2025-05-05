import React from 'react';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';
import { PieChart, Clock, Award, BookOpen, TrendingUp } from 'lucide-react';

const ResultsSummary: React.FC = () => {
  const { examResults } = useExam();
  const { theme } = useTheme();
  
  if (!examResults) return null;
  
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    let result = '';
    if (hours > 0) result += `${hours}h `;
    if (minutes > 0 || hours > 0) result += `${minutes}m `;
    result += `${secs}s`;
    
    return result;
  };
  
  const getScoreColor = (score: number): string => {
    if (score >= 70) return theme === 'dark' ? 'text-green-400' : 'text-green-600';
    if (score >= 50) return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
    return theme === 'dark' ? 'text-red-400' : 'text-red-600';
  };
  
  const isPassing = examResults.score >= 70;

  return (
    <div className={`p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-gray-100 mb-8`}>
      <h2 className="text-2xl font-bold mb-2 dark:text-white">Resultados del Examen</h2>
      
      {/* Nivel Alcanzado */}
      <div className="flex flex-col items-center my-8">
        <div className={`text-3xl font-bold ${getScoreColor(examResults.score)}`}>
          {Math.round(examResults.score)}%
        </div>
        <div className={`text-lg mt-2 font-semibold ${
          examResults.achievedLevel !== "No aprobado"
            ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
            : theme === 'dark' ? 'text-red-400' : 'text-red-600'
        }`}>
          Nivel {examResults.achievedLevel}
        </div>
        {examResults.nextLevel !== "Completado" && (
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {examResults.pointsForNextLevel - Math.round(examResults.score)} puntos para alcanzar nivel {examResults.nextLevel}
          </div>
        )}
      </div>

      {/* Niveles de Aprobación */}
      <div className="mb-8 p-4 rounded-lg border dark:border-gray-700 dark:bg-gray-700/30">
        <div className="flex items-center mb-3">
          <TrendingUp size={20} className="mr-2 dark:text-gray-300" />
          <h3 className="font-semibold dark:text-white">Niveles de Aprobación</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${examResults.score >= 30 ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
            <span className={examResults.score >= 30 ? 'font-medium' : ''}>Básico: 30 puntos o más</span>
          </div>
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${examResults.score >= 43 ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
            <span className={examResults.score >= 43 ? 'font-medium' : ''}>Intermedio: 43 puntos o más</span>
          </div>
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${examResults.score >= 58 ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
            <span className={examResults.score >= 58 ? 'font-medium' : ''}>Avanzado: 58 puntos o más</span>
          </div>
        </div>
      </div>

      {/* Resto de las estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className={`p-4 rounded-lg border dark:border-gray-700 dark:bg-gray-700/30`}>
          <div className="flex items-center mb-3">
            <PieChart size={20} className="mr-2 dark:text-gray-300" />
            <h3 className="font-semibold dark:text-white">Estadísticas Generales</h3>
          </div>
          <div className="space-y-3 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Preguntas Totales:</span>
              <span className="font-medium">{examResults.totalQuestions}</span>
            </div>
            <div className="flex justify-between">
              <span>Respuestas Correctas:</span>
              <span className="font-medium">{examResults.correctAnswers}</span>
            </div>
            <div className="flex justify-between">
              <span>Respuestas Incorrectas:</span>
              <span className="font-medium">{examResults.incorrectAnswers}</span>
            </div>
            <div className="flex justify-between">
              <span>Sin Responder:</span>
              <span className="font-medium">{examResults.unanswered}</span>
            </div>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg border dark:border-gray-700 dark:bg-gray-700/30`}>
          <div className="flex items-center mb-3">
            <Clock size={20} className="mr-2 dark:text-gray-300" />
            <h3 className="font-semibold dark:text-white">Tiempo y Puntaje</h3>
          </div>
          <div className="space-y-3 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Tiempo Utilizado:</span>
              <span className="font-medium">{formatTime(examResults.timeTaken)}</span>
            </div>
            <div className="flex justify-between">
              <span>Puntaje Final:</span>
              <span className={`font-medium ${getScoreColor(examResults.score)}`}>
                {examResults.correctAnswers} / {examResults.totalQuestions}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Porcentaje:</span>
              <span className={`font-medium ${getScoreColor(examResults.score)}`}>
                {Math.round(examResults.score)}%
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="font-semibold text-lg mb-4 flex items-center dark:text-white">
        <Award size={20} className="mr-2 dark:text-gray-300" />
        Resultados por Área de Competencia
      </h3>
      
      <div className="space-y-4">
        {Object.entries(examResults.competencyResults).map(([area, result]) => (
          <div key={area} className={`p-4 rounded-lg border dark:border-gray-700 dark:bg-gray-700/30`}>
            <div className="flex justify-between items-center mb-2">
              <h4 className="dark:text-white">{area}</h4>
              <span className={`font-medium ${getScoreColor(result.score)}`}>
                {Math.round(result.score)}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  result.score >= 70 
                    ? 'bg-green-500' 
                    : result.score >= 50 
                      ? 'bg-yellow-500' 
                      : 'bg-red-500'
                }`}
                style={{ width: `${result.score}%` }}
              ></div>
            </div>
            <div className="text-sm mt-2 flex justify-between opacity-75 dark:text-gray-300">
              <span>{result.correct} de {result.total} correctas</span>
              <span>{Math.round(result.score)}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center text-lg mb-4">
          <BookOpen size={20} className="mr-2 dark:text-gray-300" />
          <span className="dark:text-white">Recomendación</span>
        </div>
        <p className="mb-4 dark:text-gray-300">
          {isPassing 
            ? 'Felicitaciones por aprobar el examen. Revisa las preguntas que fallaste para mejorar tu comprensión de esos temas.'
            : 'Revisa con atención las áreas donde obtuviste menor puntaje. Te recomendamos estudiar más a fondo esos temas antes de volver a intentar el examen.'}
        </p>
      </div>
    </div>
  );
};

export default ResultsSummary;