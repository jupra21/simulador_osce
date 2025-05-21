// c:\Users\Windows 11\Documents\20.5\simulador_osce\backend\src\services\questionService.ts

// Asumimos que la estructura de Question es similar o compatible.
// Si la definición de Question del frontend es compleja o tiene dependencias del frontend,
// podría ser mejor definir una interfaz local simple aquí para las preguntas.
import { questionsIntermediate } from '@data/questions-intermediate'; 

// Ajusta esta interfaz si es necesario para que coincida con la estructura real de tus preguntas
interface Question {
  id: number | string; // El id en tus datos es number
  category: string;
  question: string;
  options: Record<string, string>;
  correctAnswer: string;
  competencyArea: any; // Usa un tipo más específico si lo tienes
  explanation: string;
  // Añade otros campos si existen
}

const simulators: Record<string, Question[]> = {
  // Mapeamos un ID de simulador (que tu frontend/controlador usará)
  // a los datos de preguntas importados.
  // El simulatorId 'intermediate' es un ejemplo, usa el que corresponda.
  'intermediate': questionsIntermediate as Question[], 
  // Podrías añadir otros simuladores aquí:
  // 'basic1': questionsBasic1,
  // 'advanced': questionsAdvanced,
};

export const getQuestionsBySimulator = async (simulatorId: string, questionIndex: number): Promise<Partial<Question> | null> => {
  const questionsForSimulator = simulators[simulatorId];

  if (questionsForSimulator && questionIndex >= 0 && questionIndex < questionsForSimulator.length) {
    const question = questionsForSimulator[questionIndex];
    // Omitir correctAnswer y explanation según la lógica del controlador
    const { correctAnswer, explanation, ...questionWithoutAnswer } = question;
    return questionWithoutAnswer;
  }
  // En lugar de lanzar error directamente aquí, podrías devolver null
  // y dejar que el controlador maneje el error HTTP 500 si es más apropiado.
  // O mantener el throw si prefieres que el servicio sea más estricto.
  console.error(`Pregunta no encontrada para simulatorId: ${simulatorId}, questionIndex: ${questionIndex}`);
  throw new Error('Pregunta no encontrada o índice fuera de rango');
};

export const validateAnswer = async (simulatorId: string, questionId: string | number, userAnswer: string): Promise<{ isCorrect: boolean; correctAnswer: string; explanation: string } | null> => {
  const questionsForSimulator = simulators[simulatorId];

  if (!questionsForSimulator) {
    console.error(`Simulador no encontrado: ${simulatorId}`);
    throw new Error('Simulador no encontrado');
  }

  // Asegurarse de que questionId se compara correctamente (string vs number)
  // Tus IDs de pregunta en questions-intermediate.ts son numéricos.
  const qId = typeof questionId === 'string' ? parseInt(questionId, 10) : questionId;

  const question = questionsForSimulator.find((q: Question) => q.id === qId);

  if (!question) {
    console.error(`Pregunta no encontrada: id ${qId} en simulador ${simulatorId}`);
    throw new Error('Pregunta no encontrada para validar');
  }

  const isCorrect = question.correctAnswer === userAnswer;
  
  return {
    isCorrect,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
  };
};
