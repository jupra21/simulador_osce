import { useState, useEffect } from 'react';
import { Brain, ListChecks, Timer, Award, Sparkles, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Chatbot } from './Chatbot';
import { useExam } from '../context/ExamContext';
import ConfirmDialog from './ConfirmDialog';
import { SimulatorId, SIMULATOR_IDS, getQuestionsBySimulator } from '../data/questions-manager';

export const ExamSimulator = () => {
  const navigate = useNavigate();
  const { startExam } = useExam();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedSimulator, setSelectedSimulator] = useState<SimulatorId | null>(null);

  useEffect(() => {
    // Verificar la cantidad de preguntas en cada simulador
    console.log('Verificando simuladores:');
    const basicQuestions1 = getQuestionsBySimulator(SIMULATOR_IDS.BASIC_1);
    const basicQuestions2 = getQuestionsBySimulator(SIMULATOR_IDS.BASIC_2);
    const intermediateQuestions = getQuestionsBySimulator(SIMULATOR_IDS.INTERMEDIATE);
    const advancedQuestions = getQuestionsBySimulator(SIMULATOR_IDS.ADVANCED);
    
    console.log('Contenido de cada simulador:');
    console.log(`Simulador Básico I: ${basicQuestions1.length} preguntas`);
    console.log('Primera pregunta básica:', basicQuestions1[0]?.question || 'No hay preguntas');
    console.log(`Simulador Básico II: ${basicQuestions2.length} preguntas`);
    console.log(`Simulador Intermedio: ${intermediateQuestions.length} preguntas`);
    console.log(`Simulador Avanzado: ${advancedQuestions.length} preguntas`);
    console.log('Primera pregunta avanzada:', advancedQuestions[0]?.question || 'No hay preguntas');
  }, []);

  const simulators = [
    {
      id: SIMULATOR_IDS.BASIC_1,
      name: "Simulador Básico I",
      description: "72 preguntas del nivel básico, ideal para comenzar tu preparación",
      color: "blue"
    },
    {
      id: SIMULATOR_IDS.BASIC_2,
      name: "Simulador Básico II",
      description: "72 preguntas diferentes del nivel básico para reforzar tu aprendizaje",
      color: "green"
    },
    {
      id: SIMULATOR_IDS.INTERMEDIATE,
      name: "Simulador Intermedio",
      description: "72 preguntas de nivel intermedio para elevar tu preparación",
      color: "purple"
    },
    {
      id: SIMULATOR_IDS.ADVANCED,
      name: "Simulador Avanzado",
      description: "72 preguntas avanzadas para dominar todos los temas",
      color: "orange"
    }
  ];

  const handleStartExam = (simulatorId: SimulatorId) => {
    setSelectedSimulator(simulatorId);
    setShowConfirmDialog(true);
  };  const handleConfirmStart = async () => {
    if (selectedSimulator) {
      console.log(`ExamSimulator - iniciando simulador: ${selectedSimulator}`);
      await startExam(selectedSimulator);
      navigate(`/simulador/exam/${selectedSimulator}`);
    }
  };

  const features = [
    {
      icon: <ListChecks className="w-8 h-8 text-blue-500" />,
      title: "72 Preguntas Optimizadas por IA",
      description: "Preguntas generadas y seleccionadas por IA basadas en la última normativa de Contrataciones del Estado."
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: "Análisis Inteligente",
      description: "Evaluación de Gestión Pública, Actuaciones Preparatorias y Procedimientos de Selección con análisis predictivo."
    },
    {
      icon: <Timer className="w-8 h-8 text-green-500" />,
      title: "Simulación Adaptativa",
      description: "Tiempo controlado que se ajusta según tu desempeño y nivel de preparación."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Resultados con IA",
      description: "Análisis detallado de tu rendimiento con recomendaciones personalizadas por área."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors">
      {/* Diálogo de Confirmación */}
      {showConfirmDialog && (
        <ConfirmDialog
          title="¿Listo para comenzar el examen?"
          message={
            <div className="space-y-4">
              <p>Este simulador contiene:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>72 preguntas de diferentes áreas</li>
                <li>Duración: 60 minutos</li>
                <li>Modalidad similar al examen OECE</li>
                <li>No podrás pausar una vez iniciado</li>
              </ul>
              <p className="font-semibold text-blue-600 dark:text-blue-400">
                ¿Deseas comenzar ahora?
              </p>
            </div>
          }
          onConfirm={handleConfirmStart}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Simulador de Examen OECE
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Prepárate para la certificación con nuestros simuladores especializados.
            Cada simulador contiene diferentes preguntas adaptadas a tu nivel.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Selecciona un simulador</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {simulators.map((simulator) => (
              <div key={simulator.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <Target className={`w-12 h-12 text-${simulator.color}-500 mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{simulator.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{simulator.description}</p>
                  <button
                    onClick={() => handleStartExam(simulator.id)}
                    className={`mt-4 w-full bg-${simulator.color}-500 text-white py-2 px-4 rounded-lg hover:bg-${simulator.color}-600 transition-colors`}
                  >
                    Iniciar Simulador
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Características del simulador</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};