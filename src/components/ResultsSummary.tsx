import React from 'react';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';
import { PieChart, Clock, Award, BookOpen, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { ExtendedExamResults } from '../context/ExamContext';

const ResultsSummary: React.FC = () => {
  const { examResults } = useExam();
  const { theme } = useTheme();
  
  if (!examResults) return null;
  
  const results = examResults as ExtendedExamResults;

  const PUNTOS_APROBACION_REF = {
    basico: 30,
    intermedio: 43,
    avanzado: 58,
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    let timeStr = '';
    if (hours > 0) timeStr += `${hours}h `;
    if (minutes > 0 || hours > 0) timeStr += `${minutes}m `;
    timeStr += `${secs}s`;
    
    return timeStr;
  };
  
  const getScoreColor = (score: number, isApprovedStatus?: boolean): string => {
    if (isApprovedStatus !== undefined) {
      return isApprovedStatus 
        ? (theme === 'dark' ? 'text-green-400' : 'text-green-600') 
        : (theme === 'dark' ? 'text-red-400' : 'text-red-600');
    }
    if (score >= 70) return theme === 'dark' ? 'text-green-400' : 'text-green-600';
    if (score >= 50) return theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600';
    return theme === 'dark' ? 'text-red-400' : 'text-red-600';
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} mb-8`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Resultados del Examen</h2>
      
      {/* Mensaje de Nivel Alcanzado */}
      <div 
        className={`flex flex-col items-center my-8 p-6 rounded-xl shadow-lg ${results.isApprovedOverall ? (theme === 'dark' ? 'bg-green-800/30' : 'bg-green-50') : (theme === 'dark' ? 'bg-red-800/30' : 'bg-red-50')}`}
      >
        {results.isApprovedOverall ? (
          <CheckCircle size={56} className={getScoreColor(results.score, true)} />
        ) : (
          <XCircle size={56} className={getScoreColor(results.score, false)} />
        )}
        <p className={`text-2xl md:text-3xl font-bold mt-4 ${getScoreColor(results.score, results.isApprovedOverall)}`}>
          {results.isApprovedOverall ? `¡Felicitaciones, has alcanzado el Nivel ${results.achievedLevel.charAt(0).toUpperCase() + results.achievedLevel.slice(1)}!` : 'Debes seguir practicando'}
        </p>
        {results.examTakenLevel !== 'desconocido' && (
          <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            (Tomaste un examen de Nivel: <span className="font-semibold capitalize">{results.examTakenLevel}</span>)
          </p>
        )}
        <p className={`text-lg mt-2 font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          Puntaje obtenido: <span className="font-bold">{results.correctAnswersCount}</span> / {results.totalQuestions} ({Math.round(results.score)}%)
        </p>
        {results.achievedLevel !== 'desconocido' && results.isApprovedOverall && (
          <p className={`text-md mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            El puntaje mínimo para Nivel {results.achievedLevel.charAt(0).toUpperCase() + results.achievedLevel.slice(1)} era <span className="font-semibold">{results.passingScoreForAchievedLevel}</span> respuestas correctas.
          </p>
        )}
        {!results.isApprovedOverall && results.examTakenLevel !== 'desconocido' && (
            <p className={`text-md mt-1 ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'}`}>
                Para aprobar el Nivel {results.examTakenLevel.charAt(0).toUpperCase() + results.examTakenLevel.slice(1)} necesitabas { 
                    results.examTakenLevel === 'basico' ? PUNTOS_APROBACION_REF.basico :
                    results.examTakenLevel === 'intermedio' ? PUNTOS_APROBACION_REF.intermedio :
                    PUNTOS_APROBACION_REF.avanzado
                } respuestas correctas.
            </p>
        )}
      </div>

      {/* Sección "Puntajes Mínimos de Aprobación" - Referencia */}
      <div className={`mb-8 p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'}`}>
        <div className="flex items-center mb-3">
          <TrendingUp size={20} className={`mr-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
          <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Puntajes Mínimos para Alcanzar Nivel</h3>
        </div>
        <div className="space-y-2 text-sm">
          {Object.entries(PUNTOS_APROBACION_REF).map(([level, scoreReq]) => {
            const levelName = level.charAt(0).toUpperCase() + level.slice(1);
            const achievedThisLevel = results.correctAnswersCount >= scoreReq;
            return (
              <div key={levelName} className={`flex items-center ${results.achievedLevel === level ? 'font-bold' : ''}`}>
                <div className={`w-2 h-2 rounded-full ${achievedThisLevel ? 'bg-green-500' : 'bg-gray-400'} mr-2`}></div>
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{levelName}: {scoreReq} puntos</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Resto de las estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center mb-3">
            <PieChart size={20} className={`mr-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
            <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Estadísticas Generales</h3>
          </div>
          <div className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="flex justify-between"><span>Preguntas Totales:</span><span className="font-medium">{results.totalQuestions}</span></div>
            <div className="flex justify-between"><span>Respuestas Correctas:</span><span className="font-medium text-green-500">{results.correctAnswers}</span></div>
            <div className="flex justify-between"><span>Respuestas Incorrectas:</span><span className="font-medium text-red-500">{results.incorrectAnswers}</span></div>
            <div className="flex justify-between"><span>Sin Responder:</span><span className="font-medium">{results.unansweredQuestions}</span></div>
          </div>
        </div>
        
        <div className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center mb-3">
            <Clock size={20} className={`mr-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
            <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Tiempo y Puntaje</h3>
          </div>
          <div className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <div className="flex justify-between"><span>Tiempo Utilizado:</span><span className="font-medium">{formatTime(results.timeTaken)}</span></div>
            <div className="flex justify-between"><span>Puntaje Final (correctas):</span><span className={`font-medium ${getScoreColor(results.score)}`}>{results.correctAnswers} / {results.totalQuestions}</span></div>
            <div className="flex justify-between"><span>Porcentaje:</span><span className={`font-medium ${getScoreColor(results.score)}`}>{Math.round(results.score)}%</span></div>
          </div>
        </div>
      </div>
      
      <h3 className={`font-semibold text-lg mb-4 flex items-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <Award size={20} className={`mr-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
        Resultados por Área de Competencia
      </h3>
      
      <div className="space-y-4">
        {Object.entries(results.competencyResults).map(([area, result]) => (
          <div key={area} className={`p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-700 bg-gray-700/30' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex justify-between items-center mb-2">
              <h4 className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{area}</h4>
              <span className={`font-medium ${getScoreColor(result.score)}`}>{Math.round(result.score)}%</span>
            </div>
            <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
              <div 
                className={`h-full rounded-full transition-all duration-300 ${result.score >= 70 ? 'bg-green-500' : (result.score >= 50 ? 'bg-yellow-500' : 'bg-red-500')}`}
                style={{ width: `${Math.round(result.score)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsSummary;