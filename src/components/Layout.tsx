import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Chatbot } from './Chatbot'; // Añadimos la importación del Chatbot

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`py-4 px-6 border-b ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-blue-500">OECE</span>
            <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Simulador</span>
          </Link>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 md:px-6">
        {children}
      </main>
      <footer className={`py-4 px-6 border-t ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <div className="container mx-auto text-center">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Simulador de Examen OECE © {new Date().getFullYear()}
          </p>
          <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Basado en la Ley de Contrataciones del Estado y normativas relacionadas.
          </p>
        </div>
      </footer>
      <Chatbot /> {/* Añadimos el Chatbot aquí */}
    </div>
  );
};

export default Layout;