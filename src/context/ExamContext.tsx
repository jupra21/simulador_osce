import { createContext, useContext, useState, useEffect } from 'react';
import { Question, UserAnswer, ExamResults, CompetencyArea, CompetencyResult } from '../types/index';
import { getQuestionsBySimulator, SimulatorId, SIMULATOR_IDS } from '../data/questions-manager';

interface ExamContextType {
  isExamStarted: boolean;
  isExamCompleted: boolean;
  currentQuestionIndex: number;
  questions: Question[];
  userAnswers: UserAnswer[];
  timeRemaining: number;
  examResults: ExamResults | null;
  startExam: (simulatorId: SimulatorId) => void;
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
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const useExam = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};

interface ExamProviderProps {
  children: React.ReactNode;
}

export const ExamProvider = ({ children }: ExamProviderProps) => {
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hora en segundos (60 minutos)
  const [examResults, setExamResults] = useState<ExamResults | null>(null);
  const [isReviewMode, setReviewMode] = useState(false);
  const [currentSimulatorId, setCurrentSimulatorId] = useState<SimulatorId>(SIMULATOR_IDS.BASIC_1);
  
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
  }, [isExamStarted, isExamCompleted]);  const startExam = (simulatorId: SimulatorId) => {
    console.log('Starting exam with simulator:', simulatorId);
    const loadedQuestions = getQuestionsBySimulator(simulatorId);
    console.log('Loaded questions:', loadedQuestions?.length || 0);
    
    if (!loadedQuestions || loadedQuestions.length === 0) {
      console.error('No questions loaded for simulator:', simulatorId);
      return;
    }
    
    setQuestions(loadedQuestions);
    setCurrentQuestionIndex(0);    setUserAnswers(Array(loadedQuestions.length).fill({ selectedOption: null, isMarked: false }));
    setIsExamStarted(true);
    setIsExamCompleted(false);
    setTimeRemaining(3600);
    setExamResults(null);
    setCurrentSimulatorId(simulatorId);
    console.log('Exam started with', loadedQuestions.length, 'questions');
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
    setUserAnswers(prev => prev.map((answer, index) => {
      if (index === currentQuestionIndex) {
        return {
          ...answer,
          selectedOption: option
        };
      }
      return answer;
    }));
  };

  const toggleMarkQuestion = () => {
    setUserAnswers(prev => prev.map((answer, index) => {
      if (index === currentQuestionIndex) {
        return {
          ...answer,
          isMarked: !answer.isMarked
        };
      }
      return answer;
    }));
  };

  const calculateResults = () => {
    let correctCount = 0;
    let incorrectCount = 0;

    const competencyResults: Partial<Record<CompetencyArea, {
      total: number;
      correct: number;
      score: number;
    }>> = {};

    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      const competencyArea = question.competencyArea || CompetencyArea.PUBLIC_MANAGEMENT;

      // Initialize competency area results if not exists
      if (!competencyResults[competencyArea]) {
        competencyResults[competencyArea] = {
          total: 0,
          correct: 0,
          score: 0
        };
      }

      competencyResults[competencyArea]!.total += 1;

      if (!userAnswer || userAnswer.selectedOption === null) {
        incorrectCount++;
      } else if (userAnswer.selectedOption === question.correctAnswer) {
        correctCount++;
        competencyResults[competencyArea]!.correct += 1;
      } else {
        incorrectCount++;
      }
    });

    // Calculate score for each competency area (0-100)
    Object.keys(competencyResults).forEach(area => {
      const key = area as CompetencyArea;
      const { total, correct } = competencyResults[key]!;
      competencyResults[key]!.score = Math.round((correct / total) * 100);
    });    const formattedResults: ExamResults = {
      totalQuestions: questions.length,
      correctAnswers: correctCount,      incorrectAnswers: incorrectCount,
      unansweredQuestions: questions.length - correctCount - incorrectCount,
      score: Math.round((correctCount / questions.length) * 100),
      timeTaken: 3600 - timeRemaining,
      date: new Date(),
      competencyResults: Object.entries(competencyResults).reduce((acc, [key, value]) => {
        acc[key as CompetencyArea] = {
          score: value!.score,
          total: value!.total,
          percentage: value!.score,
          correct: value!.correct
        };
        return acc;
      }, {} as Record<CompetencyArea, CompetencyResult>)
    };

    setExamResults(formattedResults);
  };
  const resetExam = () => {
    setIsExamStarted(false);
    setIsExamCompleted(false);
    setCurrentQuestionIndex(0);
    setTimeRemaining(3600);
    setExamResults(null);
    setUserAnswers([]);
    setReviewMode(false);
  };

  return (
    <ExamContext.Provider
      value={{
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
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};