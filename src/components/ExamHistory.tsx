import React from 'react';
import { ExamHistory as ExamHistoryType } from '../types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ExamHistoryProps {
  exams: ExamHistoryType[];
}

export const ExamHistory: React.FC<ExamHistoryProps> = ({ exams }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Historial de Exámenes
        </h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {exams.map((exam) => (
          <li key={exam.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-sm font-medium text-blue-600 truncate">
                    Examen #{exam.id}
                  </p>
                  <p className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {exam.correctAnswers} correctas
                    </span>
                  </p>
                </div>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="text-sm text-gray-500">
                    {format(new Date(exam.date), "d 'de' MMMM 'de' yyyy", { locale: es })}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    Puntuación: {exam.score}%
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    Tiempo: {Math.floor(exam.timeSpent / 60)} minutos
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <p>
                    Preguntas respondidas: {exam.questionsAnswered}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}; 