// Script para analizar los archivos de preguntas directamente
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Iniciando análisis de archivos de preguntas...");

// Función para leer un archivo
function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error(`Error al leer ${filePath}:`, err);
    return '';
  }
}

// Analizar un archivo de preguntas
function analyzeQuestionsFile(fileName) {
  const filePath = path.join(__dirname, 'src', 'data', fileName);
  const content = readFileContent(filePath);
  
  console.log(`\n===== ANÁLISIS DE ${fileName} =====`);
  
  // Verificar si importa de questions.ts
  if (content.includes('import { questions }') || 
      content.includes("import {questions}") ||
      content.includes("from './questions'")) {
    console.log("⚠️ Este archivo importa preguntas del archivo questions.ts");
  } else {
    console.log("✅ Este archivo no importa del archivo questions.ts (definición propia)");
  }
  
  // Verificar cómo se exportan las preguntas
  const exportMatch = content.match(/export const \w+\s*=\s*([\s\S]*?);?\s*$/m);
  if (exportMatch) {
    const exportStatement = exportMatch[0].substring(0, 100) + '...';
    console.log("Export statement:", exportStatement);
    
    if (exportMatch[0].includes('questions')) {
      console.log("⚠️ Este archivo parece estar re-exportando preguntas de otro archivo");
    } else if (exportMatch[0].includes('[')) {
      console.log("✅ Este archivo define sus propias preguntas en un array");
    }
  } else {
    console.log("❌ No se encontró una declaración de exportación en este archivo");
  }
  
  // Contar preguntas
  const questionCount = (content.match(/id:\s*\d+/g) || []).length;
  console.log(`Aproximadamente ${questionCount} preguntas encontradas en este archivo`);
  
  // Análisis de IDs
  const idMatches = content.match(/id:\s*(\d+)/g) || [];
  const ids = idMatches.map(match => parseInt(match.replace('id:', '').trim(), 10)).filter(id => !isNaN(id));
  
  if (ids.length > 0) {
    const uniqueIds = [...new Set(ids)];
    console.log(`IDs únicos: ${uniqueIds.length}/${ids.length}`);
    console.log(`Rango de IDs: ${Math.min(...uniqueIds)} - ${Math.max(...uniqueIds)}`);
    
    // Verificar si los IDs parecen duplicados de otro simulador
    if (Math.min(...uniqueIds) === 1 && Math.max(...uniqueIds) <= 72) {
      console.log("⚠️ Los IDs usados coinciden con el rango típico del Simulador Básico I");
    } else if (Math.min(...uniqueIds) === 3 && Math.max(...uniqueIds) >= 74) {
      console.log("✅ Los IDs parecen específicos del Simulador Intermedio (comienzan en 3)");
    }
  } else {
    console.log("❌ No se encontraron IDs de preguntas en este archivo");
  }
  
  return {
    fileName,
    importFromQuestions: content.includes('import { questions }') || content.includes("from './questions'"),
    questionCount,
    ids
  };
}

const files = [
  'questions-basic-1.ts',
  'questions-intermediate.ts',
  'questions.ts'
];

const results = files.map(fileName => analyzeQuestionsFile(fileName));

// Comparación final
console.log("\n===== CONCLUSIÓN =====");
if (results[0].importFromQuestions && results[1].importFromQuestions) {
  console.log("❌ PROBLEMA ENCONTRADO: Tanto questions-basic-1.ts como questions-intermediate.ts importan las mismas preguntas del archivo questions.ts");
  console.log("   Esta es la causa de que el Simulador Intermedio muestre las mismas preguntas que el Básico I");
} else if (results[1].importFromQuestions) {
  console.log("❌ PROBLEMA ENCONTRADO: questions-intermediate.ts importa preguntas del archivo questions.ts");
} else if (results[1].questionCount < 10) {
  console.log("❌ PROBLEMA ENCONTRADO: questions-intermediate.ts tiene muy pocas preguntas definidas");
} else {
  console.log("✓ No se detectaron problemas obvios en la estructura de los archivos");
}
