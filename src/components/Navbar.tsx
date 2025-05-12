import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Home, LogIn, BookOpen, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white" role="heading" aria-level={1}>
                OECE Simulator
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/')
                    ? 'border-blue-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                <Home className="h-5 w-5 mr-1" aria-hidden="true" />
                <span>Inicio</span>
              </Link>
              <Link
                to="/planes"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/planes')
                    ? 'border-blue-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
                aria-current={isActive('/planes') ? 'page' : undefined}
              >
                <BookOpen className="h-5 w-5 mr-1" aria-hidden="true" />
                <span>Planes</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              }`}
              aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ?
                <Sun className="w-6 h-6 text-yellow-400" aria-hidden="true" /> :
                <Moon className="w-6 h-6 text-gray-700" aria-hidden="true" />
              }
            </button>
            {location.pathname !== '/' && (
              <Link
                to="/login"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                  isActive('/login')
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-600 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800'
                }`}
                aria-current={isActive('/login') ? 'page' : undefined}
              >
                <LogIn className="h-5 w-5 mr-1" aria-hidden="true" />
                <span>{isActive('/login') ? 'Iniciar Sesión' : 'Acceder'}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};