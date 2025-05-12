// Test para el simulador intermedio (usando ESM)
import { questionsIntermediate } from './src/data/questions-intermediate.js';
import { getQuestionsBySimulator, SIMULATOR_IDS } from './src/data/questions-manager.js';

console.log('===== ANÁLISIS DEL SIMULADOR INTERMEDIO =====');
console.log(`1. Total de preguntas en questions-intermediate.js: ${questionsIntermediate.length}`);

// Verificar las IDs
const ids = questionsIntermediate.map(q => q.id).sort((a, b) => a - b);
console.log(`2. Rango de IDs: ${ids[0]} a ${ids[ids.length - 1]}`);

// Obtener preguntas a través del gestor
const simulatorQuestions = getQuestionsBySimulator(SIMULATOR_IDS.INTERMEDIATE);
console.log(`3. Total de preguntas obtenidas con getQuestionsBySimulator: ${simulatorQuestions.length}`);

// Verificar si hay filtrado
if (simulatorQuestions.length !== questionsIntermediate.length) {
  console.log('\n⚠️ ALERTA: Discrepancia en el número de preguntas');
  console.log('Revisando preguntas retornadas por el simulador:');
  simulatorQuestions.forEach((q, i) => {
    console.log(`${i+1}. ID: ${q.id}, Categoría: ${q.category}, Pregunta: ${q.question.substring(0, 40)}...`);
  });
}

// Revisar la función getQuestionsBySimulator
console.log('\n4. Revisando la implementación de getQuestionsBySimulator:');
console.log('SIMULATOR_IDS.INTERMEDIATE =', SIMULATOR_IDS.INTERMEDIATE);
