import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Question from '../components/Question';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import QuestionNavigation from '../components/QuestionNavigation';
import QuestionActions from '../components/QuestionActions';
import ConfirmDialog from '../components/ConfirmDialog';
import { useExam } from '../context/ExamContext';

const ExamPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    isExamStarted, 
    isExamCompleted, 
    startExam, 
    endExam, 
    resetExam, 
    timeRemaining,
    userAnswers,
    questions
  } = useExam();
  
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(false);
  
  const handleStartExam = () => {
    setShowStartDialog(false);
    startExam();
  };
  
  const handleShowEndDialog = () => {
    setShowEndDialog(true);
  };
  
  const handleEndExam = () => {
    setShowEndDialog(false);
    endExam();
    navigate('/results');
  };
  
  // Si el examen no ha iniciado, muestra la página de inicio del examen
  if (!isExamStarted && !isExamCompleted) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold mb-6">Examen de Simulación OECE</h1>
            <p className="mb-8">
              Este examen consiste en 72 preguntas de opción múltiple sobre la Ley de Contrataciones del Estado y normativas relacionadas. Tienes 2 horas para completarlo.
            </p>
            
            <button
              onClick={() => setShowStartDialog(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Iniciar Examen
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold mb-4">Instrucciones</h2>
            <ul className="text-left space-y-2 mb-6">
              <li>• Tienes 2 horas (120 minutos) para completar las 72 preguntas.</li>
              <li>• Puedes navegar libremente entre las preguntas.</li>
              <li>• Puedes marcar preguntas para revisarlas más tarde.</li>
              <li>• Para aprobar necesitas al menos el 70% de respuestas correctas.</li>
              <li>• Una vez finalizado el examen, podrás revisar tus respuestas y ver las explicaciones.</li>
            </ul>
            <p className="font-medium">¡Buena suerte!</p>
          </div>
          
          <ConfirmDialog
            isOpen={showStartDialog}
            title="Iniciar Examen"
            message={
              <div>
                <p>Estás a punto de iniciar el examen de simulación OECE.</p>
                <p className="mt-2">Tendrás 2 horas para responder 72 preguntas. ¿Estás listo para comenzar?</p>
              </div>
            }
            confirmText="Comenzar"
            cancelText="Cancelar"
            onConfirm={handleStartExam}
            onCancel={() => setShowStartDialog(false)}
          />
        </div>
      </Layout>
    );
  }
  
  // Si el examen ha sido completado, redirige a la página de resultados
  if (isExamCompleted) {
    navigate('/results');
    return null;
  }
  
  // Calcula estadísticas del examen
  const answeredCount = userAnswers.filter(a => a.selectedOption !== null).length;
  const markedCount = userAnswers.filter(a => a.isMarked).length;
  const remainingCount = questions.length - answeredCount;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Examen de Simulación OECE</h1>
          <Timer timeRemaining={timeRemaining} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Question />
            
            <QuestionActions onFinish={handleShowEndDialog} />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <h3 className="font-semibold mb-2">Resumen del Examen</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-green-500">{answeredCount}</div>
                  <div className="text-sm opacity-75">Respondidas</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-500">{markedCount}</div>
                  <div className="text-sm opacity-75">Marcadas</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-500">{remainingCount}</div>
                  <div className="text-sm opacity-75">Pendientes</div>
                </div>
              </div>
            </div>
            
            <ProgressBar />
            
            <QuestionNavigation />
          </div>
        </div>
        
        <ConfirmDialog
          isOpen={showEndDialog}
          title="Finalizar Examen"
          message={
            <div>
              <p>¿Estás seguro de que deseas finalizar el examen?</p>
              <p className="mt-2">
                Has respondido {answeredCount} de {questions.length} preguntas.
                {remainingCount > 0 && ` Aún quedan ${remainingCount} preguntas sin responder.`}
              </p>
              <p className="mt-2">Una vez finalizado, no podrás modificar tus respuestas.</p>
            </div>
          }
          confirmText="Finalizar Examen"
          cancelText="Continuar Examen"
          onConfirm={handleEndExam}
          onCancel={() => setShowEndDialog(false)}
          warning={true}
        />
      </div>
    </Layout>
  );
};

export default ExamPage;