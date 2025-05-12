// Creamos un script simple para verificar el simulador usando TypeScript
// Guardar como test-intermediate.ts

import { questionsIntermediate } from './src/data/questions-intermediate';
import { Question } from './src/types';

// Función para verificar preguntas
function verificarPreguntas(preguntas: Question[], nombreSimulador: string) {
  console.log(`=== Verificando ${nombreSimulador} ===`);
  console.log(`Total de preguntas: ${preguntas.length}`);
  
  if (preguntas.length > 0) {
    // Obtener rango de IDs
    const ids = preguntas.map(q => q.id).sort((a, b) => a - b);
    console.log(`ID mínimo: ${Math.min(...ids)}`);
    console.log(`ID máximo: ${Math.max(...ids)}`);
    
    // Mostrar la primera y última pregunta
    console.log(`\nPrimera pregunta (ID: ${preguntas[0].id}):`);
    console.log(`- ${preguntas[0].question.substring(0, 100)}...`);
    
    console.log(`\nÚltima pregunta (ID: ${preguntas[preguntas.length-1].id}):`);
    console.log(`- ${preguntas[preguntas.length-1].question.substring(0, 100)}...`);
  } else {
    console.log('ERROR: No hay preguntas disponibles');
  }
}

// Verificar questions-intermediate.ts
verificarPreguntas(questionsIntermediate, "Simulador Intermedio");
