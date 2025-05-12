import { getQuestionsBySimulator, SIMULATOR_IDS } from './src/data/questions-manager.ts';
import { questionsBasic2 } from './src/data/questions-basic-2.ts';
import { questionsIntermediate } from './src/data/questions-intermediate.ts';
import { questionsBasic1 } from './src/data/questions-basic-1.ts';

// Contar preguntas en todos los simuladores
console.log('\n===== CONTEO DE PREGUNTAS POR SIMULADOR =====');
console.log('Simulador Básico I:', getQuestionsBySimulator(SIMULATOR_IDS.BASIC_1).length, 'preguntas');
console.log('Simulador Básico II:', getQuestionsBySimulator(SIMULATOR_IDS.BASIC_2).length, 'preguntas');
console.log('Simulador Intermedio:', getQuestionsBySimulator(SIMULATOR_IDS.INTERMEDIATE).length, 'preguntas');
console.log('Simulador Avanzado:', getQuestionsBySimulator(SIMULATOR_IDS.ADVANCED).length, 'preguntas');

// Compare first questions to see if they are the same
console.log('\n===== COMPARANDO PRIMERAS PREGUNTAS =====');
const basic1First = getQuestionsBySimulator(SIMULATOR_IDS.BASIC_1)[0];
const intermediateFirst = getQuestionsBySimulator(SIMULATOR_IDS.INTERMEDIATE)[0];
console.log('Básico I primera pregunta:', basic1First?.id, basic1First?.question?.substring(0, 30));
console.log('Intermedio primera pregunta:', intermediateFirst?.id, intermediateFirst?.question?.substring(0, 30));
console.log('¿Son iguales?', basic1First?.id === intermediateFirst?.id && basic1First?.question === intermediateFirst?.question);

// Test detallado del Simulador Intermedio
console.log(`\n===== TEST DETALLADO: SIMULADOR INTERMEDIO =====`);

// Verificar el número total de preguntas
console.log(`Total de preguntas: ${questionsIntermediate.length}`);

// Verificar distribución por categoría para Intermedio
const categoriesInt = {};
questionsIntermediate.forEach(q => {
  const cat = q.category || 'Sin categoría';
  categoriesInt[cat] = (categoriesInt[cat] || 0) + 1;
});

console.log('\nDistribución por categorías:');
Object.entries(categoriesInt).forEach(([cat, count]) => {
  console.log(`- ${cat}: ${count} preguntas`);
});

// Verificar el rango de IDs para Intermedio
const idsInt = questionsIntermediate.map(q => q.id).sort((a, b) => a - b);
console.log(`\nRango de IDs: ${idsInt[0]} a ${idsInt[idsInt.length - 1]}`);

// Test detallado del Simulador Básico II
console.log(`\n===== TEST DETALLADO: SIMULADOR BÁSICO II =====`);

// Verificar el número total de preguntas
console.log(`Total de preguntas: ${questionsBasic2.length}`);

// Verificar distribución por categoría
const categories = {};
questionsBasic2.forEach(q => {
  const cat = q.category || 'Sin categoría';
  categories[cat] = (categories[cat] || 0) + 1;
});

console.log('\nDistribución por categorías:');
Object.entries(categories).forEach(([cat, count]) => {
  console.log(`- ${cat}: ${count} preguntas`);
});

// Verificar el rango de IDs
const ids = questionsBasic2.map(q => q.id).sort((a, b) => a - b);
console.log(`\nRango de IDs: ${ids[0]} a ${ids[ids.length - 1]}`);

// Verificar si hay alguna pregunta duplicada por ID
const uniqueIds = new Set(ids);
console.log(`\nIDs únicos: ${uniqueIds.size} (debería ser igual al total: ${questionsBasic2.length})`);
if (uniqueIds.size !== questionsBasic2.length) {
  console.log('⚠️ ¡ALERTA! Hay IDs duplicados en las preguntas');
  
  // Encontrar los IDs duplicados
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  console.log(`IDs duplicados: ${[...new Set(duplicates)].join(', ')}`);
}

// Verificar los bloques
console.log('\nVerificación de bloques:');
const bloque1 = questionsBasic2.filter(q => q.id >= 1 && q.id <= 24);
const bloque2 = questionsBasic2.filter(q => q.id >= 25 && q.id <= 48);
const bloque3 = questionsBasic2.filter(q => q.id >= 49 && q.id <= 72);

console.log(`- Bloque 1 (IDs 1-24): ${bloque1.length} preguntas`);
console.log(`- Bloque 2 (IDs 25-48): ${bloque2.length} preguntas`);
console.log(`- Bloque 3 (IDs 49-72): ${bloque3.length} preguntas`);

// Resumen final
console.log('\n===== RESUMEN =====');
if (questionsBasic2.length === 72 && uniqueIds.size === 72) {
  console.log('✅ El Simulador Básico II está correctamente configurado con 72 preguntas.');
} else {
  console.log('❌ Hay problemas con la configuración del Simulador Básico II.');
}
