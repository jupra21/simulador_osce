// Un script simple para verificar si los módulos están exportando correctamente
const fs = require('fs');

// Imprime el contenido de los archivos de preguntas
console.log('Archivo questions-basic-1.ts:');
console.log(fs.readFileSync('./src/data/questions-basic-1.ts', 'utf8'));

console.log('\n\nArchivo questions-basic-2.ts:');
console.log(fs.readFileSync('./src/data/questions-basic-2.ts', 'utf8'));

console.log('\n\nArchivo questions-intermediate.ts:');
console.log(fs.readFileSync('./src/data/questions-intermediate.ts', 'utf8'));

console.log('\n\nArchivo questions-advanced.ts:');
console.log(fs.readFileSync('./src/data/questions-advanced.ts', 'utf8'));

console.log('\n\nArchivo questions-manager.ts:');
console.log(fs.readFileSync('./src/data/questions-manager.ts', 'utf8'));
