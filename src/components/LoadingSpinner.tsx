import React from 'react';
import { Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LoadingSpinner: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm" 
      role="alert" 
      aria-busy="true"
      aria-label="Cargando contenido"
    >
      <div className="flex flex-col items-center space-y-4">
        <Loader2 
          className={`w-12 h-12 animate-spin ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}
          aria-hidden="true"
        />
        <p className={`text-lg font-medium ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
        }`}>
          <span className="sr-only">Estado:</span>
          Cargando...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
