import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Question from '../components/Question';
import Timer from '../components/Timer';
import QuestionNavigation from '../components/QuestionNavigation';
import QuestionActions from '../components/QuestionActions';
import ConfirmDialog from '../components/ConfirmDialog';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';
import { SIMULATOR_IDS, SimulatorId } from '../data/questions-manager';

const ExamPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { theme } = useTheme();
  const { 
    questions,
    currentQuestionIndex,
    userAnswers,
    timeRemaining, // <--- RESTAURADO
    isExamStarted,
    startExam,
    endExam,
    resetExam,
    goToQuestion
  } = useExam();
  
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate('/simulador');
    }
  }, [id, navigate]);

  const handleStartExamConfirmed = () => {
    let simulatorToStart = id || '';
    if (simulatorToStart === 'intermediate-1') {
      simulatorToStart = SIMULATOR_IDS.INTERMEDIATE;
    }
    startExam(simulatorToStart as SimulatorId);
    setShowStartDialog(false);
  };

  const handleEndExam = () => {
    setShowConfirmDialog(false);
    endExam();
    navigate('/simulador/results'); 
  };

  // Función para manejar el cierre de sesión del simulador
  const handleCloseSession = () => {
    if (window.confirm("¿Estás seguro de que deseas cerrar la sesión del simulador? Perderás todo tu progreso actual.")) {
      resetExam();
      navigate('/simulador');
    }
  };

  const answeredCount = userAnswers.filter(a => a.selectedOption !== null).length; // <--- CAMBIO AQUÍ
  const markedCount = userAnswers.filter(a => a.isMarked).length;
  const pendingCount = questions.length - answeredCount;

  if (showStartDialog && !isExamStarted) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/50'}`}>
        <div className={`max-w-md w-full rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar el examen?</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            El examen consta de {questions.length} preguntas. Tendrás 2 horas para completarlo.
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => navigate('/simulador')}
              className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              onClick={handleStartExamConfirmed}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isExamStarted) {
    return null;
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Columna principal */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Link 
                to="/simulador"
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver a la selección de simuladores
              </Link>
            </div>

            <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Pregunta {currentQuestionIndex + 1} de {questions.length}</h2>
                <Timer timeRemaining={timeRemaining} /> {/* <--- PASAR PROP AQUÍ */}
              </div>
              <Question />
              <QuestionActions />
            </div>
          </div>

          {/* Columna lateral */}
          <div className="lg:col-span-1 space-y-6">
            <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-lg font-semibold mb-4">Resumen</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Respondidas:</span>
                  <span className="font-semibold text-green-500">{answeredCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Marcadas:</span>
                  <span className="font-semibold text-yellow-500">{markedCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pendientes:</span>
                  <span className="font-semibold text-red-500">{pendingCount}</span>
                </div>
              </div>
            </div>

            {/* Navegación de preguntas */}
            <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-lg font-semibold mb-4">Navegación</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToQuestion(index)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium ${
                      currentQuestionIndex === index
                        ? 'bg-blue-600 text-white'
                        : userAnswers[index]?.selectedOption // <--- CAMBIO AQUÍ
                        ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100'
                        : userAnswers[index]?.isMarked
                        ? 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón de cerrar sesión */}
            <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <button
                onClick={handleCloseSession}
                className="w-full px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Cerrar sesión del simulador
              </button>            </div>

            {/* Botón para cerrar sesión del simulador */}
            <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <button
                onClick={handleCloseSession}
                className="w-full px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Cerrar sesión del simulador
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Diálogo de confirmación para finalizar */}
      {showConfirmDialog && (
        <ConfirmDialog
          title="¿Deseas finalizar el examen?"
          message={
            <div className="space-y-2">
              <p>Has respondido {answeredCount} de {questions.length} preguntas.</p>
              <p className="text-yellow-600 dark:text-yellow-400">
                {pendingCount > 0 ? `Aún tienes ${pendingCount} preguntas sin responder.` : 'Has respondido todas las preguntas.'}
              </p>
            </div>
          }
          confirmText="Finalizar examen"
          cancelText="Continuar examen"
          onConfirm={handleEndExam}
          onCancel={() => setShowConfirmDialog(false)}
          warning={pendingCount > 0}
        />
      )}
    </div>
  );
};

export default ExamPage;