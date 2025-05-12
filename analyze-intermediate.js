const fs = require('fs');
const path = require('path');

// Leer el archivo questions-intermediate.ts
const filePath = path.join(__dirname, 'src', 'data', 'questions-intermediate.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Función para extraer las preguntas del contenido
function extractQuestions(content) {
    // Buscar el array de preguntas
    const match = content.match(/export const questionsIntermediate: Question\[\] = \[([\s\S]*)\];/);
    if (!match) {
        console.error('No se encontró el array de preguntas');
        return [];
    }

    // Extraer todas las preguntas individuales
    const questionsContent = match[1];
    const questions = [];
    let currentQuestion = '';
    let braceCount = 0;
    
    for (const char of questionsContent) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        
        currentQuestion += char;
        
        if (braceCount === 0 && currentQuestion.trim()) {
            if (currentQuestion.includes('id:')) {
                questions.push(currentQuestion.trim());
                currentQuestion = '';
            }
        }
    }
    
    return questions;
}

// Analizar las preguntas
const questions = extractQuestions(content);
console.log(`Total de preguntas encontradas: ${questions.length}`);

// Verificar IDs
const ids = questions.map(q => {
    const idMatch = q.match(/id:\s*(\d+)/);
    return idMatch ? parseInt(idMatch[1]) : null;
}).filter(id => id !== null).sort((a, b) => a - b);

console.log('\nRango de IDs:');
console.log(`- ID mínimo: ${Math.min(...ids)}`);
console.log(`- ID máximo: ${Math.max(...ids)}`);

// Verificar continuidad de IDs
const missingIds = [];
for (let i = 1; i <= 72; i++) {
    if (!ids.includes(i)) {
        missingIds.push(i);
    }
}

if (missingIds.length > 0) {
    console.log('\nIDs faltantes:', missingIds);
} else {
    console.log('\nTodas las IDs del 1 al 72 están presentes');
}

// Verificar estructura de las preguntas
console.log('\nVerificando estructura de las preguntas:');
questions.forEach((q, index) => {
    const hasId = q.includes('id:');
    const hasQuestion = q.includes('question:');
    const hasOptions = q.includes('options:');
    const hasCorrectAnswer = q.includes('correctAnswer:');
    
    if (!hasId || !hasQuestion || !hasOptions || !hasCorrectAnswer) {
        console.log(`\nPregunta #${index + 1} incompleta:`);
        if (!hasId) console.log('- Falta ID');
        if (!hasQuestion) console.log('- Falta pregunta');
        if (!hasOptions) console.log('- Faltan opciones');
        if (!hasCorrectAnswer) console.log('- Falta respuesta correcta');
    }
});
