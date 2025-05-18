import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ExamHistory } from '../components/ExamHistory';
import { 
  Trophy, 
  Timer, 
  Star,
  BookOpen,
  Target,
  TrendingUp,
  Brain,
  GraduationCap,
  Medal
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth(); // Añadir logout
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cargando...</h1>
        </div>
      </div>
    );
  }  const examSimulators = [
    {      id: 'basic-1',
      title: 'Simulador Básico I',
      description: 'Domina los fundamentos de los nuevos procedimientos de selección y el marco normativo esencial que los rige.', // <--- CAMBIO
      questions: 72,
      difficulty: 'Básico',
      time: 60,
      icon: BookOpen,
      color: 'bg-green-500',
      enabled: true
    },
    {      id: 'basic-2',
      title: 'Simulador Básico II',
      description: 'Afianza tu conocimiento sobre cuándo y cómo aplicar los diferentes procedimientos de selección en la contratación pública, incluyendo sus etapas y bases legales clave.', // <--- CAMBIO
      questions: 72,
      difficulty: 'Básico',
      time: 60,
      icon: Target,
      color: 'bg-green-500'
    },
    {      id: 'intermediate-1',
      title: 'Simulador Intermedio I',
      description: 'Afianza tu conocimiento sobre cuándo y cómo aplicar los diferentes procedimientos de selección en la contratación pública, incluyendo sus etapas y bases legales clave.', // <--- CAMBIO
      questions: 72,
      difficulty: 'Intermedio',
      time: 60,
      icon: TrendingUp,
      color: 'bg-yellow-500'
    },
    {      id: 'advanced-1',
      title: 'Simulador Avanzado I',
      description: 'Desafía tus conocimientos con escenarios complejos, resolución de casos prácticos avanzados y aplicación detallada de la normativa en situaciones límite.', // <--- CAMBIO
      questions: 72,
      difficulty: 'Avanzado',
      time: 60,
      icon: Brain,
      color: 'bg-red-500'
    }
  ];

  const userProgress = {
    simulatorsCompleted: 2,
    averageScore: 75,
    totalPracticeTime: '4h 30m'
  };
  const startExam = (examId: string) => {
    navigate(`/simulador/exam/${examId}`);
  };

  const filteredSimulators = selectedDifficulty === 'all'
    ? examSimulators
    : examSimulators.filter(sim => sim.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirigir a login después de cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      // Opcional: Mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-blue-600">Simulador de Exámenes</h1>
              </div>
            </div>
            <div className="flex items-center">
              <div className="ml-3 relative">                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">{user?.name}</span>
                  <button
                    onClick={handleLogout} // Llamar a handleLogout
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Estadísticas del Usuario */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center gap-4">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Simuladores Completados
                  </p>
                  <p className="text-2xl font-bold">{userProgress.simulatorsCompleted}</p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center gap-4">
                <Star className="w-8 h-8 text-blue-500" />
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Promedio General
                  </p>
                  <p className="text-2xl font-bold">{userProgress.averageScore}%</p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className="flex items-center gap-4">
                <Timer className="w-8 h-8 text-green-500" />
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Tiempo Total de Práctica
                  </p>
                  <p className="text-2xl font-bold">{userProgress.totalPracticeTime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selector de Simuladores */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Simuladores Disponibles
              </h2>
              
              {/* Filtro de Dificultad */}
              <div className="flex space-x-2">
                {['all', 'básico', 'intermedio', 'avanzado'].map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedDifficulty === difficulty
                        ? 'bg-blue-500 text-white'
                        : `${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white`
                    }`}
                  >
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSimulators.map((simulator) => (
                <div
                  key={simulator.id}
                  className={`p-6 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${simulator.color}`}>
                      <simulator.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {simulator.title}
                      </h3>
                      <p className={`mb-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {simulator.description}
                      </p>
                      
                      {/* Información de Dificultad y Tiempo */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          simulator.difficulty === 'Básico' ? 'bg-green-100 text-green-700' :
                          simulator.difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {simulator.difficulty}
                        </span>
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {simulator.questions} preguntas • {simulator.time} minutos
                        </span>
                      </div>                      {/* Temas */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              theme === 'dark'
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            Contrataciones
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              theme === 'dark'
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            OSCE
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => startExam(simulator.id)}
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <GraduationCap className="w-5 h-5" />
                        Iniciar Simulador
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consejos y Recomendaciones */}
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex items-center gap-3 mb-4">
              <Medal className="w-6 h-6 text-blue-500" />
              <h3 className={`text-lg font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Recomendaciones
              </h3>
            </div>
            <ul className={`list-disc list-inside space-y-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <li>Comienza con los simuladores básicos para familiarizarte con el formato</li>
              <li>Practica regularmente y completa al menos un simulador por día</li>
              <li>Revisa tus respuestas incorrectas y toma notas de los temas a reforzar</li>
              <li>Sigue una progresión lógica: básico → intermedio → avanzado</li>
              <li>Realiza el Simulador Final cuando domines todos los temas anteriores</li>
            </ul>
          </div>
        </div>
      </main>
    </div>  );
};

export default DashboardPage;

// Asegurarnos de que el componente se exporte correctamente
if (typeof window !== 'undefined') {
  (window as any).DashboardPage = DashboardPage;
}