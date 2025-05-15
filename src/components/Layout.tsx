import React from 'react';
import { Moon, Sun, Bot } from 'lucide-react';
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
      <header className={`py-4 px-6 border-b ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">            <Link to="/" className="flex items-center gap-2">
              <span className="font-extrabold text-2xl text-blue-500 font-sans tracking-tight">OECE</span>
              <span className={`font-semibold text-xl tracking-wide ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Simulador</span>
            </Link>
            <div className="flex items-center gap-2 border-l pl-4 ml-2">
              <Bot size={20} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} />
              <img src="/images/peru-flag.svg" alt="Peru Flag" className="w-5 h-5" />
              <span className={`text-sm font-medium tracking-wide bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent ${theme === 'dark' ? 'opacity-90' : 'opacity-100'}`}>Connect-Data-peru.ai</span>
            </div>
          </div>
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
        <div className="container mx-auto text-center">          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Simulador de Examen OECE © {new Date().getFullYear()}
          </p>
          <p className={`mt-1 text-sm font-medium tracking-wide flex items-center justify-center gap-2`}>
            <Bot size={18} className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} /> 
            <img src="/images/peru-flag.svg" alt="Peru Flag" className="w-5 h-5" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Desarrollado por Connect-Data-peru.ai
            </span>
          </p>
          <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} flex items-center justify-center gap-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <a href="https://wa.me/51960841214" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
              #960841214
            </a>
          </p>
        </div>
      </footer>
      <Chatbot /> {/* Añadimos el Chatbot aquí */}
    </div>
  );
};

export default Layout;