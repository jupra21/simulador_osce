/**
 * Este script JavaScript compara los archivos questions-basic-1.ts y questions-intermediate.ts
 * para identificar problemas en la carga de preguntas del Simulador Intermedio.
 */

// Comparar archivos
const fs = require('fs');
const path = require('path');

function comparaArchivos() {
  try {
    // Leer los archivos
    const basic1Path = path.join(__dirname, 'src', 'data', 'questions-basic-1.ts');
    const intermediatePath = path.join(__dirname, 'src', 'data', 'questions-intermediate.ts');
    
    const basic1Content = fs.readFileSync(basic1Path, 'utf8');
    const intermediateContent = fs.readFileSync(intermediatePath, 'utf8');
    
    console.log('\n===== COMPARACIÓN DE ARCHIVOS =====');
    
    // Verificar si basic1 importa de questions.ts
    const basic1ImportsQuestions = basic1Content.includes('import { questions }') || 
                                 basic1Content.includes("from './questions'");
    
    console.log(`Basic 1 importa questions.ts: ${basic1ImportsQuestions}`);
    
    // Verificar si intermediate importa de questions.ts
    const intermediateImportsQuestions = intermediateContent.includes('import { questions }') || 
                                      intermediateContent.includes("from './questions'");
    
    console.log(`Intermediate importa questions.ts: ${intermediateImportsQuestions}`);
    
    // Verificar cómo se exporta questionsIntermediate
    const exportIntermediate = intermediateContent.match(/export\s+const\s+questionsIntermediate\s*=\s*.+?;/s);
    if (exportIntermediate) {
      console.log("Export de questionsIntermediate encontrado:");
      console.log(exportIntermediate[0].substring(0, 100) + "...");
    } else {
      console.log("WARNING: No se encontró un export adecuado para questionsIntermediate");
    }
    
    // Verificar si hay problemas de sintaxis básicos
    if (!intermediateContent.includes('export const questionsIntermediate')) {
      console.log("ERROR: No se exporta correctamente questionsIntermediate");
    }
    
    // Contar preguntas
    const basic1QuestionCount = (basic1Content.match(/id:\s*\d+/g) || []).length;
    const intermediateQuestionCount = (intermediateContent.match(/id:\s*\d+/g) || []).length;
    
    console.log(`\nNúmero de preguntas:`)
    console.log(`- Basic 1: ${basic1QuestionCount} preguntas`);
    console.log(`- Intermediate: ${intermediateQuestionCount} preguntas`);
    
    // Extraer IDs
    const basic1Ids = basic1Content.match(/id:\s*(\d+)/g)?.map(id => 
      parseInt(id.replace('id:', '').trim())
    ).sort((a, b) => a - b) || [];
    
    const intermediateIds = intermediateContent.match(/id:\s*(\d+)/g)?.map(id => 
      parseInt(id.replace('id:', '').trim())
    ).sort((a, b) => a - b) || [];
    
    console.log(`\nRango de IDs:`)
    if (basic1Ids.length > 0) {
      console.log(`- Basic 1: ${basic1Ids[0]} a ${basic1Ids[basic1Ids.length-1]}`);
    }
    if (intermediateIds.length > 0) {
      console.log(`- Intermediate: ${intermediateIds[0]} a ${intermediateIds[intermediateIds.length-1]}`);
    }
    
    // Verificar overlapping de IDs
    const overlapping = basic1Ids.filter(id => intermediateIds.includes(id));
    console.log(`\nIDs duplicados entre ambos archivos: ${overlapping.length > 0 ? overlapping.join(', ') : 'Ninguno'}`);
    
    // Validar estructura
    console.log(`\n===== VALIDACIÓN ESTRUCTURAL =====`);
    
    // Verificar sintaxis general de questions-intermediate.ts
    const syntaxIssues = [];
    
    if (!intermediateContent.includes('import { Question }')) {
      syntaxIssues.push("Falta importación de interface Question");
    }
    
    if (!intermediateContent.includes('export const questionsIntermediate')) {
      syntaxIssues.push("Falta exportación de questionsIntermediate");
    }
    
    if (intermediateContent.includes('intermediateQuestions') && 
        !intermediateContent.includes('export const intermediateQuestions')) {
      syntaxIssues.push("Se declara variable intermediateQuestions pero no se exporta");
    }
    
    if (syntaxIssues.length > 0) {
      console.log("Problemas sintácticos encontrados:");
      syntaxIssues.forEach(issue => console.log(`- ${issue}`));
    } else {
      console.log("No se detectaron problemas sintácticos evidentes");
    }
    
    // Conclusiones
    console.log(`\n===== CONCLUSIÓN =====`);
    if (intermediateImportsQuestions) {
      console.log("❌ PROBLEMA: questions-intermediate.ts importa preguntas desde questions.ts");
      console.log("Solución: Eliminar la importación y definir directamente las preguntas");
    } else if (intermediateQuestionCount < 72) {
      console.log("❌ PROBLEMA: questions-intermediate.ts tiene menos de 72 preguntas");
      console.log("Solución: Verificar que se hayan incluido todas las preguntas");
    } else if (syntaxIssues.length > 0) {
      console.log("❌ PROBLEMA: Hay problemas de sintaxis en questions-intermediate.ts");
      console.log("Solución: Corregir los problemas identificados");
    } else {
      console.log("✅ questions-intermediate.ts parece estar correctamente configurado");
    }
    
  } catch (error) {
    console.error("Error al comparar archivos:", error);
  }
}

comparaArchivos();
