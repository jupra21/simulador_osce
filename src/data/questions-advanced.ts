import { Question } from '../types/index';
import { CompetencyArea } from '../types/index';

// Preguntas específicas para el simulador Avanzado
console.log('Cargando questions-advanced.ts');
export const questionsAdvanced: Question[] = [
  {
    id: 1,
    category: "Ejecución Contractual",
    question: "En un contrato de obra sujeto a un expediente técnico modificado, ¿cuál es el procedimiento correcto cuando surge una discrepancia entre el expediente técnico y la realidad física del terreno?",
    options: {
      A: "El supervisor debe resolver inmediatamente la discrepancia según su criterio técnico",
      B: "El contratista debe registrar la discrepancia en el cuaderno de obra y solicitar un pronunciamiento del supervisor",
      C: "La entidad debe aprobar automáticamente la modificación del expediente técnico",
      D: "Se debe convocar a un comité técnico de expertos para resolver la discrepancia"
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.EXECUTION,
    explanation: "El contratista debe anotar en el cuaderno de obra la discrepancia y solicitar al supervisor que emita un pronunciamiento. El supervisor debe resolver la discrepancia en un plazo máximo establecido por el reglamento."
  },
  {
    id: 2,
    category: "Sanciones Administrativas",
    question: "¿Qué criterio NO es considerado por el Tribunal de Contrataciones del Estado para graduar las sanciones administrativas?",
    options: {
      A: "La intencionalidad del infractor",
      B: "El reconocimiento de la infracción antes de que sea detectada",
      C: "La jerarquía del funcionario involucrado dentro de la entidad",
      D: "La conducta procesal del infractor durante el procedimiento"
    },
    correctAnswer: "C",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "La jerarquía del funcionario no es un criterio establecido para graduar sanciones. Los criterios están establecidos en el artículo 264 del Reglamento e incluyen: naturaleza de la infracción, intencionalidad, daño causado, reconocimiento de la infracción, antecedentes, conducta procesal y adopción de medidas de mitigación."
  }
];
