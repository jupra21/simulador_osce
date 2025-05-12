// Este script debe ejecutarse después de construir el proyecto
// Verifica que las referencias de los diferentes simuladores sean independientes

// Envolver en una función auto-ejecutable para simular código de módulo
(function() {
  // Cargar preguntas de diferentes simuladores
  console.log('Verificando independencia de simuladores...');
  
  try {
    // Importaciones ficticias para simular el entorno
    const basic1 = window.questionsBasic1;
    const intermediate = window.questionsIntermediate;
    
    if (!basic1 || !intermediate) {
      console.error('No se pudieron cargar los simuladores. Ejecutar después de construir.');
      return;
    }
    
    // Verificar cantidad
    console.log(`Simulador Básico I: ${basic1.length} preguntas`);
    console.log(`Simulador Intermedio: ${intermediate.length} preguntas`);
    
    // Verificar primera pregunta
    console.log('\nPrimer pregunta de cada simulador:');
    console.log(`Básico I - ID: ${basic1[0].id}, Pregunta: ${basic1[0].question.substring(0, 50)}...`);
    console.log(`Intermedio - ID: ${intermediate[0].id}, Pregunta: ${intermediate[0].question.substring(0, 50)}...`);
    
    // Verificar si son la misma referencia
    console.log('\nVerificación de referencia:');
    console.log(`¿Son el mismo array?: ${basic1 === intermediate}`);
    
    // Verificar si tienen el mismo contenido
    const sameContent = JSON.stringify(basic1.slice(0, 5)) === JSON.stringify(intermediate.slice(0, 5));
    console.log(`¿Tienen el mismo contenido (primeras 5 preguntas)?: ${sameContent}`);
    
    // Verificar si modificar uno afecta al otro
    console.log('\nPrueba de mutabilidad:');
    const originalText = basic1[0].question;
    
    // Hacemos una copia para no afectar el estado real
    const testBasic1 = [...basic1];
    testBasic1[0].question = 'TEXTO MODIFICADO PARA PRUEBA';
    
    console.log(`¿La modificación afectó al intermedio?: ${intermediate[0].question !== originalText}`);
    
    console.log('\nResultados:');
    if (basic1 !== intermediate && !sameContent) {
      console.log('✅ Los simuladores son independientes');
    } else {
      console.log('❌ Los simuladores no son independientes - requiere corrección');
    }
  } catch (error) {
    console.error('Error al ejecutar diagnóstico:', error);
  }
})();
