import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon, ArrowLeft, ArrowRight, Sun, Moon, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { questions } from '../data/questions';

const TOTAL_QUESTIONS = questions.length;

function getLevel(score: number) {
  if (score >= 58) return { label: 'Avanzado', color: 'bg-green-600', passed: true };
  if (score >= 43) return { label: 'Intermedio', color: 'bg-yellow-500', passed: true };
  if (score >= 30) return { label: 'Básico', color: 'bg-blue-500', passed: true };
  return { label: 'No aprobado', color: 'bg-red-500', passed: false };
}

export const Exam: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(TOTAL_QUESTIONS).fill(-1));
  const [marked, setMarked] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 horas en segundos
  const { theme, toggleTheme } = useTheme();
  const [showNotice, setShowNotice] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !showNotice && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      setIsSubmitted(true);
    }
  }, [timeLeft, showNotice, isSubmitted]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, '0');
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  const handleSelect = (idx: number) => {
    const newAns = [...answers];
    newAns[current] = idx;
    setAnswers(newAns);
  };

  const handleMark = () => {
    setMarked(m => m.includes(current) ? m.filter(i => i !== current) : [...m, current]);
  };

  const handleNav = (idx: number) => setCurrent(idx);

  const handleNext = () => setCurrent(c => Math.min(c + 1, TOTAL_QUESTIONS - 1));
  const handlePrev = () => setCurrent(c => Math.max(c - 1, 0));

  const answered = answers.filter(a => a !== -1).length;
  const pending = TOTAL_QUESTIONS - answered;

  // Calcular puntaje y nivel
  const corrects = answers.filter((a, i) => {
    const q = questions[i];
    const correctIdx = ['A', 'B', 'C', 'D'].indexOf(q.correctAnswer);
    return a === correctIdx;
  }).length;
  const level = getLevel(corrects);

  // Modal/Aviso antes de comenzar
  if (showNotice) {
    return (
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center transition-colors duration-300">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-lg w-full text-center border border-gray-200 dark:border-gray-700">
            <AlertTriangle className="mx-auto mb-4 w-12 h-12 text-yellow-500" />
            <h2 className="text-2xl font-bold mb-4">Antes de comenzar el examen</h2>
            <ul className="text-left text-gray-700 dark:text-gray-200 mb-6 space-y-2">
              <li>• Tienes <span className="font-semibold">2 horas</span> para completar el examen.</li>
              <li>• No recargues ni cierres la página durante el examen.</li>
              <li>• Una vez iniciado, el tiempo no se detendrá.</li>
              <li>• Lee cuidadosamente cada pregunta antes de responder.</li>
            </ul>
            <button
              onClick={() => setShowNotice(false)}
              className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Comenzar examen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de resultados al finalizar
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center py-8 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-3xl mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center mb-6">
            {level.passed ? (
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-2" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500 mb-2" />
            )}
            <h2 className="text-2xl font-bold mb-2">Examen finalizado</h2>
            <div className={`px-4 py-2 rounded-lg text-white font-semibold mb-2 ${level.color}`}>{level.label}</div>
            <div className="text-lg mb-2">Puntaje: <span className="font-bold">{corrects} / {TOTAL_QUESTIONS}</span></div>
            <div className="text-gray-500 text-sm mb-2">Nivel básico: 30+, Intermedio: 43+, Avanzado: 58+</div>
            <div className="text-gray-500 text-sm mb-2">{level.passed ? '¡Felicidades, has aprobado el examen!' : 'No alcanzaste el puntaje mínimo para aprobar.'}</div>
            <button
              onClick={() => window.print()}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors print:hidden"
            >
              Imprimir / Exportar resultados
            </button>
          </div>
          <hr className="my-6 border-gray-300 dark:border-gray-700" />
          <h3 className="text-xl font-bold mb-4">Resumen y explicaciones</h3>
          <div className="space-y-6">
            {questions.map((q, i) => {
              const userIdx = answers[i];
              const correctIdx = ['A', 'B', 'C', 'D'].indexOf(q.correctAnswer);
              const isCorrect = userIdx === correctIdx;
              const opts = Object.entries(q.options);
              return (
                <div key={q.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center mb-2">
                    {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> : <XCircle className="w-5 h-5 text-red-500 mr-2" />}
                    <span className="font-semibold">Pregunta {i + 1}:</span> <span className="ml-2 text-gray-700 dark:text-gray-200">{q.question}</span>
                  </div>
                  <div className="ml-7 mb-2">
                    {opts.map(([key, opt], idx) => (
                      <div key={key} className={`py-1 px-2 rounded ${idx === correctIdx ? 'bg-green-100 dark:bg-green-900/40 font-bold' : ''} ${userIdx === idx && !isCorrect ? 'bg-red-100 dark:bg-red-900/40' : ''}`}>
                        <span className="font-bold mr-2">{key}</span> {opt}
                        {userIdx === idx && <span className="ml-2 text-xs italic">(Tu respuesta)</span>}
                        {idx === correctIdx && <span className="ml-2 text-xs italic text-green-700 dark:text-green-300">(Correcta)</span>}
                      </div>
                    ))}
                  </div>
                  {q.explanation && (
                    <div className="ml-7 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Explicación:</span> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Obtener la pregunta actual
  const q = questions[current];
  const opts = Object.entries(q.options);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center py-8 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-8">Examen de Simulación OECE</h1>
      <div className="flex w-full max-w-6xl gap-8">
        {/* Columna principal */}
        <div className="flex-1">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-6 mb-6 transition-colors">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg">Pregunta {current + 1} <span className="text-gray-400 text-base">({q.category})</span></span>
              <button
                onClick={handleMark}
                className={`text-xs px-3 py-1 rounded ${marked.includes(current) ? 'bg-yellow-500 text-gray-900' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
              >
                {marked.includes(current) ? 'Desmarcar' : 'Marcar'}
              </button>
            </div>
            <div className="mb-6">
              <p className="mb-4 text-base">{q.question}</p>
              <div className="flex flex-col gap-3">
                {opts.map(([key, opt], idx) => (
                  <button
                    key={key}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left px-5 py-3 rounded-lg border transition-all
                      ${answers[current] === idx ? 'border-blue-500 bg-blue-100 dark:bg-blue-900/40' : 'border-gray-300 dark:border-gray-700 hover:border-blue-400'}`}
                  >
                    <span className="font-bold mr-2">{key}</span> {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className="flex items-center px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
              </button>
              <button
                onClick={() => setIsSubmitted(true)}
                className="flex items-center px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50"
                disabled={answered < TOTAL_QUESTIONS}
              >
                Finalizar
              </button>
              <button
                onClick={handleNext}
                disabled={current === TOTAL_QUESTIONS - 1}
                className="flex items-center px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
              >
                Siguiente <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        {/* Columna lateral */}
        <div className="w-80 flex flex-col gap-6">
          {/* Temporizador */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-4 flex items-center justify-between transition-colors">
            <span className="text-gray-500 dark:text-gray-300"> <TimerIcon className="inline w-5 h-5 mr-2" /> </span>
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>
          {/* Resumen del examen */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-4 transition-colors">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Respondidas</span>
              <span className="text-green-500 font-bold">{answered}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Marcadas</span>
              <span className="text-yellow-500 font-bold">{marked.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Pendientes</span>
              <span className="text-red-500 font-bold">{pending}</span>
            </div>
          </div>
          {/* Progreso del examen */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-4 transition-colors">
            <div className="text-sm text-gray-400 mb-2">Progreso del examen</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all"
                style={{ width: `${Math.round((answered / TOTAL_QUESTIONS) * 100)}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-300">{answered} / {TOTAL_QUESTIONS} respondidas</div>
            <div className="text-xs text-gray-500 dark:text-gray-300">{marked.length} marcadas para revisar</div>
          </div>
          {/* Navegación de preguntas */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow p-4 transition-colors">
            <div className="text-sm text-gray-400 mb-2">Navegación de preguntas</div>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: TOTAL_QUESTIONS }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNav(idx)}
                  className={`w-8 h-8 rounded text-sm font-bold
                    ${current === idx ? 'bg-blue-500 text-white' :
                      answers[idx] !== -1 ? 'bg-green-500 text-white' :
                      marked.includes(idx) ? 'bg-yellow-400 text-gray-900' :
                      'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}
                  `}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 