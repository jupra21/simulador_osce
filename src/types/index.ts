export enum CompetencyArea {
  PUBLIC_MANAGEMENT = "Gestión Pública",
  PREPARATORY_ACTIONS = "Actuaciones Preparatorias",
  SELECTION_PROCEDURES = "Procedimientos de Selección",
  CONTRACT_EXECUTION = "Ejecución Contractual"
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
  correctAnswer: "A" | "B" | "C" | "D";
  competencyArea?: CompetencyArea;
  explanation?: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: "A" | "B" | "C" | "D" | null;
  isMarked: boolean;
}

export interface ExamResults {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  score: number;
  achievedLevel: string;
  nextLevel: string;
  pointsForNextLevel: number;
  competencyResults: {
    [key in CompetencyArea]: {
      total: number;
      correct: number;
      score: number;
    };
  };
  timeTaken: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  subscriptionEndDate?: Date;
  examHistory: ExamHistory[];
}

export interface ExamHistory {
  id: string;
  userId: string;
  date: Date;
  score: number;
  timeSpent: number;
  questionsAnswered: number;
  correctAnswers: number;
}

export interface Subscription {
  id: string;
  name: string;
  price: number;
  duration: number; // en días
  features: string[];
}