import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Question from '../components/Question';
import Timer from '../components/Timer';
import QuestionNavigation from '../components/QuestionNavigation';
import QuestionActions from '../components/QuestionActions';
import ConfirmDialog from '../components/ConfirmDialog';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';

const ExamPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { theme } = useTheme();
  const { 
    questions,
    currentQuestionIndex,
    userAnswers,
    timeRemaining,
    isExamStarted,
    startExam,
    endExam,
    goToQuestion,
  } = useExam();
  
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate('/simulador');
    }
  }, [id, navigate]);

  const handleStartExamConfirmed = () => {
    startExam(id || '');
    setShowStartDialog(false);
  };

  const handleEndExam = () => {
    endExam();
    navigate('/simulador/results'); 
  };

  const answeredCount = userAnswers.filter(a => a.selectedOption !== null).length;
  const markedCount = userAnswers.filter(a => a.isMarked).length;
  const pendingCount = questions.length - answeredCount;

  if (showStartDialog && !isExamStarted) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/50'}`}>
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl p-6 max-w-md w-full`}>
          <h2 className="text-xl font-bold mb-4">Iniciar Examen de Simulación OECE</h2>
          <p className="mb-6 text-sm opacity-80">
            Estás a punto de comenzar el simulador "{id}". Tendrás 90 minutos para completar 72 preguntas. No podrás pausar el examen una vez iniciado.
          </p>
          <div className="flex justify-end gap-3">
            <button 
              onClick={() => navigate('/simulador')} 
              className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
            >
              Cancelar
            </button>
            <button 
              onClick={handleStartExamConfirmed}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isExamStarted) {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-4 md:p-8`}>
      <h1 className="text-2xl font-bold text-center mb-6 md:mb-8">Examen de Simulación OECE</h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        <div className="flex-1 lg:w-2/3">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 mb-6`}>
            {questions.length > 0 && <Question />}
          </div>
          <QuestionActions onFinish={() => setShowConfirmDialog(true)} />
        </div>

        <aside className="w-full lg:w-1/3 space-y-6">
          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-4 flex items-center justify-between`}>
            <span className={`font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tiempo Restante:</span>
            <Timer timeRemaining={timeRemaining} />
          </div>

          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-4 space-y-2 text-sm`}>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Respondidas</span>
              <span className="font-semibold text-green-500">{answeredCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Marcadas</span>
              <span className="font-semibold text-yellow-500">{markedCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Pendientes</span>
              <span className="font-semibold">{pendingCount}</span>
            </div>
          </div>

          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-4`}>
            <h3 className="text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}">Progreso del examen</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
              <div 
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}">{answeredCount} / {questions.length} respondidas</p>
          </div>

          <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-4`}>
            <QuestionNavigation />
          </div>
        </aside>
      </div>

      {showConfirmDialog && (
        <ConfirmDialog
          title="¿Finalizar Examen?"
          message="¿Estás seguro de que deseas finalizar y enviar tus respuestas?"
          onConfirm={handleEndExam}
          onCancel={() => setShowConfirmDialog(false)}
          confirmText="Finalizar"
          cancelText="Cancelar"
        />
      )}
    </div>
  );
};

export default ExamPage;