export enum CompetencyArea {
  PUBLIC_MANAGEMENT = "Gestión Pública",
  PLANNING = "Planificación",
  SELECTION = "Selección",
  CONTRACTING = "Contratación",
  EXECUTION = "Ejecución",
  INNOVATION = "Innovación y Transformación Digital"
}

export interface User {
  id: string;
  email: string;
  name: string;
  role?: 'user' | 'admin'; // <--- AÑADIR CAMPO ROLE (opcional por si algunos usuarios no lo tienen aún)
  subscriptionStatus: 'trial' | 'active' | 'inactive';
  subscriptionEndDate: Date | null;
  examHistory: ExamHistoryType[];
}

export interface ExamHistoryType {
  id: string;
  date: Date;
  score: number;
  timeSpent: number;
  correctAnswers: number;
  totalQuestions: number;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  competencyArea?: CompetencyArea;
  explanation?: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  isMarked: boolean;
}

export interface CompetencyResult {
  total: number;
  correct: number;
  score: number;
  percentage: number;
}

export interface ExamResults {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unansweredQuestions: number;
  score: number;
  timeTaken: number;
  competencyResults: Record<CompetencyArea, CompetencyResult>;
  date: Date;
  achievedLevel?: string;
  nextLevel?: string;
  pointsForNextLevel?: number;
}

export * from './simulator';