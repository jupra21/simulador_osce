// Simple test
import { questionsIntermediate } from './src/data/questions-intermediate.js';
import { getQuestionsBySimulator, SIMULATOR_IDS } from './src/data/questions-manager.js';

// Verificar las preguntas directamente desde el archivo
console.log('Preguntas desde questions-intermediate.js:');
console.log(`Total: ${questionsIntermediate.length}`);
if (questionsIntermediate.length > 0) {
    console.log(`Primera pregunta: ID=${questionsIntermediate[0].id}, ${questionsIntermediate[0].question.substring(0, 50)}...`);
}

// Verificar las preguntas desde el administrador
console.log('\nPreguntas desde questions-manager.js:');
const intermediateQuestions = getQuestionsBySimulator(SIMULATOR_IDS.INTERMEDIATE);
console.log(`Total: ${intermediateQuestions.length}`);
if (intermediateQuestions.length > 0) {
    console.log(`Primera pregunta: ID=${intermediateQuestions[0].id}, ${intermediateQuestions[0].question.substring(0, 50)}...`);
}

// Si hay discrepancia, mostrar más información
if (questionsIntermediate.length !== intermediateQuestions.length) {
    console.log('\n¡Alerta! Discrepancia en el número de preguntas:');
    
    // Mostrar todas las preguntas del simulador
    console.log('\nPreguntas retornadas por el simulador:');
    intermediateQuestions.forEach((q, i) => {
        console.log(`${i+1}. ID: ${q.id}, ${q.question.substring(0, 50)}...`);
    });
}
