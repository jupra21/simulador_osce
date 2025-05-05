import React, { createContext, useContext, useState, useEffect } from 'react';
import { Question, UserAnswer, ExamResults, CompetencyArea } from '../types/index';
import { questions } from '../data/questions';

type ExamContextType = {
  isExamStarted: boolean;
  isExamCompleted: boolean;
  currentQuestionIndex: number;
  questions: Question[];
  userAnswers: UserAnswer[];
  timeRemaining: number;
  examResults: ExamResults | null;
  startExam: (simulatorId: string) => void;
  endExam: () => void;
  goToQuestion: (index: number) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  answerQuestion: (option: "A" | "B" | "C" | "D" | null) => void;
  toggleMarkQuestion: () => void;
  calculateResults: () => void;
  resetExam: () => void;
  isReviewMode: boolean;
  setReviewMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const useExam = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};

export const ExamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(7200); // 2 horas en segundos
  const [examResults, setExamResults] = useState<ExamResults | null>(null);
  const [isReviewMode, setReviewMode] = useState(false);
  
  useEffect(() => {
    if (isExamStarted && !isExamCompleted) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            endExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isExamStarted, isExamCompleted]);
  const startExam = (simulatorId: string) => {
    console.log(`Starting exam with simulator ID: ${simulatorId}`);
    setIsExamStarted(true);
    setIsExamCompleted(false);
    setCurrentQuestionIndex(0);
    setTimeRemaining(7200); // 2 hours in seconds (can be adjusted based on simulator difficulty)
    setExamResults(null);
    setReviewMode(false);
    setUserAnswers(questions.map(q => ({
      questionId: q.id,
      selectedOption: null,
      isMarked: false
    })));
  };

  const endExam = () => {
    setIsExamCompleted(true);
    setIsExamStarted(false);
    calculateResults();
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const answerQuestion = (option: "A" | "B" | "C" | "D" | null) => {
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      const answerIndex = newAnswers.findIndex(a => a.questionId === questions[currentQuestionIndex].id);
      if (answerIndex !== -1) {
        newAnswers[answerIndex] = {
          ...newAnswers[answerIndex],
          selectedOption: option
        };
      }
      return newAnswers;
    });
  };

  const toggleMarkQuestion = () => {
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      const answerIndex = newAnswers.findIndex(a => a.questionId === questions[currentQuestionIndex].id);
      if (answerIndex !== -1) {
        newAnswers[answerIndex] = {
          ...newAnswers[answerIndex],
          isMarked: !newAnswers[answerIndex].isMarked
        };
      }
      return newAnswers;
    });
  };

  const resetExam = () => {
    setIsExamStarted(false);
    setIsExamCompleted(false);
    setCurrentQuestionIndex(0);
    setTimeRemaining(7200);
    setExamResults(null);
    setReviewMode(false);
    setUserAnswers([]);
  };

  const calculateResults = () => {
    const totalQuestions = questions.length;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unanswered = 0;
    
    // Inicializa los resultados por competencia
    const competencyResults: Partial<Record<CompetencyArea, {
      total: number;
      correct: number;
      score: number;
    }>> = {};
    
    Object.values(CompetencyArea).forEach(area => {
      competencyResults[area] = {
        total: 0,
        correct: 0,
        score: 0
      };
    });

    // Calcula resultados
    questions.forEach(question => {
      const userAnswer = userAnswers.find(a => a.questionId === question.id);
      
      if (question.competencyArea && competencyResults[question.competencyArea]) {
        competencyResults[question.competencyArea]!.total++;
      }
      
      if (!userAnswer || userAnswer.selectedOption === null) {
        unanswered++;
      } else if (userAnswer.selectedOption === question.correctAnswer) {
        correctAnswers++;
        if (question.competencyArea && competencyResults[question.competencyArea]) {
          competencyResults[question.competencyArea]!.correct++;
        }
      } else {
        incorrectAnswers++;
      }
    });

    // Calcula porcentajes por competencia
    Object.keys(competencyResults).forEach(area => {
      const competencyArea = area as CompetencyArea;
      const total = competencyResults[competencyArea]!.total;
      const correct = competencyResults[competencyArea]!.correct;
      competencyResults[competencyArea]!.score = total > 0 ? (correct / total) * 100 : 0;
    });

    const score = (correctAnswers / totalQuestions) * 100;
    
    // Determinar el nivel alcanzado
    let achievedLevel = "No aprobado";
    let nextLevel = "Básico";
    let pointsForNextLevel = 30;

    if (score >= 58) {
      achievedLevel = "Avanzado";
      nextLevel = "Completado";
      pointsForNextLevel = 0;
    } else if (score >= 43) {
      achievedLevel = "Intermedio";
      nextLevel = "Avanzado";
      pointsForNextLevel = 58;
    } else if (score >= 30) {
      achievedLevel = "Básico";
      nextLevel = "Intermedio";
      pointsForNextLevel = 43;
    }

    const results: ExamResults = {
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      unanswered,
      score,
      achievedLevel,
      nextLevel,
      pointsForNextLevel,
      competencyResults: competencyResults as Required<typeof competencyResults>,
      timeTaken: 7200 - timeRemaining
    };

    setExamResults(results);
  };

  return (
    <ExamContext.Provider value={{
      isExamStarted,
      isExamCompleted,
      currentQuestionIndex,
      questions,
      userAnswers,
      timeRemaining,
      examResults,
      startExam,
      endExam,
      goToQuestion,
      goToNextQuestion,
      goToPreviousQuestion,
      answerQuestion,
      toggleMarkQuestion,
      calculateResults,
      resetExam,
      isReviewMode,
      setReviewMode
    }}>
      {children}
    </ExamContext.Provider>
  );
};