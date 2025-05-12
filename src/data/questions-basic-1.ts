import { CompetencyArea } from '../types/index';
import { Question } from '../types/index';

console.log('Cargando questions-basic-1.ts - Preguntas específicas del nivel básico I');

// Definición independiente de preguntas básicas (sin importar de questions.ts)
export const questionsBasic1: Question[] = [
  {
    id: 1,
    category: "Aspectos Generales",
    question: "¿Cuál es el objeto principal de la Ley General de Contrataciones Públicas?",
    options: {
      A: "Promover la inversión privada en infraestructura pública.",
      B: "Establecer el marco normativo para la contratación oportuna de bienes, servicios y obras por parte del Estado.",
      C: "Regular exclusivamente los contratos de consultoría.",
      D: "Fomentar la participación de empresas extranjeras en proyectos nacionales."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "La Ley tiene como objeto principal establecer el marco normativo que regula la contratación de bienes, servicios y obras por parte del Estado."
  },
  {
    id: 2,
    category: "Aspectos Generales",
    question: "¿Cuál es la finalidad de las contrataciones de bienes, servicios y obras por parte del Estado?",
    options: {
      A: "Generar mayores ingresos para las entidades públicas.",
      B: "Maximizar el uso de recursos públicos para cumplir fines públicos y mejorar las condiciones de vida.",
      C: "Reducir la cantidad de proveedores del Estado.",
      D: "Simplificar los trámites administrativos."
    },
    correctAnswer: "B",
    competencyArea: CompetencyArea.PUBLIC_MANAGEMENT,
    explanation: "La finalidad es maximizar el valor de los recursos públicos para mejorar las condiciones de vida de los ciudadanos."
  }
  // ... Aquí irían las demás preguntas del nivel básico (IDs 1-72)
];
