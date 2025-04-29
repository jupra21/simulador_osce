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
    <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">OECE Simulator</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/')
                    ? 'border-blue-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                <Home className="h-5 w-5 mr-1" />
                Inicio
              </Link>
              <Link
                to="/planes"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/planes')
                    ? 'border-blue-500 text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white'
                }`}
              >
                <BookOpen className="h-5 w-5 mr-1" />
                Planes
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
            </button>
            {location.pathname !== '/' && (
              <Link
                to="/login"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                  isActive('/login')
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-600 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800'
                }`}
              >
                <LogIn className="h-5 w-5 mr-1" />
                {isActive('/login') ? 'Iniciar Sesión' : 'Acceder'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}; 