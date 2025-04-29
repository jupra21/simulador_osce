import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ExamHistory } from '../components/ExamHistory';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
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
              <div className="ml-3 relative">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">{user?.name}</span>
                  <button
                    onClick={handleLogout}
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Tarjeta de Suscripción */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Estado de Suscripción
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    {user?.subscriptionStatus === 'active' ? (
                      <>
                        Suscripción activa hasta el{' '}
                        {user.subscriptionEndDate &&
                          format(new Date(user.subscriptionEndDate), "d 'de' MMMM 'de' yyyy", {
                            locale: es,
                          })}
                      </>
                    ) : (
                      'No tienes una suscripción activa'
                    )}
                  </p>
                </div>
                <div className="mt-3">
                  <Link
                    to="/subscription"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {user?.subscriptionStatus === 'active' ? 'Gestionar suscripción' : 'Suscribirse'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Tarjeta de Estadísticas */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Estadísticas
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Exámenes realizados: {user?.examHistory.length || 0}</p>
                  <p>
                    Promedio de puntuación:{' '}
                    {user?.examHistory.length
                      ? Math.round(
                          user.examHistory.reduce((acc, exam) => acc + exam.score, 0) /
                            user.examHistory.length
                        )
                      : 0}
                    %
                  </p>
                </div>
                <div className="mt-3">
                  <Link
                    to="/exam"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Iniciar nuevo examen
                  </Link>
                </div>
              </div>
            </div>

            {/* Tarjeta de Acciones Rápidas */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Acciones Rápidas
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/exam" className="text-blue-600 hover:text-blue-500">
                        Realizar un examen
                      </Link>
                    </li>
                    <li>
                      <Link to="/review" className="text-blue-600 hover:text-blue-500">
                        Repasar preguntas
                      </Link>
                    </li>
                    <li>
                      <Link to="/results" className="text-blue-600 hover:text-blue-500">
                        Ver resultados
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Historial de Exámenes */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">Historial de Exámenes</h2>
            <div className="mt-4">
              {user?.examHistory && user.examHistory.length > 0 ? (
                <ExamHistory exams={user.examHistory} />
              ) : (
                <p className="text-gray-500">No has realizado ningún examen todavía.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage; 