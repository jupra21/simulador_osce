import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, RotateCcw, Eye } from 'lucide-react';
import Layout from '../components/Layout';
import ResultsSummary from '../components/ResultsSummary';
import ConfirmDialog from '../components/ConfirmDialog';
import { useExam } from '../context/ExamContext';
import { useTheme } from '../context/ThemeContext';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const { examResults, resetExam, setReviewMode } = useExam();
  const { theme } = useTheme();
  const [showResetDialog, setShowResetDialog] = useState(false);
  
  // Si no hay resultados, redirige a la página de inicio
  if (!examResults) {
    navigate('/');
    return null;
  }

  const handleResetExam = () => {
    setShowResetDialog(false);
    resetExam();
    navigate('/');
  };
  
  const handleReviewExam = () => {
    setReviewMode(true);
    // Pasar el estado en la navegación
    navigate('/review', { state: { isReviewing: true } }); 
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ResultsSummary />
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={handleReviewExam}
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            <Eye size={18} className="mr-2" />
            Revisar Respuestas
          </button>
          
          <button
            onClick={() => setShowResetDialog(true)}
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            <RotateCcw size={18} className="mr-2" />
            Reiniciar Examen
          </button>
          
          <a
            href="#"
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={(e) => {
              e.preventDefault();
              window.print();
            }}
          >
            <FileText size={18} className="mr-2" />
            Imprimir Resultados
          </a>
        </div>
        
        <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} mb-8`}>
          <h2 className="text-xl font-bold mb-4">Recomendaciones</h2>
          <div className="space-y-4">
            <p>
              A continuación, te presentamos algunas recomendaciones basadas en tus resultados:
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Revisa detalladamente las preguntas que has fallado para comprender los conceptos clave.</li>
              <li>Presta especial atención a las áreas de competencia donde obtuviste menor puntaje.</li>
              <li>Consulta la Ley de Contrataciones del Estado y sus reglamentos para reforzar los temas en los que presentas dificultades.</li>
              <li>Realiza el examen nuevamente después de estudiar para medir tu progreso.</li>
            </ul>
            <p className="mt-4">
              Recuerda que la práctica constante es fundamental para dominar los conceptos y procedimientos relacionados con las contrataciones públicas.
            </p>
          </div>
        </div>
        
        {/* Renderizar ConfirmDialog solo si showResetDialog es true */}
        {showResetDialog && (
          <ConfirmDialog
            title="Reiniciar Examen"
            message="¿Estás seguro de que deseas reiniciar el examen? Se borrarán todos tus resultados actuales."
            confirmText="Reiniciar"
            cancelText="Cancelar"
            onConfirm={handleResetExam}
            onCancel={() => setShowResetDialog(false)}
            warning={true}
          />
        )}
      </div>
    </Layout>
  );
};

export default ResultsPage;