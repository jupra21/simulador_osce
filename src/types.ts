export type CompetencyArea = 
  | 'Gestión Pública'
  | 'Actuaciones Preparatorias'
  | 'Procedimientos de Selección'
  | 'Ejecución Contractual';

export interface Subscription {
  id: string;
  name: string;
  price: number;
  duration: number;
  features: string[];
  image?: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  competencyArea: CompetencyArea;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number;
}

export interface ExamResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  timeSpent: number;
  competencyAreaScores: Record<CompetencyArea, number>;
  answers: UserAnswer[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  subscriptionStatus: 'active' | 'trial' | 'expired';
  subscriptionEndDate: Date;
  examHistory: ExamResult[];
}

export interface ExamResult {
  id: string;
  date: Date;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  details: QuestionResult[];
}

export interface QuestionResult {
  questionId: number;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
} 