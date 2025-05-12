// Script para verificar las preguntas del simulador intermedio
import { questionsIntermediate } from './src/data/questions-intermediate.js';
import { SimulatorId, SIMULATOR_IDS, getQuestionsBySimulator } from './src/data/questions-manager.js';

console.log('Verificando preguntas del simulador intermedio:');
console.log(`Preguntas disponibles en questions-intermediate.ts: ${questionsIntermediate.length}`);

// Verificar las IDs
const ids = questionsIntermediate.map(q => q.id).sort((a, b) => a - b);
console.log(`Rango de IDs: ${Math.min(...ids)} a ${Math.max(...ids)}`);

// Verificar las preguntas que se retornan al seleccionar el simulador intermedio
const simulatorQuestions = getQuestionsBySimulator(SIMULATOR_IDS.INTERMEDIATE);
console.log(`Preguntas retornadas por getQuestionsBySimulator: ${simulatorQuestions.length}`);

if (simulatorQuestions.length > 0) {
  const simulatorIds = simulatorQuestions.map(q => q.id).sort((a, b) => a - b);
  console.log(`Rango de IDs en el simulador: ${Math.min(...simulatorIds)} a ${Math.max(...simulatorIds)}`);
  
  // Verificar si son las mismas preguntas
  const sameQuestions = questionsIntermediate.length === simulatorQuestions.length &&
    questionsIntermediate[0].id === simulatorQuestions[0].id;
  
  console.log(`¿Preguntas originales y retornadas son iguales?: ${sameQuestions}`);
  
  // Mostrar las primeras 5 preguntas retornadas
  console.log('\nPrimeras 5 preguntas retornadas:');
  simulatorQuestions.slice(0, 5).forEach((q, i) => {
    console.log(`${i+1}. ID: ${q.id}, Pregunta: ${q.question.substring(0, 50)}...`);
  });
}
