import { questionsBasic1 } from './questions-basic-1';
import { questionsBasic2 } from './questions-basic-2';
import { questionsIntermediate } from './questions-intermediate';
import { questionsAdvanced } from './questions-advanced';
import { Question } from '../types/index';

// Verificamos las importaciones al cargar
console.log('VERIFICACIÓN IMPORTACIONES:');
console.log(`- questionsBasic1: ${questionsBasic1?.length || 0} preguntas`);
console.log(`- questionsIntermediate: ${questionsIntermediate?.length || 0} preguntas`);

export const SIMULATOR_IDS = {
  BASIC_1: 'basic-1',
  BASIC_2: 'basic-2',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
} as const;

export type SimulatorId = typeof SIMULATOR_IDS[keyof typeof SIMULATOR_IDS];

export const getQuestionsBySimulator = (simulatorId: SimulatorId): Question[] => {
  console.log(`Iniciando carga de preguntas para simulador: ${simulatorId}`);
    // Verificación inicial de las preguntas disponibles
  const questionModules = {
    basic1: questionsBasic1,
    basic2: questionsBasic2,
    intermediate: questionsIntermediate,
    advanced: questionsAdvanced
  };
    // Validación mejorada de los módulos
  Object.entries(questionModules).forEach(([name, questions]) => {
    console.log(`\nValidando módulo: ${name}`);
    
    if (!questions) {
      console.error(`❌ Error: El módulo ${name} no está definido`);
      return;
    }
    
    if (!Array.isArray(questions)) {
      console.error(`❌ Error: El módulo ${name} no es un array`);
      console.log('Tipo:', typeof questions);
      return;
    }
    
    // Verificar que cada pregunta tenga la estructura correcta
    const validQuestions = questions.every((q, index) => {
      if (!q || typeof q !== 'object') {
        console.error(`❌ Error: Pregunta ${index} no es un objeto válido`);
        return false;
      }
      
      if (!q.id || !q.question || !q.options || !q.correctAnswer) {
        console.error(`❌ Error: Pregunta ${index} (ID: ${q.id}) tiene campos faltantes`);
        return false;
      }
      
      return true;
    });
    
    if (validQuestions) {
      console.log(`✓ ${name}: ${questions.length} preguntas validadas correctamente`);
    } else {
      console.error(`❌ Error: El módulo ${name} tiene preguntas inválidas`);
    }
  });

  // Seleccionar las preguntas según el simulador
  let selectedQuestions: Question[] = [];
  
  switch (simulatorId) {
    case SIMULATOR_IDS.BASIC_1:
      selectedQuestions = questionsBasic1;
      break;
    case SIMULATOR_IDS.BASIC_2:
      selectedQuestions = questionsBasic2;
      break;
    case SIMULATOR_IDS.INTERMEDIATE:
      // Validación específica para el simulador intermedio
      if (!questionsIntermediate || !Array.isArray(questionsIntermediate)) {
        console.error('Error crítico: questionsIntermediate no está disponible o no es un array');
        return [];
      }

      // Validación adicional de estructura
      // Renombrar esta variable para evitar conflicto con la declarada en el bucle forEach
      const intermediateValidQuestions = questionsIntermediate.filter(q => {
        try {
          if (!q || typeof q !== 'object') return false;
          if (!Number.isInteger(q.id)) return false;
          if (typeof q.question !== 'string' || !q.question.trim()) return false;
          if (!q.options || typeof q.options !== 'object') return false;
          if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) return false;
          return true;
        } catch (error) {
          console.error('Error al validar pregunta:', q);
          return false;
        }
      });

      console.log(`Preguntas validadas para simulador intermedio: ${intermediateValidQuestions.length}`);
      
      // 1. Verificar que el módulo existe y es un array (ya hecho arriba)
      // 2. Verificar la cantidad de preguntas
      if (intermediateValidQuestions.length === 0) {
        console.error('Error: No hay preguntas válidas en el simulador intermedio');
        selectedQuestions = []; // Asegurarse de que selectedQuestions sea un array vacío
        return []; // Salir si no hay preguntas válidas
      }
      if (intermediateValidQuestions.length !== 72) {
        console.warn(`Advertencia: Se requieren 72 preguntas para el intermedio, pero se encontraron ${intermediateValidQuestions.length} válidas`);
      }
      
      // 3. Validar la estructura de cada pregunta (ya hecho con el filter)
      // 4. Reportar resultados de la validación
      if (intermediateValidQuestions.length === questionsIntermediate.length) {
        console.log('✓ Todas las preguntas del simulador intermedio son válidas');
      } else {
        console.error(`Error: ${questionsIntermediate.length - intermediateValidQuestions.length} preguntas del simulador intermedio son inválidas`);
      }
      
      selectedQuestions = intermediateValidQuestions;
      break;
    case SIMULATOR_IDS.ADVANCED:
      selectedQuestions = questionsAdvanced;
      break;
    default:
      console.error(`Simulador no reconocido: ${simulatorId}`);
      return [];
  }

  // Verificación final de las preguntas seleccionadas
  console.log(`Preguntas seleccionadas para ${simulatorId}: ${selectedQuestions.length}`);
  
  if (selectedQuestions.length === 0) {
    console.error(`Error: No se encontraron preguntas para el simulador ${simulatorId}`);
  } else if (selectedQuestions.length !== 72) {
    console.warn(`Advertencia: El simulador ${simulatorId} tiene ${selectedQuestions.length} preguntas en lugar de 72`);
  }

  return selectedQuestions;
};
